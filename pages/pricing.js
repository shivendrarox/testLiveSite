import React, { useState, useEffect } from "react";
import Head from "next/head";
//import  PricingCard  from '../components/commonComponent/PricingCard/PricingCard';
import Card from "../components/commonComponent/PricingCardNew/PricingCardNew";
import CustomPlan from "../components/commonComponent/PricingCustomPlan/PricingCustomPlan";
import PricingFAQCard from "../components/commonComponent/PricingFAQCard/PricingFAQCard";

const pricing = () => {
  // useEffect(() => {
  //     window.addEventListener("onload", callHistory);
  //   });
  //   const callHistory = (e) =>{
  //     history.listen((location) => {
  //       if (location.pathname !== prevPath) {
  //         prevPath = location.pathname;
  //         analytics.page();
  //       }
  //     });
  //   }

  return (
    <>
    <div className="pricing-page-wrapper">
    <div className="pricing-page">
        {/*false && <div className="pricing-page mb-5 pb-5">
            { <PricingCard />}

    </div>*/}
        <Head>
          <title>
            Best Pricing for Your Email Marketing Needs | Free Trial with No
            Commitment | Mailmodo
          </title>
        </Head>

        <div className="upper-text">
          <div>
            <h1>
              Find your <strong>right plan</strong>{" "}
            </h1>
            <p className="sub-text">
              {" "}
              Free Trial - 250 emails per day with Gold Plan features and
              Mailmodo branding{" "}
            </p>
          </div>
          <a
            id="top_trial_pricing"
            className=" "
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://manage.mailmodo.com/auth/signup";
            }}
          >
            Start Free Trial
          </a>
        </div>
      </div>

      <Card
        taggerIDArr={[
          "btn_silver_pricing",
          "btn_gold_pricing",
          "btn_platinum_pricing",
        ]}
      />
      <CustomPlan trackingIdArr={["contact_card_pricing"]} />
      {/* { <PricingFAQCard />} */}
    </div>
     
    </>
  );
};

export default pricing;
