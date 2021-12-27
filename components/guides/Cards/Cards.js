import React, { useState, useContext } from 'react';
import styles from './Cards.module.scss';
import Image from 'next/image'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import Link from 'next/link'

const Cards=(props)=>{
    return(
        <>
        <div style={{backgroundColor:"transparent"}} className={styles.Cards+" "}>


            <div className=" ">
                <div className=" ">
                    <div className="col-md-12 px-0 align-self-center">
                        <Link href={"https://api.mailmodo.com/pages/61f9f348-2323-438e-86d3-0894f12d4309/f5452914-8468-45b8-b70d-b57ebfcb58bd"}>
                        <div className={styles.card_item}>
                            <div className={styles.card_img}>
                                {/* <img style={{width:"100%"}} src={"https://media.giphy.com/media/RLasFuaMhva126GScq/giphy.gif"}></img> */}
                                <Image
                                    src={"https://media.giphy.com/media/RLasFuaMhva126GScq/giphy.gif"}
                                    width="304"
                                    height="176"
                                    layout="responsive"
                                />
                            </div>
                            <div className={styles.card_matter}>

                                <div className={styles.card_title}>
                                Not asking for a survey, helping you ace them!
                                </div>

                                <div className={styles.card_tag}>
                                June 4,2021
                                </div>

                            </div>
                        </div>
                        </Link>
                    </div>
                
                </div>

            </div>
            
            <div className="layout-gap"></div>
        </div>
        </>
    )
}

export default Cards

