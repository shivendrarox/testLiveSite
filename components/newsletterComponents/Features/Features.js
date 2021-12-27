import React from 'react';
import {  getImageUrl  } from '../../../lib/strapiApi'
import styles from '../features.module.scss';
import Image from 'next/image'
const Features = (props) => {
    return (
        <>
        <div style={{backgroundColor:"rgba(255, 249, 242, 1)"}} className={styles.features+" "}>
            <div className="layout-gap"></div>
                <div className="container">
                <h2 className={styles.heading}>{props.heading??" "}</h2>
                <div className="layout-padding"></div>
                {/** (
                <p className={styles.desc+" mt-5"}>
                Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.
                </p>
               */}
                <div className="row ">

                {props.content.map((item)=>{
                    return(
                        <>
                            <div className="col-md-4 align-self-center">
                                <div className="layout-padding"></div>
                                <img className={styles.card_img} src={getImageUrl(item.img??"")} ></img>
                                <h2 className={styles.card_h2+" mt-3"}>{item.title??""}</h2>
                                <p className={styles.card_p+" mt-3"}>{item.subTitle??""}</p>
                            </div>
                        </>
                    )
                })}

                        {/* <div className="col-md-4 mt-5">
                            <img className={styles.card_img} src={getImageUrl("/uploads/f2_13754b5c6b.svg")} ></img>
                            <h2 className={styles.card_h2+" mt-3"}>Troubleshoot your emails</h2>
                            <p className={styles.card_p+" mt-3"}>Tips from email marketers and copywriters on developing a process for optimizing your subject line testing processes.</p>
                        </div>

                        <div className="col-md-4 mt-5">
                            <img className={styles.card_img} src={getImageUrl("/uploads/f3_22ab8038a2.svg")} ></img>
                            <h2 className={styles.card_h2+" mt-3"}>Industry insights</h2>
                            <p className={styles.card_p+" mt-3"}>Discussions on how to craft email subject lines that are irresistibly clickable supported by findings from our subject line experiment.</p>
                        </div> */}
                
                </div>

            </div>
            <div className="layout-gap"></div>
        </div>
        </>
    )
}

export default Features;