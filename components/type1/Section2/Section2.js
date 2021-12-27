import React from 'react';
import styles from '../type1.module.scss';
import { getImageUrl } from '../../../lib/strapiApi';
const Section = (props) => {
    return (
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.section+" "}>
            <div className="container">

                <div className="row mt-4">


                <div className="col-md-6 order-sm-12 ">
                        <h3 className={styles.title+" mt-5 mb-5"}>Add your sender details</h3>

                             <h4 className={styles.desc_title+" my-1"}>Get Whitelisting Assistance</h4>
                            <p className={styles.desc+" my-4"}>Get whitelisted for AMP approval with email clients with a single form-fill designed to simplify and fastrack approval</p>
                            
                            
                            <h4 className={styles.desc_title+" my-1"}>Configure your preferred SMTP</h4>
                            <p className={styles.desc+" my-4"}>Start using the SMTP of your choice to send emails using a simple setup and verification process</p>
                           
                            <h4 className={styles.desc_title+" my-1"}>Add custom domain emails</h4>
                            <p className={styles.desc+" my-4"}>Configure your custome domain with Mailmodo to start sending emails from your custom domain or business email id.</p>
                           
                    </div>

                    <div className="col-md-6  order-sm-1">
                        <img src={getImageUrl("/static/images/type1/Steps_2.svg")} className={styles.image}></img>
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}
export default Section