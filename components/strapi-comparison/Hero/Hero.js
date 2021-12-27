import React from 'react';
import Iframe from 'react-iframe'

import styles from '../comparison.module.scss'
import Link from 'next/link'
import GoogleSignupButton from "../GoogleButton/index";
import SignupButton from "../SignupButton/index";
import {  getImageUrl  } from '../../../lib/strapiApi'


const Hero = (props) => {
    return (
        <>
            <div style={{backgroundColor:"#ffff"}} className={styles.spacing+" "+styles.hero}>
                <h1 className={styles.heading}>The Mailchimp alternative you've been looking for: Mailmodo vs Mailchimp  </h1>
                {/* <p className={styles.hero_p+" mt-0 pt-2"}>The Mailchimp alternative you've been looking for</p> */}

                {/* <div className={styles.img_cont+" container"}>
                    <div className="row">
                        <div style={{borderRight:"0.5px solid #484848"}} className=" col-6">
                            <img src="/static/images/strapi-pages/comparison/MC.svg" className={styles.hero_img_left}></img>
                        </div>


                        <div style={{borderLeft:"0.5px solid #484848"}} className=" col-6">
                        <img src="/static/images/strapi-pages/comparison/mm.svg" className={styles.hero_img_right}></img>
                        </div>
                    </div>
                </div> */}

                <p className={styles.hero_p}>
                Tired of limited features and restrictive plans? Browsing through endless Mailchimp alternatives? You’re in the right place. Here’s why fast-growing teams consider Mailmodo as the leading alternative for Mailchimp.
                </p>
                <Link href={"https://manage.mailmodo.com/auth/signup"}>
                    <button className={styles.cta_btn}>Get Started</button>
                </Link>
                <div className="container">
                    <div className="row">
                    <div className="col-md-4 mb-5">
                            <div className={styles.card_left}>
                                <h2 className={styles.card_heading}>
                                Is Mailmodo the best Mailchimp alternative for you?                                </h2>
                                <p className={styles.desc+" "+styles.card_desc}>
                                The right email marketing tool can make or break your marketing process, so it essential that you pick the right tool to power your business. In this page, we give you a detailed breakdown of both platforms to help you pick the right one. A quick summary if you're new to the domain.                                </p>
                            </div>
                        </div>
                        <div className="col-md-4  mb-5">
                        <div className={styles.card}>
                                <img className={styles.card_img} src={"/static/images/strapi-pages/comparison/mm.svg"}></img>
              
                                <p className={styles.desc+" "+styles.card_desc}>
                                Mailmodo builds on the power of interactive and dynamic emails with AMP to create unique email experiences with a complete suite of email marketing features.. 
                                 </p>

                                 <p className={styles.desc+" "+styles.card_desc}>
                                 The Mailmodo platform is designed to improve email conversions, increase engagement and help businesses to grow.                                 </p>

                            </div>
                        </div>
                        <div className="col-md-4  mb-5">
                            <div className={styles.card}>
                            <img className={styles.card_img} src={"/static/images/strapi-pages/comparison/MC.svg"}></img>
 
                            <p className={styles.desc+" "+styles.card_desc}>
                                Mailchimp is arguably one of the most popular brand names in email marketing software with a massive user base.
                                </p>

                                <p className={styles.desc+" "+styles.card_desc}>
                                Over the years, Mailchimp expanded to become a full marketing platform extending its offerings to building landing pages, email automation, social media scheduling, CRM features, and much more.                              </p>
                            </div>
                        </div>

                    </div>
                </div>            
            </div>
        </>
    );
}

export default Hero