import React, { useState } from 'react';
import styles from '../features.module.scss';
import Link from 'next/link';
import { getImageUrl } from '../../../lib/strapiApi';
import marked from 'marked'
import SampleEmail from '../SampleEmail/SampleEmail';

const EndBlock = (props) => {
    //console.log(props.content)
    return (
        <>
        <div className={styles.EndBlock+" "}>
            <div className="container">
                <div className={styles.heading+" "} dangerouslySetInnerHTML={{__html:marked(props.content.title)}}></div>

                { props.content.subTitle && <div className={styles.subHeading+"  "} dangerouslySetInnerHTML={{ __html: marked(props.content.subTitle??" ") }} ></div>}
            </div>

            {/* <div className={styles.btn_img}>
                <img className={styles.hand_img} src={getImageUrl("/static/images/type1/threedy.svg")}></img>
            </div> */}

            <div className="layout-padding"></div>
            <div className={styles.cta}>
                <SampleEmail
                       title={props.seoTitle}
                       eventName={"Event Registration Done"}
                       location = "Footer"
                       btnText={"Register"}
                btnText={"Send me an Email"}
                />
            </div>

        </div>
        </>
        )
}

export default EndBlock;