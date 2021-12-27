import React from 'react';
import Iframe from 'react-iframe'

import styles from '../type1.module.scss'
import Link from 'next/link'
import GoogleSignupButton from "../GoogleButton/index";
import SignupButton from "../SignupButton/index";
import { getVideoUrl } from '../../../lib/strapiApi';
const Hero = (props) => {
    return (
        <>
            <div className={styles.hero+" "}>
                <div className="container">
                    <div className="row ">
                        <div className={" col-md-6 "}>
                            <h1 className={styles.heading + " "}>
                                Send AMP Emails
                                for higher
                                conversions
                            </h1>

                            <p className={styles.hero_p + " mt-5"}>
                                Create and Send AMP Emails built for
                                conversions in minutes with Mailmodo
                            </p>

                            <div className={styles.cta + " mb-5"}>
                            <div className="mt-4 form-wrap d-flex align-items-center justify-content-center justify-content-md-start">
                            <GoogleSignupButton extraClass="extra-class mr-4" trackingId={'google_hero_home'}/>
                             <SignupButton extraClass="extra-class" trackingId={'email_hero_home'} />
                            </div>

                                <p className={styles.cta_text + " mt-3"}>
                                    No credit cart required | Get your Free Trial today
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                        <video loop autoPlay muted className={styles.hero_video}>
                    <source
                      src={getVideoUrl("/static/images/type1/video/Hero.mp4")}
                      type="video/mp4"
                      preload="metadata"
                    />
                  </video>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Hero