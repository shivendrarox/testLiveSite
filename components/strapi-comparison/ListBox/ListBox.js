import React from 'react';

import styles from '../comparison.module.scss'
import Link from 'next/link'
import GoogleSignupButton from "../GoogleButton/index";
import SignupButton from "../SignupButton/index";
import { getImageUrl } from '../../../lib/strapiApi'
import BlackCta from '../BlackCta/BlackCta';

const ListBox = (props) => {

    return (
        <>
            <div style={{ backgroundColor: "#E7FFF6" }} className={styles.spacing+" "+styles.ListBox}>

                <div className="container">
                    <div className="row">
                    <div className={"col-md-6 "}>
                   {/** H2 */}
                   <h2>Is Mailmodo right for you?</h2>
                   {/** H2 ends*/}
                   {(true)?
                   <div className={styles.card_container+" "}>
                        <div className={styles.card+" pl-5 pr-5"}>
                            <h3 className={styles.heading+" "}>
                            250% Increase In Response Rate
                            </h3>
                            <p className={styles.desc+" "}>
                            We saw a massive 250% increase in responses to our NPS survey emails. Our merchants loved the email as it enabled them to share their thoughts with us without even getting redirected once.
                            </p>
                        </div>
                            <img className={styles.round_img+" mt-5"} src="https://www.mailmodo.com/static/images/Subhash_Dash.png"></img>
                            <h4 className={styles.img_name+" mt-2"}>Subhash Dash</h4>
                            <p className={styles.img_desc+" mt-1 mb-3"}>Marketing, Razorpay</p>
                    </div>
                    :
                    <img className={styles.section_img} src="/static/images/strapi-pages/comparison/mm.svg"></img>
                    }
                   </div>
                    <div className="col-md-6">
                    <p className={styles.desc}>
                    Mailmodo as a marketing platform can accomodate an exhaustive 
number of use cases and requirements. However, based on our experience and customer interactions, here are the major use cases and
requirements that are best served by Mailmodo.
                    </p>
                    <div className={styles.section_list}>
                    <ul>
                        <li>
                        Improving the ROI of your email marketing campaigns is your priority                        
                        </li>

                        <li>
                        You want to leverage the power of AMP emails to send interactive and dynamic emails without any coding                       
                        </li>
                        
                        <li>
                        You want to send high-volume email to engage your subscribers and prospects
                        </li>

                        <li>
                        You want to build <strong>agile email automation</strong> workflows for lead engagement, customer retention, and transactions                       
                        </li>

                        <li>
                        You want to use <strong>APIs to integrate</strong> your system with the email marketing tool
                        </li>

                        <li>
                        You want to support your <strong>sales teams</strong> with an email marketing tool designed for booking more demos and calls
                        </li>

                        <li>
                        You are a Shopify owner looking  to improve your sales with email marketing
                        </li>

                        <li>
                        Conducting surveys or collecting feedback is essential for your business 
                        </li>

                        <li>
                        You are looking for a scalable email marketing tool that can grow with your business.
                        </li>

                    </ul>
                    </div>

                   </div>

                    </div>
  
           
                </div>

                <BlackCta btn_text={`Sign up for FREE`} text={`Recognize your own requirements in the list above? What are you waiting for then? Sign up today to improve your email marketing results.`}/>
            </div>
        </>
    )

}

export default ListBox;