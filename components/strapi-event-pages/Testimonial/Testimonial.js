import { red } from '@material-ui/core/colors';
import React, { useState } from 'react';
import styles from '../features.module.scss';

const Testimonial=(props)=>{

    return(
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.Testimonial+" "}>
            <h2 className={styles.heading+" "}>Our clients speak</h2>


            <div className="container mt-5">
            
            <p className={styles.desc+" mt-5 "}>Companies Trust Mailmodo to Deliver Great Email Experience</p>

                <div className="row ">
                <div className={"col-md-4 "+styles.card_container}>
                        <div className={styles.card+" pl-5 pr-5"}>
                            <h3 className={styles.heading+" pt-3"}>
                            GREAT BENEFITS
                            </h3>
                            <p className={styles.desc+" mt-3 pb-3"}>
                            Easy to use and create the campaigns, love the automation you can create, really helps spend less time prospecting
                            </p>
                        </div>
                            <img className={styles.round_img+" mt-5"} src="https://res.cloudinary.com/mailmodo/image/upload/f_webp,q_50/v1628497684/strapi//static/images/Oscar.png?auto=format&fit=max&w=1920"></img>
                            <h4 className={styles.img_name+" mt-2"}>Oscar M</h4>
                            <p className={styles.img_desc+" mt-1 mb-3"}>Marketing Manager, Economista</p>
                    </div>

                    <div className={"col-md-4 "+styles.card_container}>
                        <div className={styles.card+" pl-5 pr-5"}>
                            <h3 className={styles.heading+" pt-3"}>
                            EXTREMELY RESPONSIVE
                            </h3>
                            <p className={styles.desc+" mt-3 pb-3"}>
                            The Mailmodo team is extremely responsive, helping to troubleshoot any questions or concerns. Their customer service has been unparalleled
                            </p>
                        </div>
                            <img className={styles.round_img+" mt-5"} src="https://res.cloudinary.com/mailmodo/image/upload/f_webp,q_50/v1630304085/strapi/univassist_logo_1_09f8709dd0.png?auto=format&fit=max&w=1920"></img>
                            <h4 className={styles.img_name+" mt-2"}>Kate Lotz</h4>
                            <p className={styles.img_desc+" mt-1 mb-3"}>Associate Director, UnivAssist</p>
                    </div>


                    <div className={"col-md-4 "+styles.card_container}>
                        <div className={styles.card+" pl-5 pr-5"}>
                            <h3 className={styles.heading+" pt-3"}>
                            GREAT AMP APPROACH
                            </h3>
                            <p className={styles.desc+" mt-3 pb-3"}>
                            It's great to be able to get interactions within the email itself without taking the user out of context
                            </p>
                        </div>
                            <img className={styles.round_img+" mt-5"} src="https://res.cloudinary.com/mailmodo/image/upload/f_webp,q_50/v1628497684/strapi//static/images/Hugo.png?auto=format&fit=max&w=1920"></img>
                            <h4 className={styles.img_name+" mt-2"}>Hugo Alves</h4>
                            <p className={styles.img_desc+" mt-1 mb-3"}>Senior Product Manager, Prolific</p>
                    </div>

                </div>
            </div>

        </div>
        </>
    )
}
export default Testimonial;