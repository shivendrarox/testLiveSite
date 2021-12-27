import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import BannerCarousel from '../../components/commonComponent/Carousel/BannerCarousel'
import GoogleSignupButton from '../../components/commonComponent/GoogleButton'
import SampleEmail from '../../components/commonComponent/SampleEmail'
import SignupButton from '../../components/commonComponent/SignupButton'
import Input from '../../components/commonComponent/Input/Input'


function makeUseCaseSchema() {

  return {
      '@context': 'http://schema.org',
      '@type': 'WebApplication',
      "@id": "Mailmodo",
      applicationCategory: "BusinessApplication",
      name :'Mailmodo',
      operatingSystem: "all",
      url: "https://www.mailmodo.com/use-case/",
      screenshot:"https://www.mailmodo.com/static/images/og-image.jpg",
      creator : {
        '@type': 'Organization',
        url: 'https://www.mailmodo.com',
        name: 'Mailmodo',
        logo: {
          "@type":"ImageObject",
          url:"https://www.mailmodo.com/static/images/logo/logo-full.svg",

          }
        }
  }
}

export default function feature() {
  const [floatingCTA, setFloatingCTA] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [leadGenerationTestEmail, setLeadGenerationTestEmail] = useState('')
  const [responseRateTestEmail, setResponseRateTestEmail] = useState('')
  const [cartRecoveryTestEmail, setCartRecoveryTestEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isEmailSent, setIsEmailSent] = useState(false)

  const names = [
    'newsletter',
    'e-commerce',
    'survey',
    'lead generation',
    'demo booking',
    'appointments',
    'reviews',
    'NPR',
    'CSAT',
    'cart recovery',
    'promotions',
    'premium calculation',
    'press release',
  ]
  const [wordIndex, setWordIndex] = useState(0)
  useEffect(() => {
    let intervalId = setInterval(() => {
      setWordIndex((preIndex) => {
        if (preIndex === names.length - 1) {
          return 0
        } else {
          return preIndex + 1
        }
      })
    }, 1500)
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  const handleScroll = (e) => {
    let box = document.getElementById('homepage-banner')
    // let width = box.offsetWidth;
    let height = box?.offsetHeight
    if (window.scrollY > height) setFloatingCTA(true)
    else setFloatingCTA(false)
  }

  return (
    <>

    <div className="home-page">
      <Head>
         {/* JSON LD data */}
         <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(makeUseCaseSchema()) }}
        />
        {/* JSON LD data end */}
        <link rel="canonical" href="https://www.mailmodo.com/use-case/" />

        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        <title>AMP Email Use Cases and Applications | Mailmodo</title>

        <meta
          name="description"
          content='Interactive email marketing for use cases like lead generation, surveying,sales, marketing, user engagement and more'
        />

        <meta
          name="keywords"
          content="email marketing features, email marketing automation, email marketing list, best email marketing tool, AMP Email Marketing, AMP"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="AMP Email Use Cases and Applications | Mailmodo"
        />
        <meta
          property="og:description"
          content='Interactive email marketing for use cases like lead generation, surveying,sales, marketing, user engagement and more'
        />
        <meta property="og:url" content="https://www.mailmodo.com/use-case/" />
        <meta property="og:site_name" content="Mailmodo" />
        <meta
          property="og:image"
          content="https://www.mailmodo.com/static/images/og-image.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.mailmodo.com/static/images/og-image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Interactive email marketing for use cases like lead generation, surveying,sales, marketing, user engagement and more"
        />
        <meta
          name="twitter:title"
          content="AMP Email Use Cases and Applications | Mailmodo"
        />
        <meta name="twitter:site" content="@mailmodo" />
        <meta
          name="twitter:image"
          content="https://www.mailmodo.com/static/images/og-image.png"
        />
      </Head>
      <div className="layout-gap"></div>
      <div className="homepage-banner" id="homepage-banner">
        {/* banner fold */}
        <div className="container">
          <div className="banner-inner-wrapper row justify-content-between">
            <div className="content col-md-6">
              {/* <p className="tag-para">Create & Send Actionable Emails &</p> */}
              <div className="layout-padding"></div>

              <h1 className="tag-heading">
                Use AMP Email for <br />
                <span className="animate-letter">{names[wordIndex]}</span>
              </h1>
              <p className="text">
                Your one-stop shop for all email marketing needs
              </p>
              <div className="form-wrap d-flex align-items-center justify-content-center justify-content-md-start">
                <GoogleSignupButton trackingId={'google_hero_usecase'} extraClass="extra-class" />
                <SignupButton trackingId={'email_hero_usecase'} extraClass="extra-class" />
              </div>
              <h2 className="get-free">Get FREE access by signing up now</h2>
            </div>
            <div className="carousel-banner col-md-6">
              <BannerCarousel />
            </div>
          </div>
        </div>
      </div>
      {/* cta */}
      <div className={`cta-email ${floatingCTA && 'floating-cta'}`}>
        <div className="col-md-8 mx-auto d-md-flex align-items-center justify-content-center px-0 px-md-3">
          <div className="logo-cta d-none d-md-block">
            <img alt="mailmodo logo" alt="mailmodo" src="/static/images/logo.svg" />
          </div>
          <p className="cta-text text-center text-md-left">
            Create & Send Actionable Emails & AMPlify Email Conversions
          </p>
          <div className="form-wrap d-flex align-items-center">
            {/* TODO */}
            {/* <Input
              type="text"
              className="cta-input"
              placeholder="Enter Email"
            />
            <button className="button-primary btn d-flex align-items-center">
              <span className="btn-text">Try it for FREE</span>
              <img src="/static/images/icon/arrow.svg" />
            </button> */}
            <GoogleSignupButton trackingId={'google_sticky_usecase'} extraClass="extra-class" />
            <SignupButton trackingId={'email_sticky_usecase'} />
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container">
        <div className="use-case-section">
          <div className="row">
            <div className="col-md-7">
              <div className="detailed">
                <h2 className="heading text-left">Generate Leads</h2>
                <p className="tagline">
                  Nurture your leads & sales funnel with Mailmodo
                </p>
                <ul className="list-unstyled case-list">
                  <li>
                    <h3 className="sub-heading">Onboarding</h3>
                    <p className="text">
                      Kick off your relationships with clients by sending lively
                      AMP emails
                    </p>
                    <img
                      src="/static/images/usecase/onboarding.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                  <li>
                    <h3 className="sub-heading">Lead Engagement</h3>
                    <p className="text">
                      Send AMP engagement emails to your leads for higher sales
                    </p>
                    <img
                      src="/static/images/usecase/lead_engagement.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                  <li>
                    <h3 className="sub-heading">Lead Nurturing</h3>
                    <p className="text">
                      Engage your prospects with AMP emails to fast track their
                      conversions
                    </p>
                    <img
                      src="/static/images/usecase/lead_nurturing.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                  <li>
                    <h3 className="sub-heading">Re-engagement</h3>
                    <p className="text">
                      Warm up cold leads with AMP Emails and nurture them for
                      closure
                    </p>
                    <img
                      src="/static/images/usecase/re-engagement.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                  <li>
                    <h3 className="sub-heading">Appointments</h3>
                    <p className="text">
                      Include calendars in email for bookings, appointments and
                      to send invites
                    </p>
                    <img
                      src="/static/images/usecase/appointments.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                  <li>
                    <h3 className="sub-heading">Cold Outreach</h3>
                    <p className="text">
                      Get higher response rates for cold outreach with our
                      improved deliverability
                    </p>
                    <img
                      src="/static/images/usecase/cold_outreach.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-center justify-content-center">
              <div className="usecase-card">
                <h3>
                  5X
                  <br />
                  Higher Lead Generation
                </h3>
                <SampleEmail
                  usecase="Generate Leads"
                  campaignId="1a679c1c-93a8-4c4c-bc42-eaa792d96ffc"
                  trackingId = "sample_genrate_leads_usecase"
                />
                <img
                  src="/static/images/usecase/price-arrow.svg"
                  className="illustration"
                  alt="icon svg"
                  title="icon"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="use-case-section">
          <div className="row">
            <div className="col-md-7">
              <div className="detailed">
                <h2 className="heading text-left">Conduct Surveys</h2>
                <p className="tagline">
                  Collect data with powerful AMP Forms in emails
                </p>
                <ul className="list-unstyled case-list">
                  <li>
                    <h3 className="sub-heading">NPS</h3>
                    <p className="text">
                      Uncover loyalty-driving factors to make better growth
                      decisions
                    </p>
                    <img
                      src="/static/images/usecase/NPS.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                  <li>
                    <h3 className="sub-heading">CSAT</h3>
                    <p className="text">
                      Send AMP engagement emails to your leads for higher sales
                    </p>
                    <img
                      src="/static/images/usecase/CSAT.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                  <li>
                    <h3 className="sub-heading">Product Review</h3>
                    <p className="text">
                      Improve your product with higher number of reviews &
                      concept testing
                    </p>
                    <img
                      src="/static/images/usecase/product_review.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                  <li>
                    <h3 className="sub-heading">Market Research</h3>
                    <p className="text">
                      Perform in-depth market research with powerful multi-step
                      forms
                    </p>
                    <img
                      src="/static/images/usecase/market_research.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                  <li>
                    <h3 className="sub-heading">HR Survey</h3>
                    <p className="text">
                      Simplify HR surveys & job satisfaction interviews with AMP
                      emails
                    </p>
                    <img
                      src="/static/images/usecase/HR_survey.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                  <li>
                    <h3 className="sub-heading">Opinion Polls</h3>
                    <p className="text">
                      Poll using AMP elements in email for improved & more
                      responses
                    </p>
                    <img
                      src="/static/images/usecase/opinion_polls.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-center justify-content-center">
              <div className="usecase-card">
                <h3>
                  75%
                  <br />
                  Increase in response rate
                </h3>
                <SampleEmail
                  usecase="Conduct Surveys"
                  campaignId="fb9f75a0-7e7c-413a-a72f-ed114f5c518f"
                  trackingId = "sample_conduct_surveys_usecase"

                />
                <img
                  src="/static/images/usecase/price-arrow.svg"
                  className="illustration"
                  alt="icon svg"
                  title="icon"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="use-case-section">
          <div className="row">
            <div className="col-md-7">
              <div className="detailed">
                <h2 className="heading text-left">Boost Sales</h2>
                <p className="tagline">
                  Use dynamic AMP elements for e-commerce
                </p>
                <ul className="list-unstyled case-list">
                  <li>
                    <h3 className="sub-heading">Ecommerce Sales</h3>
                    <p className="text">
                      Create carts and accept payments within email to maximize
                      sales
                    </p>
                    <img
                      src="/static/images/usecase/ecommerce_sale.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                  <li>
                    <h3 className="sub-heading">Cart Recovery</h3>
                    <p className="text">
                      Improve the recovery rate of abandoned carts with engaging
                      AMP emails
                    </p>
                    <img
                      src="/static/images/usecase/cart_recovery.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                  <li>
                    <h3 className="sub-heading">Promotional Offers</h3>
                    <p className="text">
                      Spice up your promotions & offers with AMP emails to meet
                      your sales targets
                    </p>
                    <img
                      src="/static/images/usecase/promotional.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                  <li>
                    <h3 className="sub-heading">Transactional Emails</h3>
                    <p className="text">
                      Auto-trigger AMP emails by events and user-behaviour to
                      enhance user experience
                    </p>
                    <img
                      src="/static/images/usecase/transactional_emails.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-center justify-content-center">
              <div className="usecase-card">
                <h3>
                  80%
                  <br />
                  Increase in Cart Recovery
                </h3>
                <SampleEmail
                  usecase="Boost Sales"
                  campaignId="cc2d9c4c-a8a5-4800-924d-b90d0f63ecd3"
                  trackingId = "sample_boost_sales_usecase"

                />
                <img
                  src="/static/images/usecase/price-arrow.svg"
                  className="illustration"
                  alt="icon svg"
                  title="icon"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="use-case-section">
          <div className="row">
            <div className="col-md-7">
              <div className="detailed">
                <h2 className="heading text-left">Engage Better</h2>
                <p className="tagline">Improve engagement with AMP</p>
                <ul className="list-unstyled case-list">
                  <li>
                    <h3 className="sub-heading">Newsletters</h3>
                    <p className="text">
                      Revamp your newsletters with AMP content for smoother
                      reading
                    </p>
                    <img
                      src="/static/images/usecase/Newsletters.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                  <li>
                    <h3 className="sub-heading">Seasonal Campaigns</h3>
                    <p className="text">
                      Add extra warmth to your greetings, bulletins & seasonal
                      offers
                    </p>
                    <img
                      src="/static/images/usecase/Campaign.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                  <li>
                    <h3 className="sub-heading">Calculators</h3>
                    <p className="text">
                      Leverage Mailmodo to calculate premiums, SIP, etc. within
                      emails
                    </p>
                    <img
                      src="/static/images/usecase/Calculators.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                  <li>
                    <h3 className="sub-heading">Product Release</h3>
                    <p className="text">
                      AMPlify the impact of announcements & press releases with
                      Mailmodo
                    </p>
                    <img
                      src="/static/images/usecase/ProductRelease.svg"
                      className="icon"
                      alt="icon svg"
                      title="icon"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-center justify-content-center">
              <div className="usecase-card">
                <h3>
                  3X
                  <br />
                  Higher Open Rate
                </h3>
                <SampleEmail
                  usecase="Engage Better"
                  campaignId="260b7323-bd8e-44f8-8ed5-4311d6df9f89"
                  trackingId = "sample_engage_better_usecase"

                />
                <img
                  src="/static/images/usecase/price-arrow.svg"
                  className="illustration"
                  alt="icon svg"
                  title="icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="mailmodo-designed-card-wrapper">
          <img
            src="/static/images/email-marketing-left.svg"
            className="illustration-1"
            alt="illustration"
            title="icon"
          />
          <img
            src="/static/images/email-marketing-right.svg"
            className="illustration-2"
            alt="illustration"
            title="icon"

          />
          <div className="container position-relative">
            <h2 className="heading">
              We have designed Mailmodo for all business models
            </h2>
            <div className="row">
              <div className="col-md-3">
                <div className="mailmodo-designed-card">
                  <img src="/static/images/usecase/Saas.svg" alt="icon svg" title="icon" className="icon" />
                  <h3 className="title">SaaS</h3>
                  <p className="text">
                    Create winning solutions with our SaaS offerings like Demo
                    Booking
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mailmodo-designed-card">
                  <img
                  alt="icon svg" title="icon"
                    src="/static/images/usecase/ecommerce.svg"
                    className="icon"
                  />
                  <h3 className="title">Ecommerce</h3>
                  <p className="text">
                    Scale with our Ecommerce offerings like auto-trigger & cart
                    recovery emails
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mailmodo-designed-card">
                  <img
                  alt="icon svg" title="icon"
                    src="/static/images/usecase/B2C_services.svg"
                    className="icon"
                  />
                  <h3 className="title">B2C Services</h3>
                  <p className="text">
                    Hit revenue targets with our exclusive B2C offerings for
                    lead generation
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mailmodo-designed-card">
                  <img
                  alt="icon svg" title="icon"
                    src="/static/images/usecase/marketplace.svg"
                    className="icon"
                  />
                  <h3 className="title">Marketplace</h3>
                  <p className="text">
                    Connect buyers & sellers with our Marketplace offerings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="horizontal-section">
        <div className="container">
          <h2 className="heading">And Mailmodo is horizontal</h2>
          <p className="para">
            We serve clients who hail from a range of industry verticals
          </p>
          <div className="row">
            <div className="col-md-3">
              <div className="mailmodo-client-card">
                <img
                alt="icon svg" title="icon"
                  src="/static/images/usecase/Real_estate.svg"
                  className="icon"
                />
                <h3 className="title">Real estate</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mailmodo-client-card">
                <img alt="icon svg" title="icon" src="/static/images/usecase/BFSI.svg" className="icon" />
                <h3 className="title">BFSI</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mailmodo-client-card">
                <img
                alt="icon svg" title="icon"
                  src="/static/images/usecase/Education.svg"
                  className="icon"
                />
                <h3 className="title">Education</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mailmodo-client-card">
                <img
                alt="icon svg" title="icon"
                  src="/static/images/usecase/Recruitment.svg"
                  className="icon"
                />
                <h3 className="title">Recruitment</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-outer-wrapper mt-0">
        <img
          src="/static/images/contact-illustration.svg"
          className="left-illustration"
          alt="mailmodo-contact-background-right"
          title="background image"
        />
        <div className="col-md-6 mx-auto d-flex align-items-center justify-content-center">
          <div className="contact-text-head">
            <p>Have something else on your mind?</p> We got you covered!
          </div>
        </div>
        <div className="container" id="contact-sales">
          <div className="contact-form-wrap col-md-9 mx-auto d-flex align-items-center ">
            <div className="contact-form-header">
              Contact us for a free demo to make your email marketing more
              effective
            </div>

            <div className="row d-flex justify-content-center">
              <form name="submit-to-google-sheet">
                <Input
                  type="email"
                  name="email"
                  className="col-xs-12 contact-input"
                  placeholder="Enter Your Email"
                  required
                />
                <button
                  type="submit"
                  className="col-xs-12 button-secondary  btn"
                  id="custom_pricing_usecase"
                >
                  <span className="btn-text d-block">Book a free demo</span>
                  {/* <img src="/static/images/icon/arrow.svg" /> */}
                </button>
                <div style={{ color: '#5858e0' }}>{successMessage}</div>
              </form>
            </div>
            <a
              className="contact-number d-flex align-items-center"
              href="tel:+12626002002"
            >
              <img
                alt="mailmodo-phone-icon"
                title="phone icon"
                className="mr-2"
                src="/static/images/icon/icon_call.svg"
              />
              <span>+1 262 600 2002</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
