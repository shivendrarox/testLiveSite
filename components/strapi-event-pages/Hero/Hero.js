import React from 'react';
import styles from '../features.module.scss'
import Link from 'next/link'
import {  getImageUrl  } from '../../../lib/strapiApi'
import marked from 'marked'
import SampleEmail from '../SampleEmail/SampleEmail';

const Hero = (props) => {
    // console.log(props)
    return (
        <>
            <div className={styles.hero+" "}>
                <div className="container">
                <div dangerouslySetInnerHTML={{ __html: marked(props.content.title??" ") }} className={styles.heading + " "}>
                            </div>
                    <div className="row ">
                        <div className="col-md-5 align-self-center">
                        { <img src={getImageUrl(props.content?.media[0]?.url ?? "No Image Url")} className={styles.hero_image}></img>}
                  
                        </div>
                    
                        <div className={" col-md-7 align-self-center"}>
                            {/* <img className={styles.bg_img} src="../../static/images/type1/Purple Circle.svg"></img> */}
                            

                            <div dangerouslySetInnerHTML={{ __html: marked(props.content.subTitle??" ") }} className={styles.hero_p + " "}>
                            </div>

                            {/* <div className={styles.cta + " mb-5"}>
                            <div className="mt-4 form-wrap d-flex justify-content-md-start">
                            <GoogleSignupButton extraClass="extra-class mr-4" trackingId={'google_hero_features_'+props.slug}/>
                             <SignupButton extraClass="extra-class" trackingId={'email_hero_features_'+props.slug} />
                            </div>

                                <p className={styles.cta_text + " mt-3"}>
                                No credit card required | Get your Free Trial today
                                </p>
                            </div> */}
                            <div style={{paddingTop:"2rem"}}></div>
                             <div className={styles.cta}>
                                <SampleEmail
                                title={props.seoTitle}
                                eventName={"Event Registration Done"}
                                location = "Hero"
                                btnText={"Register"}
                                urlsToCall ={[
                                    'https://api.mailmodo.com/api/v1/at/c/ozeRTbg_-k/b23ae9b9-f4a2-5331-b977-e674db0bf73e',
                                    'https://entx5xhb22q4sxz.m.pipedream.net',
                                ]}
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
}

export default Hero