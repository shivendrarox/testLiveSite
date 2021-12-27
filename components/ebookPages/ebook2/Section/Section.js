import React from 'react';
import { getImageUrl } from '../../../../lib/strapiApi';
import styles from '../features.module.scss';
import Image from  'next/image'

const Section = (props) => {
    return (
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.section+" "}>
            <div className="container">
            <h2 className={styles.heading + " "}>Why should you read this e-book?</h2>
                <div className="row mt-4">

                    <div className="col-md-6 align-self-center">
                        <p className={styles.desc}>Imagine fixing your car. The first step is to do a thorough check-up and then diagnose the problem of why your car isn’t working. As they say, the identification of the problem is where the real battle lies. Once you have diagnosed this, the next natural step is to troubleshoot it. </p>
                        <p style={{paddingTop:"16px",paddingBottom:"16px"}} className={styles.desc}>Here's how this e-book will help you do the same for email campaigns-</p>
                            <p className={styles.desc+" my-4"}>
                                <ul>
                                    <li>
                                        <div className={styles.custom_li}>
                                            <img className={styles.marker_img} alt="tick mark" src="/static/images/strapi-pages/comparison/tick.svg">
                                            </img>
                                            <p>
                                            Framework to identify the gaps in your email campaigns
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                    <div className={styles.custom_li}>
                                            <img className={styles.marker_img} alt="tick mark" src="/static/images/strapi-pages/comparison/tick.svg">
                                            </img>
                                            <p>
                                            Guide on fixing the loopholes and optimizing performance
                                            </p>
                                    </div>
                                    </li>
                                    <li>
                                    <div className={styles.custom_li}>
                                            <img className={styles.marker_img} alt="tick mark" src="/static/images/strapi-pages/comparison/tick.svg">
                                            </img>
                                            <p>
                                            Learnings shared by 50+ email experts
                                            </p>
                                    </div>
                                    </li>
                                </ul>
                            </p>
                                            
                    </div>

                    <div className="col-md-6 align-self-center">
                        <Image
                        alt="section image"
                        width={450}
                        height={583}
                        src={"https://res.cloudinary.com/mailmodo/image/upload/v1632459588/strapi/Mask_Group_e5d8eaa808.jpg"}
                        />
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}
export default Section