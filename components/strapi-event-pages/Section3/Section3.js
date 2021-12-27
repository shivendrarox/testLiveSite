import React from 'react';
import styles from '../features.module.scss';
import Link from 'next/link'
const Section = (props) => {
    return (
        <>
        <div style={{backgroundColor:"#f4f3ff"}} className={styles.section+" "}>
            <div className="container">

                <div className="row mt-4">

                    <div className="col-md-6">
                    <h3 className={styles.title+" mt-5 mb-5"}>Send and analyze your campaign</h3>

                            <h4 className={styles.desc_title+" my-1"}>Add your contact list</h4>
                            <p className={styles.desc+" my-4"}>Upload a list of contacts or import it from your CRM or other databases using powerful integrations and API connectors.</p>
                            
                            
                            <h4 className={styles.desc_title+" my-1"}>Schedule your campaign</h4>
                            <p className={styles.desc+" my-4"}>Schedule your AMP email campaigns to be sent at the right time or trigger it using webhooks or APIs based on user behaviour.</p>
                           
                            <h4 className={styles.desc_title+" my-1"}>Analyse your campaign</h4>
                            <p className={styles.desc+" my-4"}>Measure your AMP email performance with complete analytics including AMP & HTML opens and form submission metrics.</p>
                           
                    </div>

                    <div className="col-md-6">
                        <img src="/static/images/features/Steps_3.svg" className={styles.image}></img>
                    </div>

                </div>

            </div>
            <Link href="https://manage.mailmodo.com/auth/signup/"><button className={styles.custom_btn+" "}> Sign Up Now</button></Link>

        </div>

        </>
    )
}
export default Section