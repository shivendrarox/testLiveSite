import Head from 'next/head';
import React, { useEffect, useState } from "react";
import BannerCarousel from "../../components/commonComponent/Carousel/BannerCarousel";
import GoogleSignupButton from "../../components/commonComponent/GoogleButton";
import SignupButton from "../../components/commonComponent/SignupButton";
import styles from "../../assets/features-index.module.scss"
import { getImageUrl } from '../../lib/strapiApi';
function makeFeaturesPageSchema() {

        return {
            '@context': 'http://schema.org',
            '@type': 'WebApplication',
            "@id": "Mailmodo",
            applicationCategory: "BusinessApplication",
            name :'Mailmodo',
            operatingSystem: "all",
            url: "https://www.mailmodo.com/features/",
            screenshot:"https://www.mailmodo.com/static/images/og-image.jpg",
            description: "Experience email marketing features that help you to send winning email campaigns without hassle",

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
  const [floatingCTA, setFloatingCTA] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = (e) => {
    let box = document.getElementById("homepage-banner");
    // let width = box.offsetWidth;
    let height = box?.offsetHeight;
    if (window.scrollY > height) setFloatingCTA(true);
    else setFloatingCTA(false);
  };

  return (
    <>

    <div className="home-page">
      <Head>
         {/* JSON LD data */}
         <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(makeFeaturesPageSchema()) }}
        />
        {/* JSON LD data end */}
        <link rel="canonical" href="https://www.mailmodo.com/features/" />

        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        <title>Features to Simplify Email Marketing & Get High Conversions | Mailmodo</title>

        <meta name="description" content="Experience email marketing features that help you to send winning email campaigns without hassle" />

        <meta name="keywords" content="email marketing features, email marketing automation, email marketing list, best email marketing tool, AMP Email Marketing, AMP" />


        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Features to Simplify Email Marketing & Get High Conversions | Mailmodo" />
        <meta property="og:description" content="Experience email marketing features that help you to send winning email campaigns without hassle" />
        <meta property="og:url" content="https://www.mailmodo.com/features/" />
        <meta property="og:site_name" content="Mailmodo" />
        <meta property="og:image" content="https://www.mailmodo.com/static/images/og-image.png" />
        <meta property="og:image:secure_url" content="https://www.mailmodo.com/static/images/og-image.png" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Experience email marketing features that help you to send winning email campaigns without hassle" />
        <meta name="twitter:title" content="Features to Simplify Email Marketing & Get High Conversions | Mailmodo" />
        <meta name="twitter:site" content="@mailmodo" />
        <meta name="twitter:image" content="https://www.mailmodo.com/static/images/og-image.png" />

      </Head>
      <div className="homepage-banner" id="homepage-banner">

        {/* banner fold */}
        <div className="container">
        <div className="layout-gap"></div>

          <div className="banner-inner-wrapper row justify-content-between">
            <div className="content col-md-6">
              {/* <p className="tag-para">Create & Send Actionable Emails &</p> */}

              <h1 className="tag-heading">
                Features that put your <br />
                email conversions first
              </h1>
              <p className="text">
                Discover features that boost your <br />
                email marketing ROI like never before
              </p>
              <div className="form-wrap d-flex align-items-center justify-content-center justify-content-md-start">
                <GoogleSignupButton trackingId={'google_hero_features'} extraClass="extra-class" />
                <SignupButton trackingId={'email_hero_features'} extraClass="extra-class" />
              </div>
              <h2 className="get-free">Get FREE access by signing up now</h2>
            </div>
            <div className={"carousel-banner col-md-6 "+styles.carousel_banner}>
              <BannerCarousel />
            </div>
          </div>
        </div>
      </div>
      <div className="layout-gap"></div>
      {/* floating cta */}
      <div className={`cta-email ${floatingCTA && "floating-cta"}`}>
        <div className="col-8 mx-auto d-md-flex align-items-center justify-content-center px-0 px-md-3 d-none d-md-flex">
          <div className="logo-cta d-none d-md-block">
            <img alt="mailmodo" src="/static/images/logo.svg" />
          </div>
          <p className="cta-text text-center text-left">
            Create & Send Actionable Emails
          </p>
          <div className=" d-flex align-items-center justify-content-center">
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
            {/* <GoogleSignupButton trackingId={'google_sticky_home'} extraClass="extra-class" /> */}
            <SignupButton btn_text={"Sign Up"} trackingId={'email_sticky_home'} />
          </div>
        </div>
        <div className="justify-content-end d-md-flex align-items-center mobile-sticky-footer d-md-none d-md-flex">
          <div className="logo-cta d-none d-md-block">
            <img alt="mailmodo" src="/static/images/logo.svg" />
          </div>
          <p className="cta-text text-center text-left pr-3 pb-0">
            Create & Send Actionable Emails
          </p>
          <div className=" d-flex align-items-center justify-content-center">
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
            {/* <GoogleSignupButton trackingId={'google_sticky_home'} extraClass="extra-class" /> */}
            <SignupButton btn_text={"Sign Up"} trackingId={'email_sticky_home'} />
          </div>
        </div>
      </div>

      {/* power fold */}
      <div className="powers-fold" onScroll={handleScroll}>
      <div className="layout-gap"></div>

        <div className="col-md-12 d-flex flex-column mx-auto">
          <div className="heading">
            <h2 className="text-center">
              Features that reinvent your
              <span> email marketing</span>
            </h2>
            {/* <p className="para">
              Unlike traditional HTML emails, AMP emails bring a website like
              experience right inside the email. Your users don’t have to leave
              their inbox to take action. This gives them a seamless experience
              and you get more conversions.
            </p> */}
          </div>
          <div className={"d-flex col-md-10 power-card-wrapper justify-content-between mx-auto "+styles.features}>
            <div className="card-tiles ">
              <img
                alt="mailmodo-email-inbox"
                className="feature-icon"
                src="/static/images/feature/inbox.svg"
              />
              <p>All user-actions happen within inbox</p>
            </div>
            <div className="card-tiles ">
              <img
                alt="mailmodo-conversion-icon"
                className="feature-icon"
                src="/static/images/feature/users-email.svg"
              />
              <p>Your users experience app- like emails</p>
            </div>
            <div className="card-tiles ">
              <img
                alt="mailmodo-personalization-icon"
                className="feature-icon"
                src="/static/images/feature/Push-Content.svg"
              />
              <p>Push dynamic updates to email content</p>
            </div>
            <div className="card-tiles ">
              <img
                alt="mailmodo-secure-icon"
                className="feature-icon"
                src="/static/images/feature/Integrate-APIs.svg"
              />
              <p>Integrate your APIs with your campaign</p>
            </div>
          </div>
        </div>
      <div className="layout-gap"></div>
      </div>
      {/* email marketing fold */}
      <div className="email-marketing-fold">
      <div className="layout-gap"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading feature-heading">
                Simplify email marketing, maximize conversions
              </h2>
              <p className={styles.para}>
                Mailmodo is designed to help you leverage the power of AMP
                Emails for creating better user experience and simplifying email
                marketing setup
              </p>
            </div>
          </div>
        </div>
      <div className="layout-gap"></div>
      </div>
      <div className="feature-wrapper">

        <div className="easy-amp">
        <div className="layout-gap"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <img
                  src={getImageUrl("/static/images/feature/banner1.png")}
                  className="w-100"
                />
              </div>
              <div className="col-md-5 d-flex flex-column justify-content-center">
                <h2 className="heading">Easy & coding free AMP emails</h2>
                <ul className="list-unstyled">
                  <li>
                    <img
                      src="/static/images/feature/editor.svg"
                      className="icon"
                    />
                    Drag & drop AMP blocks in a WYSIWYG editor to design emails
                  </li>
                  <li>
                    <img
                      src="/static/images/feature/personalize.svg"
                      className="icon"
                    />
                    Personalise the content for each user without any hassle
                  </li>

                  <li>
                    <img
                      src="/static/images/feature/html.svg"
                      className="icon"
                    />
                    Upload your own HTML file or other code-snippets
                  </li>
                </ul>
              </div>
            </div>
          </div>          
          <div className="layout-gap"></div>
        </div>

        <div className="easy-amp">
        <div className="layout-gap"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <img
                  src={getImageUrl("/static/images/feature/banner2.png")}
                  className="w-100"
                />
              </div>
              <div className="col-md-5 d-flex flex-column justify-content-center">
                <h2 className="heading">Email Automation</h2>
                <ul className="list-unstyled">
                  <li>
                    <img
                      src="/static/images/feature/market.svg"
                      className="icon"
                    />
                    Automate drip sequences based on user behavior & market data
                    to send emails
                  </li>
                  <li>
                    <img
                      src="/static/images/feature/map.svg"
                      className="icon"
                    />
                    Visual journey builder to help you design user journey maps
                    with drag and drop
                  </li>
                  <li>
                    <img
                      src="/static/images/feature/analyze-user.svg"
                      className="icon"
                    />
                    Analyze user behaviour and optimize drip sequences & journey
                    maps
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <div className="layout-gap"></div>
        </div>

        <div className="easy-amp">
        <div className="layout-gap"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <img
                  src={getImageUrl("/static/images/feature/banner3.png")}
                  className="w-100"
                />
              </div>
              <div className="col-md-5 d-flex flex-column justify-content-center">
                <h2 className="heading">High Deliverability</h2>
                <ul className="list-unstyled">
                  <li>
                    <img
                      src="/static/images/feature/sendbulk.svg"
                      className="icon"
                    />
                    Send bulk emails with Mailmodo’s SMTP or add your own email
                    delivery service
                  </li>
                  <li>
                    <img
                      src="/static/images/feature/deleverability.svg"
                      className="icon"
                    />
                    Get high deliverability and open rates with well-managed &
                    dedicated IPs
                  </li>
                  <li>
                    <img
                      src="/static/images/feature/sendgrid.svg"
                      className="icon"
                    />
                    Option to integrate with AWS SES, Sendgrid & Netcore
                    Pepipost
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <div className="layout-gap"></div>
        </div>

        <div className="easy-amp">
        <div className="layout-gap"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <img
                  src={getImageUrl("/static/images/feature/banner4.png")}
                  className="w-100"
                />
              </div>
              <div className="col-md-5 d-flex flex-column justify-content-center">
                <h2 className="heading">Auto trigger transactional emails</h2>
                <ul className="list-unstyled">
                  <li>
                    <img
                      src="/static/images/feature/trigger.svg"
                      className="icon"
                    />
                    Trigger emails automatically by user action like signup,
                    purchase, cart-abandonment
                  </li>
                  <li>
                    <img
                      src="/static/images/feature/segment.svg"
                      className="icon"
                    />
                    Segment users based on past campaign metrics like open,
                    click & submissions
                  </li>
                  <li>
                    <img
                      src="/static/images/feature/manage.svg"
                      className="icon"
                    />
                    Manage & update your transactional emails directly from
                    Mailmodo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <div className="layout-gap"></div>
        </div>

        <div className="easy-amp">
        <div className="layout-gap"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <img
                  src={getImageUrl("/static/images/feature/banner5.png")}
                  className="w-100"
                />
              </div>
              <div className="col-md-5 d-flex flex-column justify-content-center">
                <h2 className="heading">All reports on a single dashboard</h2>
                <ul className="list-unstyled">
                  <li>
                    <img
                      src="/static/images/feature/Visualise.svg"
                      className="icon"
                    />
                    Visualise all your data - opens, clicks, unsubscribes &
                    submissions
                  </li>
                  <li>
                    <img
                      src="/static/images/feature/A-B.svg"
                      className="icon"
                    />
                    Analyze various subject lines with Subject Line A/B testing
                    feature
                  </li>
                  <li>
                    <img
                      src="/static/images/feature/Export.svg"
                      className="icon"
                    />
                    Export all data in CSV format or to any 3rd party tool
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <div className="layout-gap"></div>
        </div>
      </div>

      <div className="essential-tool">
      <div className="layout-gap"></div>
        <div className="container">
          <h2 className="heading">
            Integrate your essential tools and apps with Mailmodo
          </h2>
          <div className="image-card-wrapper">
            <div className="image-card">
              <img src="/static/images/feature/shopify.png" />
            </div>
            <div className="image-card">
              <img src="/static/images/feature/smartech.png" />
            </div>
            <div className="image-card">
              <img src="/static/images/feature/tool3.png" />
            </div>
            <div className="image-card">
              <img src="/static/images/feature/moengage.png" />
            </div>
            <div className="image-card">
              <img src="/static/images/feature/pipedrive.png" />
            </div>
            <div className="image-card">
              <img src="/static/images/feature/salesforce.png" />
            </div>
            <div className="image-card">
              <img src="/static/images/feature/webEngage.png" />
            </div>
            <div className="image-card">
              <img src="/static/images/feature/clevertap.png" />
            </div>
            <div className="image-card">
              <img src="/static/images/feature/tool10.png" />
            </div>
            <div className="image-card">
              <img src="/static/images/feature/shopify.png" />
            </div>
          </div>
        </div>
      <div className="layout-gap"></div>
      </div>

      <div className="more-feature">
      <div className="layout-gap"></div>
        <div className="container">
          <h2 className="heading">More Features</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="more-feature-card">
                <img src="/static/images/feature/more-feature/create_upload.svg" />
                <p className="text">Create/Upload AMP & HTML files</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="more-feature-card">
                <img src="/static/images/feature/more-feature/dedicated.svg" />
                <p className="text">Dedicated IPs & Mailmodo SMTP</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="more-feature-card">
                <img src="/static/images/feature/more-feature/multiple _domains.svg" />
                <p className="text">Add multiple domains & sender emails</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="more-feature-card">
                <img src="/static/images/feature/more-feature/sending_limits.svg" />
                <p className="text">No Sending limits</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="more-feature-card">
                <img src="/static/images/feature/more-feature/live_support.svg" />
                <p className="text">24x7 live support</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="more-feature-card">
                <img src="/static/images/feature/more-feature/tech_email.svg" />
                <p className="text">Expert tech & email consultation</p>
              </div>
            </div>
          </div>
        </div>
      <div className="layout-gap"></div>
      </div>

      <div className="free-access">
      <div className="layout-gap"></div>
        <div className="container text-center">
          <h2 className="heading">Get free access by signing up now</h2>
          <p>(No credit card required for signing up)</p>

          <div className="form-wrap text-center">
            <div className="text-center d-flex justify-content-center">
              <GoogleSignupButton trackingId={'google_bottom_features'} extraClass="extra-class mr-3" />
              <SignupButton trackingId={'google_bottom_features'} extraClass="extra-class" />
            </div>
          </div>
        </div>
      <div className="layout-gap"></div>
      </div>

      <div className="cantact-user d-flex align-items-md-center justify-content-center flex-column mx-4 mx-md-auto">
        <h4 className="heading">Write to us in case you need any help</h4>
        <div className="contact-wrapper d-flex  align-items-md-center flex-column flex-md-row">

          <div className="contact-number">
            <img
              className="mr-2 call-icon"
              alt="mailmodo-mail-icon"
              src="/static/images/icon/mail.svg"
            />
            <span>help@mailmodo.com</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
