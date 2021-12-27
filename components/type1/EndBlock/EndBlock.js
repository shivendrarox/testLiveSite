import React, { useState } from 'react';
import styles from '../type1.module.scss';
import Link from 'next/link';
import { getImageUrl } from '../../../lib/strapiApi';
const EndBlock = (props) => {
    return (
        <>
        <div className={styles.EndBlock+" "}>
            <h2 className={styles.heading+" mt-5 "}>Bring life to your marketing with AMP Emails</h2>

            <div className={styles.btn_img}>
       
                <Link href={"https://manage.mailmodo.com"}><button className={styles.button+"  "}>Sign Up Now</button></Link>
                <img className={styles.hand_img} src={getImageUrl("/static/images/type1/threedy.svg")}></img>
            </div>

        </div>
        </>
        )
}

export default EndBlock;