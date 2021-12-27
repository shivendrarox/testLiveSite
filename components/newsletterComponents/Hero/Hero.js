import React from 'react';
//import Image from 'next/image';
import styles from '../newsletter.module.scss'
//import Link from 'next/link'
import SampleEmail from '../SampleEmail/SampleEmail'
import hero_gradient from  '../../../static/images/newsletter/Planet.svg'
//import { getImageUrl } from '../../../lib/strapiApi'




const Hero = (props) => {

    return (
        <>
            <div className={styles.hero + " "}>
                <div className="layout-gap"></div>
                {/* <img className={styles.img1} src="/static/images/affiliate/Vector.png"></img>
                <img className={styles.img2} src="/static/images/affiliate/bag.png"></img> */}
                <div className={styles.hero_container+" container"}>
                    <div className={styles.hero_container_left}>
                    <p className={styles.hero_label}>Newsletter</p>
                        <div className={" " + styles.heading}>
                            <h1 className="">
                            The Mailmodo Bulletin
                            </h1>
                            <p>
                            Subscribe to receive our monthly newsletter on
                            all things emails
                            </p>
                        </div>

                        <div className={styles.cta + "  "}>
                            <SampleEmail
                                usecase="Newsletter"
                                campaignId=""
                                trackingId = "Newsletter"
                                />
                        </div>
                    </div>
                    <div className={styles.hero_container_right}>
                    <img  className={styles.gradient_img} src={hero_gradient}></img>
                        <div className={styles.features_container}>
                            <h2>Join this community of 3k+ readers and get </h2>
                            <ul>
                                <li>
                                📊  Email Growth Hacks to generate more revenue
                                </li>
                                <li>
                                📩  Insightful and actionable tips from email experts
                                </li>
                                <li>
                                📰  Hottest tweets, trends & threads
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
         

                
                <div className="layout-gap"></div>

            </div>

        </>
    );
}

export default Hero