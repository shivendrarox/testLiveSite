import InfoCard from "../../../components/commonComponent/InfoCard";

export default function InfoFold() {
    return (
        <div className="col-md-12 info-fold">
        <div className="layout-padding"></div>
  
          <div className="container">
            <div className="pl-md-5 pl-md-0 info-heading pr-md-5 pr-md-0">
  
            <h2 className="info-heading">
            <span className="d-block d-md-inline-block">
                Companies Trust Mailmodo
              </span>{" "}
              to Deliver Great Email Experience
            </h2>
            </div>
  
            <div className="row mx-auto align-items-center justify-content-center">
              <InfoCard
                // className="col-xs-12"
                imageSrc="https://res.cloudinary.com/testcdn93451/image/upload/q_50/v1627715862/Oscar_wdf0cb.webp"
                primaryTitle={"Great benefits"}
                secondaryTitle={""}
                personName="Oscar M"
                content={`Easy to use and create the campaigns, love the automation you can create, really helps spend less time prospecting`}
                jobTitle="Marketing Manager, Economista"
                primaryColor="red"
              />
              <InfoCard
                // className="col-xs-12"
                imageSrc="https://res.cloudinary.com/testcdn93451/image/upload/q_50/v1627715862/Oscar_wdf0cb.webp"
                primaryTitle={"Extremely responsive"}
                secondaryTitle={""}
                personName="Kate Lotz"
                content={`The Mailmodo team is extremely responsive, helping to troubleshoot any questions or concerns. Their customer service has been unparalleled`}
                jobTitle="Associate Director, UnivAssist"
                primaryColor="green"
              />
              <InfoCard
                // className="col-xs-12"
                imageSrc="https://res.cloudinary.com/testcdn93451/image/upload/q_50/v1627715862/Oscar_wdf0cb.webp"
                primaryTitle={"Great AMP approach"}
                secondaryTitle={""}
                personName="Hugo Alves"
                content={`It's great to be able to get interactions within the email itself without taking the user out of context`}
                jobTitle="Senior Product Manager, Prolific"
                primaryColor="blue"
              />
            </div>
  
          {/*Brands and VC*/}
            {/* <div className="stack-overflow">
              <ul className="list-unstyled d-flex company-logos">
                <li className="company-logo d-flex align-items-center justify-content-center">
                  <img
                    src="/static/images/razorpay.png"
                    className="p-md-2"
                    alt="mailmodo-razorpay-logo"
                  />
                </li>
                <li className="company-logo d-flex align-items-center justify-content-center">
                  <img
                    src="/static/images/insta.png"
                    className="p-md-2"
                    alt="mailmodo-insta-logo"
                  />
                </li>
                <li className="company-logo d-flex align-items-center justify-content-center">
                  <img
                    src="/static/images/fund.png"
                    className="p-md-2"
                    alt="mailmodo-fund-logo"
                  />
                </li>
                <li className="company-logo d-flex align-items-center justify-content-center">
                  <img
                    src="/static/images/rupeek.png"
                    className="p-md-2"
                    alt="mailmodo-rupeek-logo"
                  />
                </li>
                <li className="company-logo d-flex align-items-center justify-content-center">
                  <img
                    src="/static/images/foyr.png"
                    className="p-md-2"
                    alt="mailmodo-foyr-logo"
                  />
                </li>
                <li className="company-logo d-flex align-items-center justify-content-center">
                  <img
                    src="/static/images/click.svg"
                    className="p-md-2"
                    alt="mailmodo-clickai-logo"
                  />
                </li>
              </ul>
            </div>
             */}
            {/* <div className="support-text">
              We are Trusted by <span>Leading Investors & our Mentors</span>
            </div> */}
            {/* <div className="stack-overflow">
              <ul className="list-unstyled d-flex company-logos justify-content-md-center">
                <li className="company-logo d-flex align-items-center justify-content-center">
                  <img style={{maxHeight:"5.5rem",maxWidth:"5.5rem"}} 
                    src="/static/images/yc.png"
                    alt="mailmodo-ycombinator-logo"
                  />
                </li>
                <li className="company-logo d-flex align-items-center justify-content-center">
                  <img
                    src="/static/images/seq.svg"
                    alt="mailmodo-sequoia-logo"
                  />
                </li>
                <li className="company-logo d-flex align-items-center justify-content-center">
                  <img
                    src="/static/images/angelList.png"
                    alt="mailmodo-angelList-logo"
                  />
                </li>
                
                <li className="company-logo d-flex align-items-center justify-content-center">
                  <img
                    src="/static/images/titan-capital.svg"
                    alt="mailmodo-titan-capital-logo"
                  />
                </li>
                <li className="company-logo d-flex align-items-center justify-content-center">
                  <img
                    src="/static/images/others.png"
                    alt="mailmodo-other-logo"
                  />
                </li>
              </ul>
            </div>
             */}
            {/* <div class="btn-container d-flex justify-content-center">
              <button className="button-primary btn d-flex align-items-center">
                <span className="btn-text">Try it for FREE</span>
                <img src="/static/images/icon/arrow.svg" />
              </button>
            </div> */}
                    {/*Brands and VC end*/}
  
            {/* <div className="d-md-flex justify-content-center m-3 p-3 d-none w-100">
              <GoogleSignupButton trackingId={'google_brands_home'} extraClass="extra-class mr-3" />
              <SignupButton trackingId={'email_brands_home'} />
            </div> */}
          </div>
          <div className="layout-padding"></div>
  
        </div>
  
    )
  }