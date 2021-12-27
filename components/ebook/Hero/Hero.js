import React from 'react';
import Iframe from 'react-iframe'
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
                        <div className={" col-md-6 "}>
                            {/* <img className={styles.bg_img} src="../../static/images/type1/Purple Circle.svg"></img> */}
                            
                            <p className={styles.hero_p + " "}>
                            FREE E-BOOK
                            </p>
                            
                            <h1 className={styles.heading + " mt-5"}>
                            Email Subject Lines for the Win
                            </h1>

                            <p style={{fontSize: "1.7rem",fontWeight:"400"}} className={styles.hero_p + " mt-5"}>
                            How to Focus on the Long Game and Turn Opens into Conversions
                            </p>

                            <p className={styles.hero_p + " mt-5"}>
                            Grab this e-book for free!
                            </p>

                            <div className={styles.cta + " mt-3 mb-5"}>
                            <SampleEmail
                            usecase="Ebooks downloads"
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
                        placeholder="blur"
                        width="635"
                        height="882"
                        blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkUAYAACkAJdigItYAAAAASUVORK5CYII=`}
                        loader={myLoader}
                        src={"/uploads/Cover_1_44beceddc7.jpg"}
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