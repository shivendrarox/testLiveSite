import React from 'react';
import { getImageUrl } from '../../../lib/strapiApi';
import styles from '../features.module.scss';
import Image from  'next/image'

const Section = (props) => {
    return (
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.section+" "}>
            <div className="container">
            <h2 className={styles.heading + " "}>Why you should use this checklist</h2>
                <div className="row mt-4">

                    <div className="col-md-6 align-self-center">
                        <p className={styles.desc}>This pre-deployment checklist will help you ensure that your email campaign is compliant with all email marketing best practices and that you aren’t forgetting any important details. To err is human, after all!</p>
                        <p style={{paddingTop:"16px",paddingBottom:"16px"}} className={styles.desc}>Here’s how it will help you send error-free campaigns: </p>
                            <p className={styles.desc+" my-4"}>
                                <ul>
                                    <li>
                                        <div className={styles.custom_li}>
                                            <img className={styles.marker_img} alt="tick mark" src="/static/images/strapi-pages/comparison/tick.svg">
                                            </img>
                                            <p>
                                            Cross-check all tiny but important details that might hamper your campaign performance
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                    <div className={styles.custom_li}>
                                            <img className={styles.marker_img} alt="tick mark" src="/static/images/strapi-pages/comparison/tick.svg">
                                            </img>
                                            <p>
                                            Step-by-step QA check of your email processes
                                            </p>
                                    </div>
                                    </li>
                                    <li>
                                    <div className={styles.custom_li}>
                                            <img className={styles.marker_img} alt="tick mark" src="/static/images/strapi-pages/comparison/tick.svg">
                                            </img>
                                            <p>
                                            Confidently press the send button even when sending several campaigns
                                            </p>
                                    </div>
                                    </li>
                                </ul>
                            </p>
                                            
                    </div>

                    <div className="col-md-6 align-self-top">
                        <div className={styles.section_img_container} style={{marginLeft: 'auto' ,position: 'relative', width: '500px', height: '400px' }}>
                        <Image alt=" checklist image " src={"https://res.cloudinary.com/mailmodo/image/upload/v1634562025/strapi/image_2_1fada6d07d.png"} layout="fill" objectFit="contain" />
                        </div>

                    </div>

                </div>

            </div>
        </div>
        </>
    )
}
export default Section