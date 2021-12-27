import Head from 'next/head';
import React, { useEffect, useState } from "react";
import BannerCarousel from "../components/commonComponent/Carousel/BannerCarousel";
import GoogleSignupButton from "../components/commonComponent/GoogleButton";
import SignupButton from "../components/commonComponent/SignupButton";
import { getImageUrl } from '../lib/strapiApi';

function makePageSchema() {

        return {
            '@context': 'http://schema.org',
            '@type': 'Organization',
            name :'Mailmodo',
            url: "https://www.mailmodo.com/affiliate/",
            legalName:"Mailmodo Technologies Inc.",
            logo:"https://www.mailmodo.com/static/images/logo/logo-full.svg",
            image:"og-image",
            description: "Earn up to $5000 commission per subscription sales of Mailmodo. Be a part of interactive AMP email journey while earning big",
            alternateName:'MM',
            brand:"Mailmodo",
            contactPoint:{
              "@type":"contactPoint",
              email:"support@mailmodo.com",
              contactType:"Sales and PR",
              contactOption:"Email"
            },
            sameAs:[
              "https://twitter.com/mailmodo",
              "https://www.facebook.com/mailmodo/",
              "https://www.linkedin.com/company/mailmodo/"
            ]
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
         { //JSON LD data 
         <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(makePageSchema()) }}
        /> }
        {/* JSON LD data end */}
        <link rel="canonical" href="https://www.mailmodo.com/affiliate/" />

        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        <title>Affilaite Partner Program | Mailmodo</title>

        <meta name="description" content="" />

        <meta name="keywords" content="affiliate program, affiliate, Mailmodo affiliate program, Mailmodo affiliate" />


        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Affiliate Partner Program | Mailmodo" />
        <meta property="og:description" content="Earn up to $5000 commission per subscription sales of Mailmodo. Be a part of interactive AMP email journey while earning big" />
        <meta property="og:url" content="https://www.mailmodo.com/affiliate/" />
        <meta property="og:site_name" content="Mailmodo" />
        <meta property="og:image" content="https://www.mailmodo.com/static/images/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://www.mailmodo.com/static/images/og-image.jpg" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Earn up to $5000 commission per subscription sales of Mailmodo. Be a part of interactive AMP email journey while earning big" />
        <meta name="twitter:title" content="Affilaite Partner Program | Mailmodo" />
        <meta name="twitter:site" content="@mailmodo" />
        <meta name="twitter:image" content="https://www.mailmodo.com/static/images/og-image.jpg" />

      </Head>

      <div className="section1  ">
        <img className="img1" src="/static/images/affiliate/Vector.png"></img>
              <img className="img2" src="/static/images/affiliate/bag.png"></img>
        <div className="heading container">
            <h1 className="">
              Earn upto $5000 per referral <span><br></br>with Mailmodo Affiliate Program</span>
              </h1>
        </div>
        <div className="center">
        <a href="https://mailmodo.firstpromoter.com/"><button className="">Start Earning Now</button></a>
        <p>Already a Mailmodo affiliate? <a href="http://mailmodo.firstpromoter.com/login">Log in</a></p>

        </div>


      </div>
      {/* cta */}
      <div className={`cta-email ${true && "floating-cta"}`}>
        <div className="col-md-8 mx-auto d-md-flex align-items-center justify-content-center px-0 px-md-3">
          <div className="logo-cta d-none d-md-block">
            <img alt="mailmodo" src="/static/images/logo.svg" />
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
            <GoogleSignupButton trackingId={'google_sticky_features'} extraClass="extra-class" />
            <SignupButton trackingId={'email_sticky_features'} />
          </div>
        </div>
      </div>
      
      <div className="section2">
            <div className="container">
              <img src={getImageUrl("/static/images/affiliate/3-2.svg")}></img>
            </div>
      </div>

      <div className=" section3">
        <div className="col-md-12 d-flex flex-column mx-auto">
          <div className="heading">
            <h2 className="text-center">
            How it works
            </h2>
            {/* <p className="para">
              Unlike traditional HTML emails, AMP emails bring a website like
              experience right inside the email. Your users don’t have to leave
              their inbox to take action. This gives them a seamless experience
              and you get more conversions.
            </p> */}
          </div>
          <div className="d-flex col-md-9 power-card-wrapper justify-content-center mx-auto">
           <div className="row justify-content-center" >
           <div className="card-tiles col-md-3 mr-5 mb-3">
             <div className="box1" ><p className="inner-text">1</p></div>
             <h3>Register</h3>
              <p className="desc">Register on FirstPromoter and become our affiliate partner </p>
            </div>

            <div className="card-tiles col-md-3 mr-5 mb-3">
             <div className="box2" ><p className="inner-text">2</p></div>
             <h3>Promote</h3>
              <p className="desc">Share your affiliate link with your audience via the promotional channels you like</p>
            </div>

            <div className="card-tiles col-md-3 mr-5 mb-3">
             <div className="box3" ><p className="inner-text">3</p></div>
             <h3>Get paid 🤑</h3>
              <p className="desc">Earn every time a subscriber becomes our customer through your referrals</p>
            </div>

           </div>

 


          </div>
        </div>
      </div>

      <div className="section4">
        <div className="easy-amp">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
              <h2 className="heading">Why partner with Mailmodo?</h2>

                <div className=" img-box " >
                  <img src={"/static/images/affiliate/Card 1.svg"} className="img1" ></img>
                  <img src={"/static/images/affiliate/Circle Purple.svg"} className="img2" ></img>
                  <img src={getImageUrl("/static/images/affiliate/Circle-inside.png")} className="img3" ></img>
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column ">
                <ul className="list-unstyled">
                  <li>
                    <h2>Only no-code AMP email platform</h2>
                    <p>Be a proud affiliate of the only tool that enables users to create and send AMP as well as HTML emails without coding, with all traditional email marketing features</p>
                  </li>

                  <li>
                    <h2>Earn big without limits</h2>
                    <p>Earn 20% recurring commission on every subscription sale for every month your referral remains with us upto a year.</p>
                  </li>

                  <li>
                    <h2>Promotional Content</h2>
                    <p>Get rich and educational content assets to share with your audience including blogs, landing pages and banners</p>
                  </li>

                  <li>
                    <h2>Last click attribution Model</h2>
                    <p>Get the most out of the last touch attribution model with a high cookie life of 60 days</p>
                  </li>

                  <li>
                    <h2>Dedicated support team</h2>
                    <p>Our experienced team will help you out every step of the way. We will help you understand the product to promote well.</p>
                  </li>
 
                </ul>
              </div>
            </div>
          </div>
        </div>

      


      </div>

      <div className="section5">
        <div className="container">
          <h2 className="heading">More Features</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="more-feature-card">
                <img src="/static/images/affiliate/image 7.png" />
                <h2>Digital Marketers</h2>
                <p className="text">Share your referral link with your audience through landing pages, emails and more to earn as  Mailmodo's affiliate</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="more-feature-card">
                <img src="/static/images/affiliate/image 11.png" />
                <h2>Marketing Agencies</h2>
                <p className="text"> Introduce Mailmodo to your audience, clients and prospects and onboard them using your referral link to earn as Mailmodo's affiliate</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="more-feature-card">
                <img src="/static/images/affiliate/image 10.png" />
                <h2>Email marketing specialists </h2>
                <p className="text">If you are an email marketer spread the word about Mailmodo with your referral link and earn without any limits with this affilaite program</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="more-feature-card">
                <img src="/static/images/affiliate/image 4.png" />
                <h2>Content Creators</h2>
                <p className="text">Whether you have a blog, website or newsletter- create content about Mailmodo on your platform with your referral link and earn as Mailmodo's affiliate</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="more-feature-card">
                <img src="/static/images/affiliate/image 3.png" />
                <h2>Any email geek or enthusiast</h2>
                <p className="text">If you eat, drink, live emails then this could be a great way to earn as a Mailmodo's affiliate by spreading the word in the email community</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="more-feature-card">
                <img src="/static/images/affiliate/image 2.png" />
                <h2>Influencers</h2>
                <p className="text">Use your influence to share the benefits of Mailmodo through your referral link and earn big as Mailmodo's affiliate</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container bottom-section">

            <h2>Not listed above, still interested?</h2>
            <p >
            No problem at all! Register for the affiliate program and send us a mail at hello@mailmodo.com to let us know about you.  😄
            </p>
            <img src="/static/images/affiliate/threedy.png"></img>
            <a href="https://mailmodo.firstpromoter.com/"><button>Join Now</button></a>

        </div>
      </div>

      <div className="section6 ">
        <div className ="container">
          <div className="row">
            <div className ="col-md-6">
              <h2 className="mb-5">
              Why your audience & customers will love Mailmodo?
              </h2>
              <p className="">
              Mailmodo helps users to create and send actionable, interactive emails without any coding. With the help of AMP for email, Mailmodo lets users insert carts, calendars, digital forms, and smart widgets inside email within minutes. This creates a unique and frictionless email experience for the recipients leading to improved conversions.

              </p>
             {/** <button className="mt-5">Join Now 🤑</button> **/}
            </div>
            <div className ="col-md-6">
            <iframe className="yt-embed mt-5" width="560" height="315" src="https://www.youtube.com/embed/Ft3QhSJq2FQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="section7 ">
            <div className="container" >
              <div className="row">
                  <div className="col-md-8 mb-5">
                    <h2>Mailmodo's customer get ~3X more conversions</h2>
                    <p className="mt-5">
                    Now that’s something to talk about, ain’t it?  Join us and be a part of our success story while earning big. 
                    </p>
                    <a href="https://mailmodo.firstpromoter.com/"><button className="mt-5">Join Now 🤑</button></a>
                  </div>

                  <div className="col-md-4 mt-5">
                    <img src={getImageUrl("/static/images/affiliate/6.png")}></img>
                  </div>
              </div>
            </div>
      </div>

    </div>
    </>
  );
}
