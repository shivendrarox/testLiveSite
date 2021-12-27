import React from 'react';
import { getImageUrl } from '../../../lib/strapiApi';
import styles from '../comparison.module.scss';

const Features = (props) => {
    //console.log(props.content)
    return (
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.spacing+" "+styles.features+" "}>
            <div className="container">
                <h2 className={styles.heading}>Why Mailmodo is the preferred Mailchimp alternative </h2>
                <p className={styles.desc+" mt-5"}>
                Leverage the power of interactive AMP emails with Mailmodo by adding forms, shopping cart, calendars and app widgets within your emails to boost your email campiagn performance. Here's what it means for you.                </p>
            
                <div className="row mt-5">
                {/* {props.content.features.map(element=>{
                    return( */}
                        <div className="col-md-4 mt-5">
                            <img className={styles.card_img} src={"/static/images/strapi-pages/comparison/features (3).svg"} ></img>
                            <h3 className={styles.card_h2+" mt-3"}>High conversions</h3>
                            <p className={styles.card_p+" mt-3"}>Mailmodo lets you add forms, carts, calendars, and app widgets within emails to make it interactive and actionable leading to higher conversions.</p>
                        </div>
                        <div className="col-md-4 mt-5">
                        <img className={styles.card_img} src={"/static/images/strapi-pages/comparison/features (1).svg"} ></img>
                            <h3 className={styles.card_h2+" mt-3"}>Dedicated support</h3>
                            <p className={styles.card_p+" mt-3"}>Get support when you need it the most, via email, chat or phone. Our deliverability and performance experts will ensure better email marketing ROI.</p>
                        </div>
                        <div className="col-md-4 mt-5">
                        <img className={styles.card_img} src={"/static/images/strapi-pages/comparison/features (2).svg"} ></img>
                            <h3 className={styles.card_h2+" mt-3"}>More feaures, more savings</h3>
                            <p className={styles.card_p+" mt-3"}>Well tailored plans suited for all your growing needs. Get a large suite of features to empower your email marketing team to explore growth like never before. </p>
                        </div>
                    {/* )
                })} */}


                
                </div>

            </div>
        </div>
        </>
    )
}

export default Features;