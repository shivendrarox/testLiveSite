import React from 'react';
import styles from '../type1.module.scss';
import { getImageUrl } from '../../../lib/strapiApi';
const Section = (props) => {
    return (
        <>
        <div style={{backgroundColor:"#E7FFF6"}} className={styles.section+" "}>
            <div className="container">
                <h2 className={styles.heading+" "}>Send AMP Emails in 3 steps</h2>

                <div className="row mt-4">

                    <div className="col-md-6">
                    <h3 className={styles.title+" mt-5 mb-5"}>Create your AMP email template</h3>

                            <h4 className={styles.desc_title+" my-1"}>Choose an AMP email template</h4>
                            <p className={styles.desc+" my-4"}>Pick a readymade AMP Email template from our growing library and customize it with our drag and drop editor</p>
                            
                            
                            <h4 className={styles.desc_title+" my-1"}>Create a new AMP email</h4>
                            <p className={styles.desc+" my-4"}>You can create a new AMP email template from scratch without any coding using the drag-and-drop editor within minutes</p>
                           
                            <h4 className={styles.desc_title+" my-1"}>Edit your fallback HTML</h4>
                            <p className={styles.desc+" my-4"}>Make sure that you check out the fallback HTML version that gets created automatically and edit it if requried.</p>
                           
                    </div>

                    <div className="col-md-6">
                        <img src={getImageUrl("/static/images/type1/Steps_1.svg")} className={styles.image}></img>
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}
export default Section