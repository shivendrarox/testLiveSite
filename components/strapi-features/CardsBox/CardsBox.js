import React, { useState } from 'react';
import styles from '../features.module.scss';
import Image from 'next/image'
//import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import Link from 'next/link'


const Cards=(props)=>{
      return(
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.Cards+" "}>
        {props.content.Title &&  <h2 className={styles.heading+" mm-h2"}>{props.content.Title}</h2>}

        {<p className={styles.desc+" mm-h6"}>{props.content?.SubTitle??" "}</p>}
            {/* <div className={"container"}>
                <div className="row">
                <div className="col-md-6"><span className={styles.heading}>Explore videos</span></div>
                </div>

            </div> */}
            
            <div className="layout-padding"></div>
            <div className="container">

                <div className="row">
                    {props.content.CardItem?.map((item,index)=>{
                return (
                        <>
                                     <div key={index} className="col-md-4">
                    <Link passHref href={item.ReadMoreLink??" "}>
                        <a>
                    <div className={styles.card_item}>
                        <div className={styles.card_img}>
                           {item.Image && <Image
                                src={item.Image.url}
                                width="304"
                                height="176"
                                layout="responsive"
                            />
                            }
                        </div>
                        <div className={styles.card_matter}>
                        
                        {item.Title &&
                            <div className={styles.card_title}>
                                {item.Title}
                            </div>
                            }

                        {item.SubTitle &&
                            <div className={styles.card_tag}>
                                {item.SubTitle}
                            </div>
                            }

                        </div>
                    </div>
                    </a>
                    </Link>
                </div>
                        </>
                        )
                    })}


                </div>

            </div>
            
  
          <div className="layout-gap"></div>

        </div>
        </>
    )
}

export default Cards

