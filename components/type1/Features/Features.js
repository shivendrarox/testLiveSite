import React from 'react';
import styles from '../type1.module.scss';

const Features = (props) => {
    return (
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.features+" "}>
            <div className="container">
                <h2 className={styles.heading}>Focus on conversions with interactive AMP Emails</h2>
                {/** 
                <p className={styles.desc+" mt-5"}>
                Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.
                </p>
               */}
                <div className="row mt-5">

                    <div className="col-md-4 mt-5">
                        <img className={styles.card_img} src={"/static/images/type1/Frame.svg"} ></img>
                        <h2 className={styles.card_h2+" mt-3"}>Send interactive AMP Emails</h2>
                        <p className={styles.card_p+" mt-3"}>Include interactive elements like forms, calendars, carts and widgets</p>
                    </div>

                    <div className="col-md-4 mt-5">
                        <img className={styles.card_img} src={"/static/images/type1/Frame2.svg"} ></img>
                        <h2 className={styles.card_h2+" mt-3"}>Add Forms inside email</h2>
                        <p className={styles.card_p+" mt-3"}>Allow your users to submit responses within emails with multi-step forms</p>
                    </div>

                    <div className="col-md-4 mt-5">
                        <img className={styles.card_img} src={"/static/images/type1/Frame3.svg"} ></img>
                        <h2 className={styles.card_h2+" mt-3"}>Simplify conversion</h2>
                        <p className={styles.card_p+" mt-3"}>Eliminate redirections  and minimize the number of steps for conversion</p>
                    </div>
                
                </div>

            </div>
        </div>
        </>
    )
}

export default Features;