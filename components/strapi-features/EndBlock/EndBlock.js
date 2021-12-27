import React, { useState } from 'react';
import styles from '../features.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { getImageUrl } from '../../../lib/strapiApi';
const EndBlock = (props) => {

    return (
        <>
        <div className={styles.EndBlock}>
<div className="container ">
    <div className={styles.email_card_container}>
        <div className={"row"}>
            <div className="col-md-6 px-0 ">
                <div className={styles.matter_block}>
                {props.content?.title &&
                 <h2>
                    {props.content.title}
                </h2>}
                {props.content?.subTitle && <p>{props.content.subTitle}</p>}
                {/* <Link prefetch={false} href={props.content?.buttonUrl??" "} >
                <button>{props.content?.buttonText}</button>
                </Link> */}
                
                </div>
                
            </div>
            <div className="col-md-6 px-0">
                {/* <div style={{width:"100%",marginBottom:"-11px"}} > */}
                {/* <div className={styles.img_container} >
                <Image
                alt="email templates image"
                  height="362"
                  width="700"
                  src={'https://res.cloudinary.com/mailmodo/image/upload/v1637067281/strapi/Group_101390_2_6df0c84e98.png'}
                />
                </div> */}
                   
                <div className={styles.right_btns_container}  style={{height:"100%",display:"flex",justifyContent:"flex-end",alignItems:"center"}} >
                <Link prefetch={false} href={props.content?.buttonUrl??" "} >
                <button className=" mm-primary-button-regular ">{props.content?.buttonText}</button>
                </Link>

                {/* <Link prefetch={false} href={props.content?.buttonUrl??" "} >
                <button>{props.content?.buttonText}</button>
                </Link> */}
                </div>

            </div>

        </div>

    </div>
</div>
</div>
        </>
        )
}

export default EndBlock;