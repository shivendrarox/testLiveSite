import React, { useState } from 'react';
import styles from '../../comparison.module.scss';
import Link from 'next/link';

import { getImageUrl } from '../../../../lib/strapiApi';
const EndBlock = (props) => {
    //console.log(props.content)
    return (
        <>
        <div style={{backgroundColor:"#4243DA"}} className={styles.EndBlock+" "}>
            <h2 className={styles.heading+" mt-5 "}>{props.content?.title??""}</h2>

            <p className={styles.desc}>
                {props.content?.subTitle??""}
            </p>

            <div className={styles.btn_img}>
                <Link href={props.content?.buttonUrl??"https://manage.mailmodo.com/auth/signup"}>
                    <button className={styles.button+"  "}>{props.content?.buttonText??""}<img className={styles.hand_img} src={getImageUrl("/static/images/type1/threedy.svg")}></img></button>
                </Link>
            </div>

        </div>
        </>
        )
}

export default EndBlock;