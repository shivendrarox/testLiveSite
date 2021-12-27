import React from 'react';
import Image from 'next/image'

import styles from '../features.module.scss'
import Link from 'next/link'
import GoogleSignupButton from "../GoogleButton/index";
import SignupButton from "../SignupButton/index";
import {  getImageUrl  } from '../../../lib/strapiApi'

const Hero = (props) => {
    return (
        <>
            <div className={styles.hero+" "}>
                <div className="container">
                    <div className="row ">
                        {/* Layout change */}
                        {props.content.MediaPosition==='Right' ?
                            <>
                        <div className={" col-md-6 "}>
                            {props.content?.label &&
                            <div style={{margin:"0px"}} className={"mm-label-normal "+styles.label_custom} >
                                {props.content.label}
                            </div>
                            }
                            {/* <img className={styles.bg_img} src="../../static/images/type1/Purple Circle.svg"></img> */}
                            <h1 className={styles.heading + " mm-h1"}>
                                {props.content.title??"No content"}
                            </h1>

                            {props.content?.subTitle &&
                            <p className={styles.hero_p + " mm-h6 "}>
                                {props.content?.subTitle}
                            </p>}

                            <div className={styles.cta + " mb-4"}>
                            <div className=" form-wrap d-flex justify-content-md-start ">
                                {props.content?.PrimaryButtonText &&
                                       <Link href={props.content?.PrimaryButtonUrl??" "} passHref >
                                       <a id={'google_hero_features_'+props.slug} >
                                       <button className={`mm-primary-button-regular  mr-4 `} >{props.content.PrimaryButtonText}</button>
                                       </a>
                                       </Link>
                                }
                                {props.content?.SecondaryButtonText &&
                                    <Link href={props.content?.SecondaryButtonUrl??" "} passHref >
                                    <a id={'email_hero_features_'+props.slug} >
                                    <button className={`mm-secondary-button-regular  ${props.extraClass} `} >{props.content.SecondaryButtonText}</button>
                                    </a>
                                    </Link>
                                }
                            {/* <GoogleSignupButton extraClass="extra-class mr-4" trackingId={'google_hero_features_'+props.slug}/>
                             <SignupButton extraClass="extra-class" trackingId={'email_hero_features_'+props.slug} /> */}
                            </div>

                                {/* <p className={styles.cta_text + " mm-body-1 mt-3"}>
                                No credit card required | Get your Free Trial today
                                </p> */}
                            </div>
                        </div>

                        <div className="col-md-6 align-self-center">
                            {props.content.media[0]?.url?.includes("mp4")?   
                            
                            <>
                {props.content?.media[0]?.url &&
                 <video loop autoPlay muted className={styles.hero_video}>
                    <source
                      src={getImageUrl(props.content?.media[0]?.url??"https://res.cloudinary.com/mailmodo/image/upload/v1632463966/strapi/traffic_signs_361514_1920_fd83e3b51d.png")}
                      type="video/mp4"
                      preload="metadata"
                    />
                    <source
                      src={(props.content?.media[0]?.url??"https://res.cloudinary.com/mailmodo/image/upload/v1632463966/strapi/traffic_signs_361514_1920_fd83e3b51d.png")}
                      type="video/mp4"
                      preload="metadata"
                    />

                  </video>
                }
                  </>
                  :
                               <>
                               {props.content?.media[0]?.url &&
                                <Image
                                 priority={true}
                                 height={props.content.media[0]?.height}
                                 width={props.content.media[0]?.width}
                                 src={props.content?.media[0]?.url}
                                 />
                               }
                                 </>
                                
                  }
               
                        </div>
                        </>
:
<>
<div className={" col-md-12 text-center "}>
                            {/* <img className={styles.bg_img} src="../../static/images/type1/Purple Circle.svg"></img> */}
                            {props.content?.label &&
                            <div className={"mm-label-normal "+styles.label_custom} >
                            {props.content.label}
                            </div>}
                            <h1 style={{width:"100%",marginRight:"auto",marginLeft:'auto'}} className={styles.heading + "  mm-h1"}>
                                {props.content.title??"No content"}
                            </h1>

                            {props.content?.subTitle && <p className={styles.hero_p + "  mm-h6 "}>
                                {props.content.subTitle??" "}
                            </p>}

                            <div className={styles.cta + " "}>
                            <div className=" form-wrap d-flex justify-content-md-center">
                            {props.content?.PrimaryButtonText &&
                                       <Link href={props.content.PrimaryButtonUrl} passHref >
                                       <a id={'google_hero_features_'+props.slug} >
                                       <button className={`mm-primary-button-regular  mr-4 `} >{props.content.PrimaryButtonText}</button>
                                       </a>
                                       </Link>
                                }
                                {props.content?.SecondaryButtonText &&
                                    <Link href={props.content.SecondaryButtonUrl} passHref >
                                    <a id={'email_hero_features_'+props.slug} >
                                    <button className={`mm-secondary-button-regular  ${props.extraClass} `} >{props.content.SecondaryButtonText}</button>
                                    </a>
                                    </Link>
                                }
                            {/* <GoogleSignupButton extraClass="extra-class mr-4" trackingId={'google_hero_features_'+props.slug}/>
                             <SignupButton extraClass="extra-class" trackingId={'email_hero_features_'+props.slug} />
                            */}
                            </div>
                            </div>

                                {/* <p className={styles.cta_text + " mm-h6 mt-3"}>
                                No credit card required | Get your Free Trial today
                                </p> */}
                            {props.content.media[0]?.url?.includes("mp4")?   
                            
                            <>
                {props.content?.media[0]?.url &&
                 <video loop autoPlay muted className={styles.hero_video}>
                    <source
                      src={getImageUrl(props.content?.media[0]?.url??"https://res.cloudinary.com/mailmodo/image/upload/v1632463966/strapi/traffic_signs_361514_1920_fd83e3b51d.png")}
                      type="video/mp4"
                      preload="metadata"
                    />
                    <source
                      src={(props.content?.media[0]?.url??"https://res.cloudinary.com/mailmodo/image/upload/v1632463966/strapi/traffic_signs_361514_1920_fd83e3b51d.png")}
                      type="video/mp4"
                      preload="metadata"
                    />
                  </video>
                }
                  </>
                  :
                               <>
                               {props.content?.media[0]?.url &&
                                <Image
                                 priority={true}
                                 height={props.content.media[0]?.height}
                                 width={props.content.media[0]?.width}
                                 src={props.content?.media[0]?.url}
                                 />
                               }
                                 </>
                                
                  }


                            </div>
</>
}
                    </div>
                </div>

            </div>

        </>
    );
}

export default Hero