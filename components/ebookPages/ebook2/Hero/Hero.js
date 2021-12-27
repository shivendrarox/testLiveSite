import React from 'react';
import Image from 'next/image';
import styles from '../features.module.scss'
import Link from 'next/link'
import SampleEmail from '../SampleEmail/SampleEmail'
import {  getImageUrl  } from '../../../../lib/strapiApi'

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
                        <div className={" col-md-6 "}>
                            {/* <img className={styles.bg_img} src="../../static/images/type1/Purple Circle.svg"></img> */}
                            
                            <p className={styles.hero_p + " "}>
                            FREE E-BOOK
                            </p>
                            
                            <h1 className={styles.heading + " mt-5"}>
                            A Step-by-Step Guide to Improve Email Performance
                            </h1>

                            <p style={{fontSize: "1.4rem",fontWeight:"400"}} className={styles.hero_p + " mt-5"}>
                            Read between the lines of your email metrics and gauge the success of your marketing campaigns with this curated guide
                            </p>

                            {/* <p style={{fontWeight:"500"}} className={styles.hero_p + " mt-5"}>
                            Grab this e-book for free!
                            </p> */}

                            <div className={styles.cta + " mt-3 mb-5"}>
                            <SampleEmail
                            usecase="A Step-by-Step Guide to Improve Email Performance"
                            campaignId=""
                            trackingId = "sample_ebooks"
                            />

                                {/* <p className={styles.cta_text + " mt-3"}>
                                No credit cart required | Get your Free Trial today
                                </p> */}
                            </div>
                        </div>

                        <div className="col-md-6">
                                                  <div style={{marginRight:"auto",marginLeft:"auto",width:"60%",position:"relative"}}>
                 <Image
                        layout="responsive"
                        alt="ebook cover image"
                        width="635"
                        height="882"
                        src={"https://res.cloudinary.com/mailmodo/image/upload/v1632463154/strapi/ebook2_cover_18d926c329.png"}
                        />
                            </div> 
                            {/* <img className={styles.hero_img_right} src={getImageUrl("/uploads/Cover_1_44beceddc7.jpg")}>
                            </img> */}
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Hero