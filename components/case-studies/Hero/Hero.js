import React from 'react';
//import Image from 'next/image';
import styles from '../case-studies.module.scss'
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
                   <center> <div className={styles.hero_container_left}>
                    <p className={styles.hero_label}>CASE STUDIES</p>
                        <div className={" " + styles.heading}>
                            <h1 className="">
                            Powering Growth, One Email at a Time
                            </h1>
                            <p>
                            Read case studies of how our clients are using Mailmodo to resolve pain
                            points and discover fresh growth avenues
                            </p>
                        </div>

                       {/*  <div className={styles.cta + "  "}>
                            <SampleEmail
                                usecase="Newsletter"
                                campaignId=""
                                trackingId = "Newsletter"
                                />
                        </div>*/}
                    </div>
                    </center>
                  {/*  <div className={styles.hero_container_right}>
                    <img  className={styles.gradient_img} src={hero_gradient}></img>
                        <div className={styles.features_container}>
                            <h2>Access exclusive videos on growing a business</h2>
                            <ul>
                                <li>
                                &#128105; Exclusive interviews with growth and marketing experts
                                </li>
                                <li>
                                📩  Interact with marketers during our live sessions
                                </li>
                                <li>
                                📰 Pick up the latest trends and hacks for growth
                                </li>
                            </ul>
                        </div>
                    </div>*/}
            </div>
         
                
                <div className="layout-gap"></div>

            </div>

        </>
    );
}

export default Hero