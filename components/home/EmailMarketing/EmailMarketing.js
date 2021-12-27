import EmailMarketingCarousel from "../../../components/commonComponent/EmailMarketingCarousel/EmailMarketingCarousel";
import React from "react";

export default function EmailMarketing() {
    return (
        <>
              <div className="email-marketing-fold">
        <img
          className="left-illustration"
          alt="mailmodo-background-left"
          src="/static/images/email-marketing-left.svg"
        />
        <img
          className="right-illustration d-none d-md-block"
          alt="mailmodo-background-right"
          src="/static/images/email-marketing-right.svg"
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading">
                A Complete <span>Email Marketing Software</span> For Your
                Business
              </h2>
              <div className="layout-padding"></div>

            </div>

            {/* <img className="w-100" src="/static/images/screen-demo.svg" /> */}
            <EmailMarketingCarousel />
            <div className="layout-padding"></div>

            <div className="d-md-flex justify-content-center  d-none w-100">
              {/* <GoogleSignupButton trackingId={'google_carousel_home'} extraClass="extra-class mr-3" />
              <SignupButton trackingId={'email_carousel_home'} /> */}
                          <div className="layout-gap"></div>

            </div>
            {/* <div className="col-md-12 text-center">
              <center>
                <button className="button-primary btn d-flex align-items-center">
                  <span className="btn-text">Try it for FREE</span>
                  <img src="/static/images/icon/arrow.svg" />
                </button>
              </center>
            </div> */}



          </div>
        </div>
      </div>
                
        </>
    )
  }
