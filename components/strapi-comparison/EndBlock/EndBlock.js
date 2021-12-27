import React, { useState } from 'react';
import styles from '../comparison.module.scss';
import Link from 'next/link';
import { getImageUrl } from '../../../lib/strapiApi';
const EndBlock = (props) => {
    //console.log(props.content)
    return (
        <>
        <div style={{backgroundColor:"#4243DA"}} className={styles.EndBlock+" "}>
            <h2 className={styles.heading+" mt-5 "}>Grow faster, starting today.</h2>

            <p className={styles.desc}>
                Everything your emails need at a fraction of the cost. Sign up for free and explore all our features without restrictions. Create your first campaign in less than 15 minutes.
            </p>

            <div className={styles.btn_img}>
       
                <Link href={props.content.buttonUrl??"https://manage.mailmodo.com/auth/signup "}><button className={styles.button+"  "}>Get started                 <img className={styles.hand_img} src={getImageUrl("/static/images/type1/threedy.svg")}></img>
</button></Link>
            </div>

        </div>
        </>
        )
}

export default EndBlock;