import React from 'react';
//import Image from 'next/image';
import styles from '../video-menu.module.scss'
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
                        <p className={styles.hero_label}>podcast</p>
                        <div className={" " + styles.heading}>
                            <h1 className="">
                            The Growth Chat
                            </h1>
                            <p>
                            Get notified via our newsletter every time we release a new podcast episode
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
                            <h2>Access exclusive episodes on growing a business</h2>
                            <ul>
                                <li>
                                &#128105; Exclusive interviews with growth and marketing experts
                                </li>
                                <li>
                                📰 Pick up the latest trends and hacks for growth
                                </li>
                                <li>
                                🎤 Stream on your favourite podcasting platform
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