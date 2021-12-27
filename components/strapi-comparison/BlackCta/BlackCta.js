import React from 'react';

import styles from '../comparison.module.scss'
import Link from 'next/link'
import { getImageUrl } from '../../../lib/strapiApi'

const BlacCta = (props) => {
    return (
        <>
        
        <div className={styles.cta}>
                        <div className={styles.flex_container}>

                            <div className={styles.flex_item_left}>
                                <p className={styles.desc}>
                                    {props.text??" "}
                                </p>
                            </div>
                            <div className={styles.flex_item_right+" "}>
                            <Link href={props.content?.buttonUrl??"https://manage.mailmodo.com/auth/signup "}>
                                <button className={styles.cta_btn}>{props.btn_text??" "}</button>
                            </Link>
                            </div>
                        </div>


                </div>
            
        </>
    )
}

export default BlacCta;