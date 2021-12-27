import React from 'react';
import styles from '../features.module.scss';

const Features = (props) => {
    return (
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.features+" "}>
            <div className="container">
                <h2 className={styles.heading}>Mailmodo is a complete AMP email marketing package</h2>

                <p className={styles.desc+" mt-5"}>
                Here are some more features that you can use to send AMP emails and leverage their power to create a conversion-first marketing funnel
                </p>

                <div className="row mt-5">

                    <div className="col-md-4 mt-5">
                        <img className={styles.card_img} src={"/static/images/features/features2/Frame1.svg"} ></img>
                        <h2 className={styles.card_h2+" mt-3"}>Visual Journey Builder </h2>
                        <p className={styles.card_p+" mt-3"}>Build user journey to send sequence of automated emails and trigger events using webhooks</p>
                    </div>

                    <div className="col-md-4 mt-5">
                        <img className={styles.card_img} src={"/static/images/features/features2/Frame2.svg"} ></img>
                        <h2 className={styles.card_h2+" mt-3"}>Easy Integrations</h2>
                        <p className={styles.card_p+" mt-3"}>Integrate with CRMs and marketing tools like HubSpot, Zapier, Google Sheets, Calendly, Zoom</p>
                    </div>

                    <div className="col-md-4 mt-5">
                        <img className={styles.card_img} src={"/static/images/features/features2/Frame3.svg"} ></img>
                        <h2 className={styles.card_h2+" mt-3"}>Transactional emails</h2>
                        <p className={styles.card_p+" mt-3"}>Send bulk transactional AMP emails using API & webhook triggers based on user behaviors</p>
                    </div>

                    <div className="col-md-4 mt-5">
                        <img className={styles.card_img} src={"/static/images/features/features2/Frame4.svg"} ></img>
                        <h2 className={styles.card_h2+" mt-3"}>Contact List Management</h2>
                        <p className={styles.card_p+" mt-3"}>Segment users based on attributes or past campaign activities like Open, Click & Form Submissions</p>
                    </div>

                    <div className="col-md-4 mt-5">
                        <img className={styles.card_img} src={"/static/images/features/features2/Frame5.svg"} ></img>
                        <h2 className={styles.card_h2+" mt-3"}>Complete Email Analytics</h2>
                        <p className={styles.card_p+" mt-3"}>Analyze all your data- Delivered, Opens, Clicks, Subject line A/B tests, etc. for both AMP & HTML emails</p>
                    </div>

                    <div className="col-md-4 mt-5">
                        <img className={styles.card_img} src={"/static/images/features/features2/Frame6.svg"} ></img>
                        <h2 className={styles.card_h2+" mt-3"}>High Deliverability</h2>
                        <p className={styles.card_p+" mt-3"}>Get high deliverability & opens with well managed & dedicated IPs and advice from our deliverability team</p>
                    </div>
                
                </div>

            </div>
        </div>
        </>
    )
}

export default Features;