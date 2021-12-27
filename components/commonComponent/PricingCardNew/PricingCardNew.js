import React, { useState } from "react";
import ToggleButton2 from "../ToggleButton/ToggleButton";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const PricingCardNew = (props) => {
  const [meObj, setM] = useState({
    currency: "USD",
    id: 1,
    period: "month",
    silver: 49,
    gold: 199,
    platinum: 499,
    silverOC_US: "20/20,000",
    goldOC_US: "20/30,000",
    platinumOC_US: "20/50,000",
    silverOC_IND: "1,500/20,000",
    goldOC_IND: "1,500/30,000",
    platinumOC_IND: "1,500/50,000",
  });

  const [alignment, setAlignment] = React.useState("USD");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
    let prevState = meObj;

    if (newAlignment == "USD") {
      setM(function () {
        return {
          ...prevState,
          currency: newAlignment,
          silver: prevState.period === "year" ? 470.4 : 49,
          gold: prevState.period === "year" ? 1910.4 : 199,
          platinum: prevState.period === "year" ? 4790.4 : 499,
        };
      });
    } else if (newAlignment == "INR") {
      setM(function () {
        return {
          ...prevState,
          currency: newAlignment,
          silver: prevState.period === "year" ? 32928 : "3,600",
          gold: prevState.period === "year" ? 133728 : "15,000",
          platinum: prevState.period === "year" ? 335328 : "35,000",
        };
      });
    }
  };

  const [val, setVal] = React.useState(true);

  const handleVal = (val) => {
    setVal(val);
    let prevState = meObj;
    let x = "month";

    if (val) {
      x = "month";
      setM(function () {
        return {
          ...prevState,
          period: x,
          silver: prevState.currency === "USD" ? 49 : "3,600",
          gold: prevState.currency === "USD" ? 199 : "15,000",
          platinum: prevState.currency === "USD" ? 499 : "35,000",
        };
      });
    } else {
      x = "year";
      setM(function () {
        //return { ...prevState, period: x , silver: (prevState.silver*12)-((prevState.currency === 'USD')?117.6:8620.80),gold: (prevState.gold*12)-((prevState.currency === 'USD')?477.60:2918.40),platinum: (prevState.platinum*12)-((prevState.currency==='USD')?1197.60:87796.80)}
        return {
          ...prevState,
          period: x,
          silver: prevState.currency === "USD" ? 470.4 : 32928,
          gold: prevState.currency === "USD" ? 1910.4 : 133728,
          platinum: prevState.currency === "USD" ? 4790.4 : 335328,
        };
      });
    }
  };

  return (
    <>
      <div className="middle-buttons">
        <div className="left-element">
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="USD" aria-label="left aligned">
              <span>USD</span>
            </ToggleButton>

            <ToggleButton value="INR" aria-label="right aligned">
              INR
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        {false && (
          <div className="right-element">
            <span> Pay annually (Save 20%) </span>
            <ToggleButton2
              value={val}
              onChange={(state) => {
                handleVal(state);
              }}
            />
          </div>
        )}
      </div>
      <div className="card-container ">
        <div className="flex-item-side">
          <div className="card-bg">
            <div className="features-card">
              <h2>Silver</h2>
              <h3>
                <span>{meObj.currency === "USD" ? "$" : "₹"}</span>
                {meObj.silver}
                {meObj.currency !== "USD" && (
                  <span style={{ fontSize: "1rem", lineHeight: 0 }}>+GST</span>
                )}
                <sub>/{meObj.period}</sub>
              </h3>

              <ul>
                <li>Unlimited Contacts</li>
                <li>30,000 Free email credits</li>
                <li>Unlimited Template creation</li>
                <li>
                  Overage charges: {meObj.currency === "USD" ? "$" : "₹"}
                  {meObj.currency === "USD"
                    ? meObj.silverOC_US
                    : meObj.silverOC_IND} emails
                </li>
              </ul>

              <a
                id={props.taggerIDArr[0]}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://manage.mailmodo.com/auth/signup";
                }}
                className=" "
              >
                Get Started
              </a>
            </div>
            <div className="features-div">
              <h2>Features</h2>
              <ul>
                <li>1 Custom domain</li>
                <li>3 Sender Emails</li>
                <li>5000 sending limits/per day</li>
                <li>Shared IP</li>
                <li>Mailmodo SMTP</li>
                <li>
                  <strong>Integrations :</strong>
                  <p>Zapier, Integromat, Google Sheet, Calendly, Zoom</p>
                </li>
                <li>Transactional Campaigns</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-item-middle">
          <div className="features-card">
            <h2>Gold</h2>
            <h3>
              <span>{meObj.currency === "USD" ? "$" : "₹"}</span>
              {meObj.gold}
              {meObj.currency !== "USD" && (
                <span style={{ fontSize: "1rem", lineHeight: 0 }}>+GST</span>
              )}
              <sub>/{meObj.period}</sub>
            </h3>

            <ul>
              <li>Unlimited Contacts</li>
              <li>250,000 Free email credits</li>
              <li>Unlimited Template creation</li>
              <li>
                Overage charges: {meObj.currency === "USD" ? "$" : "₹"}
                {meObj.currency === "USD" ? meObj.goldOC_US : meObj.goldOC_IND} emails
              </li>
            </ul>

            <a
              id={props.taggerIDArr[1]}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://manage.mailmodo.com/auth/signup";
              }}
              className=" "
            >
              Get Started
            </a>
          </div>
          <div className="features-div">
            <h2>Features</h2>
            <ul>
              <li>2 Custom domains</li>
              <li>10 Sender Emails</li>
              <li>30000 Daily sending limits/per day</li>
              <li>Shared IP</li>
              <li>Mailmodo SMTP</li>
              <li>Custom/Personal SMTP</li>
              <li>
                <strong>Integrations</strong>
                <p>
                  Zapier, Integromat, Google Sheet, Calendly, Zoom, Shopify,
                  Hubspot
                </p>
              </li>
              <li>Transactional Campaigns</li>
              <li>Email Journey builder</li>
            </ul>
          </div>
        </div>
        <div className="flex-item-side">
          <div className="card-bg">
            <div className="features-card">
              <h2>Platinum</h2>
              <h3>
                <span>{meObj.currency === "USD" ? "$" : "₹"}</span>
                {meObj.platinum}
                {meObj.currency !== "USD" && (
                  <span style={{ fontSize: "1rem", lineHeight: 0 }}>+GST</span>
                )}
                <sub>/{meObj.period}</sub>
              </h3>

              <ul>
                <li>Unlimited Contacts</li>
                <li>1,000,000 Free email credits</li>
                <li>Unlimited Template creation</li>
                <li>
                  Overage charges: {meObj.currency === "USD" ? "$" : "₹"}
                  {meObj.currency === "USD"
                    ? meObj.platinumOC_US
                    : meObj.platinumOC_IND} emails
                </li>
              </ul>

              <a
                id={props.taggerIDArr[0]}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://manage.mailmodo.com/auth/signup";
                }}
                className=" "
              >
                Get Started
              </a>
            </div>
            <div className="features-div">
              <h2>Features</h2>
              <ul>
                <li>Unlimited Custom domains</li>
                <li>Unlimited Sender Emails</li>
                <li>Unlimited Sending Limits</li>
                <li>Dedicated IP</li>
                <li>Mailmodo SMTP</li>
                <li>Custom/Personal SMTP</li>
                <li>
                  <strong>Integrations</strong>
                  <p>
                    Zapier, Integromat, Google Sheet, Calendly, Zoom,
                    Shopify,Hubspot
                  </p>
                </li>
                <li>Transactional Campaigns</li>
                <li>Email Journey builder</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCardNew;
