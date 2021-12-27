import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const PricingCard = () => {
  const [sliderValue, setSliderValue] = useState(0)
  const [price, setPrice] = useState(79)
  const [oldPrice, setOldPrice] = useState(99)
  const [discount, setDiscount] = useState(0)
  const [displayPrice, setDisplayPrice] = useState(3000)
  const pricing = [
    3000,
    15000,
    50000,
    100000,
    200000,
    300000,
    400000,
    500000,
    600000,
    700000,
    800000,
    900000,
    1000000,
    1500000,
    2000000,
    2500000,
    3000000,
    3500000,
    4000000,
    4500000,
    5000000,
    5000002,
  ]
  // slider
  const handleSlider = (e) => {
    setAliderValue(parseInt(e.target.value))
  }
  useEffect(() => {
    if (displayPrice <= 3000) {
      setPrice(0)
      setOldPrice(39)
      setDiscount(100)
    } else if (displayPrice > 3000 && displayPrice <= 15000) {
      setPrice(39)
      setOldPrice(59)
      // const discountValue = Math.floor(
      //   ((calculatedOldPrice - calculatedPrice) / calculatedOldPrice) * 100
      // );
      setDiscount(34)
    } else if (displayPrice > 15000 && displayPrice <= 50000) {
      setPrice(99)
      setOldPrice(150)
      setDiscount(34)
    } else if (displayPrice > 50000 && displayPrice <= 100000) {
      setPrice(149)
      setOldPrice(225)
      setDiscount(34)
    } else calculatePrice()
    // calculateDiscount();
    // return () => window.removeEventListener('scroll', handleScroll);
  }, [displayPrice])

  const calculatePrice = () => {
    // if(sliderValue> 2000000){

    // }
    if (displayPrice < 1000001) {
      let calculatedPrice = 99 + Math.floor(displayPrice / 100000) * 50
      let calculatedOldPrice = 150 + Math.floor(displayPrice / 100000) * 75
      const discountValue = Math.round(
        ((calculatedOldPrice - calculatedPrice) / calculatedOldPrice) * 100
      )
      setDiscount(discountValue)
      setPrice(calculatedPrice)
      setOldPrice(calculatedOldPrice)
    } else {
      let calculatedPrice =
        599 + Math.ceil((displayPrice - 1000000) / 500000) * 200
      let calculatedOldPrice =
        900 + Math.ceil((displayPrice - 1000000) / 500000) * 300
      const discountValue = Math.round(
        ((calculatedOldPrice - calculatedPrice) / calculatedOldPrice) * 100
      )
      setDiscount(discountValue)
      setPrice(calculatedPrice)
      setOldPrice(calculatedOldPrice)
    }
  }
  const allowedValues = (index) => {
    let value = pricing[index]
    // for (let i = 1; i <= index; i++) {
    //   if (value < 200000) {
    //     value += 50000;
    //   } else {
    //     value += 100000;
    //   }
    // }
    // let minPricingIndex = pricing.indexOf(minValue);
    value = pricing[index]
    setSliderValue(index)
    setDisplayPrice(value)
  }
  const router = useRouter()?.asPath
  console.log('router', router)
  return (
    <div className={`pricing-fold ${router == '/pricing' ? 'pb-5' : ''}`}>
      <div className="container inner-wrapper-calculator-card">
        <div className="row">
          <div className="col-md-7 pr-md-0">
            <div className="select-price-card-wrapper">
              <h2 className="pricing-title">
                Affordable &amp; Simple <span>Pricing</span>
              </h2>
              <div className="select-price-card">
                <label className="email-head">Number of emails per month</label>
                <h3 className="emails">
                  {/* {sliderValue <= 2000000 ? sliderValue || 5000 : '>2000000'} */}
                  {displayPrice > 5000000
                    ? '>5,000,000'
                    : displayPrice.toLocaleString()}
                </h3>
                <div className="slider-wrapper">
                  <input
                    type="range"
                    style={{
                      background: `linear-gradient(to right, #20C58B 0%, #20C58B ${
                        (sliderValue / (pricing.length - 1)) * 100
                      }%, #fff ${
                        (sliderValue / (pricing.length - 1)) * 100
                      }%, #fff 100%)`,
                    }}
                    min={0}
                    max={pricing.length - 1}
                    step={1}
                    value={sliderValue}
                    class="slider"
                    id="myRange"
                    onChange={(e) => allowedValues(e.target.value)}
                  />
                </div>
                <label className="select-option">
                  Discounted Prices Valid Till 31st March 2021
                </label>
                {/* <div className="option-wrapper d-flex align-items-center">
                    <label
                      className="custom-control smtp custom-radio"
                      htmlFor="own"
                    >
                      <input
                        type="radio"
                        id="own"
                        name="customRadio"
                        className="custom-control-input"
                      />
                      <label className="custom-control-label">
                        My own SMTP
                      </label>
                    </label>
                    <label
                      className="custom-control smtp custom-radio"
                      htmlFor="mailmodo"
                    >
                      <input
                        type="radio"
                        id="mailmodo"
                        name="customRadio"
                        className="custom-control-input"
                      />
                      <label className="custom-control-label">
                        Mailmodo SMTP
                      </label>
                    </label>
                  </div> */}
              </div>
            </div>
          </div>
          <div className="col-md-5 pl-md-0">
            <div className="your-price">
              {displayPrice > 5000000 ? (
                <>
                  <p className="head">{` `}</p>
                  <div className="price-rate-offer d-flex align-items-center justify-content-center">
                    <h3 className="price">{'Request Pricing'}</h3>
                    {/* <span className="tag">
                        {discount}% Off
                        <img
                          className="price-illustration"
                          src="/static/images/price-arrow.svg"
                        />
                      </span> */}
                  </div>
                  <label className="remove-price"></label>
                </>
              ) : (
                <>
                  <p className="head">Your Price</p>
                  <div className="price-rate-offer d-flex align-items-center justify-content-center">
                    <h3 className="price">
                      {price ? `$${price.toLocaleString()}/MO` : 'FREE'}
                    </h3>
                    <span className="tag">
                      {discount}% Off
                      <img
                        className="price-illustration"
                        src="/static/images/price-arrow.svg"
                        alt="mailmodo-price-arrow"
                        title="mailmodo-price-arrow icon"
                      />
                    </span>
                  </div>
                  <label className="remove-price">{`$${oldPrice.toLocaleString()}/MO`}</label>
                </>
              )}

              <div className="paying-customer-card">
                <label className="head-paying-customer-card">
                  All paying customers get
                </label>
                <ul className="list-unstyled d-flex items-introduce flex-wrap">
                  <li className="d-flex align-items-center justify-content-start">
                    <img
                      className="icon-check"
                      src="/static/images/icon/green-check.svg"
                      alt="mailmodo-check"
                      title="mailmodo-check icon"
                    />
                    <span className="text">Unlimited Template Creation</span>
                  </li>
                  <li className="d-flex align-items-center  justify-content-end">
                    <img
                      className="icon-check"
                      src="/static/images/icon/green-check.svg"
                      alt="mailmodo-check"
                      title="mailmodo-check icon"
                    />
                    <span className="text">No Mailmodo Branding</span>
                  </li>
                  <li className="d-flex align-items-center  justify-content-start">
                    <img
                      className="icon-check"
                      src="/static/images/icon/green-check.svg"
                      alt="mailmodo-check"
                      title="mailmodo-check icon"
                    />
                    <span className="text">Unlimited Domains</span>
                  </li>
                  <li className="d-flex align-items-center  justify-content-end">
                    <img
                      className="icon-check"
                      src="/static/images/icon/green-check.svg"
                      alt="mailmodo-check"
                      title="mailmodo-check icon"
                    />
                    <span className="text">Automated Triggered Emails</span>
                  </li>

                  <li className="d-flex align-items-center justify-content-start">
                    <img
                      className="icon-check"
                      src="/static/images/icon/green-check.svg"
                      alt="mailmodo-check"
                      title="mailmodo-check icon"
                    />
                    <span className="text">
                      All Integrations including Zapier
                    </span>
                  </li>
                  <li className="d-flex align-items-center justify-content-end">
                    <img
                      className="icon-check"
                      src="/static/images/icon/green-check.svg"
                      alt="mailmodo-check"
                      title="mailmodo-check icon"
                    />
                    <span className="text">Custom SMTP Options</span>
                  </li>
                </ul>
                {displayPrice <= 5000000 ? (
                  <div className="footer-your-price">
                    <Link href="https://manage.mailmodo.com/auth/signup">
                      <button className="btn button-success">Signup Now</button>
                    </Link>
                  </div>
                ) : (
                  <div className="footer-your-price">
                    <Link href="#contact-sales">
                      <button className="btn button-success-pricing">
                        Contact Sales
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCard
