import { red } from '@material-ui/core/colors';
import React, { useState } from 'react';
import styles from '../../comparison.module.scss';

const Testimonial=(props)=>{

    return(
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.spacing+" "+styles.Testimonial+" "}>
            <h2 className={styles.heading+" "}>Our clients speak</h2>


            <div className="container mt-5">
            
            <p className={styles.desc+" mt-5 "}>Companies Trust Mailmodo to Deliver Great Email Experience</p>

                <div className="row ">
                    <div className={"col-md-4 "+styles.card_container}>
                        <div className={styles.card+" pl-5 pr-5"}>
                            <h3 className={styles.heading+" pt-3"}>
                            250% Increase In Response Rate
                            </h3>
                            <p className={styles.desc+" mt-3 pb-3"}>
                            We saw a massive 250% increase in responses to our NPS survey emails. Our merchants loved the email as it enabled them to share their thoughts with us without even getting redirected once.
                            </p>
                        </div>
                            <img className={styles.round_img+" mt-5"} src="https://www.mailmodo.com/static/images/Subhash_Dash.png"></img>
                            <h4 className={styles.img_name+" mt-2"}>Subhash Dash</h4>
                            <p className={styles.img_desc+" mt-1 mb-3"}>Marketing, Razorpay</p>
                    </div>

                    <div className={"col-md-4 "+styles.card_container}>
                        <div className={styles.card+" pl-5 pr-5"}>
                            <h3 className={styles.heading+" pt-3"}>
                            2X Meeting <br/> Bookings
                            </h3>
                            <p className={styles.desc+" mt-3 pb-3"}>
                            With Mailmodo, we get meetings booked right inside email without to & fro messages. This has doubled our meeting booking rate & ROI from emails.
                            </p>
                        </div>
                            <img className={styles.round_img+" mt-5"} src="https://www.mailmodo.com/static/images/Vikas_Kaushal.png"></img>
                            <h4 className={styles.img_name+" mt-2"}>Vikas Kaushal</h4>
                            <p className={styles.img_desc+" mt-1 mb-3"}>Co-founder & Head, Growth Foyr</p>
                    </div>

                    <div className={"col-md-4 "+styles.card_container}>
                        <div className={styles.card+" pl-5 pr-5"}>
                            <h3 className={styles.heading+" pt-3"}>
                            Amazing Customer Support
                            </h3>
                            <p className={styles.desc+" mt-3 pb-3"}>
                            Mailmodo team has always been very supportive and their customer success team took extra measures to get better results from our campaigns.
                            </p>
                        </div>
                            <img className={styles.round_img+" mt-5"} src="https://www.mailmodo.com/static/images/Karanpreet.png"></img>
                            <h4 className={styles.img_name+" mt-2"}>Karanpreet Bandra</h4>
                            <p className={styles.img_desc+" mt-1 mb-3"}>Head - Marketing, Rupeek</p>
                    </div>

                </div>
            </div>

        </div>
        </>
    )
}
export default Testimonial;