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
                {props.content?.Title &&
                 <h2>
                    {props.content.Title}
                </h2>}
                {props.content?.SubTitle && <p>{props.content.SubTitle}</p>}
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
                   
                {props.content?.PrimaryButton &&
                    <div className={styles.right_btns_container}  style={{height:"100%",display:"flex",justifyContent:"flex-end",alignItems:"center"}} >
                <Link passHref prefetch={false} href={props.content?.PrimaryButton?.Url??" "} >
                <a>
                <button className=" mm-primary-button-regular ">{props.content?.PrimaryButton?.Text??" "}</button>
                </a>
                </Link>


                {/* <Link passHref prefetch={false} href={props.content?.SecondaryButton?.Url??" "??" "} >
                <a>
                <button className=" mm-secondary-button-regular ">{props.content?.SecondaryButton?.Text??" "}</button>
                </a>
                </Link> */}

                </div>}

            </div>

        </div>

    </div>
</div>
</div>
        </>
        )
}

export default EndBlock;