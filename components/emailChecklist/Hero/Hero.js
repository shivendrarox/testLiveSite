import React from 'react';
import Image from 'next/image';
import styles from '../features.module.scss'
import Link from 'next/link'
import SampleEmail from '../SampleEmail/SampleEmail'
import {  getImageUrl  } from '../../../lib/strapiApi'

const myLoader = ({ src, width, quality="50" }) => {// default quality 50%
  let newSrc= src.replace('.jpg','.webp')
      newSrc= newSrc.replace('.png','.webp')

  return `https://res.cloudinary.com/mailmodo/image/upload/q_${quality}/v1628497684/strapi/${newSrc}`
}

const Hero = (props) => {
    return (
        <>
            <div className={styles.hero+" "}>
                <div className="container">
                    <div className="row ">
                        <div className={" col-md-6  "}>
                            {/* <img className={styles.bg_img} src="../../static/images/type1/Purple Circle.svg"></img> */}
                            
                            <p className={styles.hero_p + " "}>
                            
                            </p>
                            
                            <h1 className={styles.heading + " mt-5"}>
                            The Ultimate Email Campaign QA Checklist
                            </h1>

                            <p style={{fontSize: "1.4rem",fontWeight:"400"}} className={styles.hero_p + " mt-5"}>
                            Check your email campaigns using our detailed checklist before sending them out. No more cold-feet while hitting the 'Send' button!</p>

                            {/* <p style={{fontWeight:"500"}} className={styles.hero_p + " mt-5"}>
                            Grab this e-book for free!
                            </p> */}

                            <div className={styles.cta + " mt-5 mb-5"}>
                            <SampleEmail
                            usecase="Checklist"
                            campaignId=""
                            trackingId = ""
                            />

                                {/* <p className={styles.cta_text + " mt-3"}>
                                No credit cart required | Get your Free Trial today
                                </p> */}
                            </div>
                        </div>

                        <div className="col-md-6 align-self-center ">
                                                  <div style={{marginRight:"auto",marginLeft:"auto",width:"60%",position:"relative"}}>
                 <Image
                        layout="responsive"
                        alt="email checklist"
                        width="420"
                        height="420"
                        src={"https://res.cloudinary.com/mailmodo/image/upload/v1634561893/strapi/67025_business_analysis_0813d5d602.gif"}
                        />
                            </div> 
                            {/* <img className={styles.hero_img_right} src={getImageUrl("/uploads/Cover_1_44beceddc7.jpg")}>
                            </img> */}
                            {/* Image belongs to respective owner */}
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Hero