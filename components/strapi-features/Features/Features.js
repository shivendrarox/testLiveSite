import React from 'react';
import { getImageUrl } from '../../../lib/strapiApi';
import styles from '../features.module.scss';
import Image from 'next/image'
import Link from 'next/link'
const Features = (props) => {
    return (
        <>
            <div style={{ backgroundColor: "#ffffff" }} className={styles.features + " "}>
                <div className="container">
                    <h2 className={styles.heading + " mm-h2"}>{props.content.title}</h2>
                    <p className={styles.desc + " mm-h6"}>{props.content.subTitle ?? " "}</p>
                    <div className={styles.card_container} >
                        {props.content.features.map(element => {
                            return (
                                (element.ReadMoreLink ?




                                    // item WITH link and hover anim, rest is same below item
                                    <div style={{ textAlign: props.content.features.length % 3 === 0 ? "left" : "center", maxWidth: props.content.features.length % 3 === 0 ? "33.33%" : "50%" }} className={styles.card_item + " " + styles.hover_anim}>
                                        <Link passHref href={element.ReadMoreLink ?? " "}>
                                            <a>
                                                {element.image?.url &&
                                                    <div style={{ display: "flex", justifyContent: props.content.features.length % 3 === 0 ? "flex-start" : "center" }}>
                                                        <Image
                                                            height={element.image?.height}
                                                            width={element.image?.width}
                                                            src={getImageUrl(element.image?.url)}
                                                        />
                                                    </div>
                                                }
                                                {/* <img className={styles.card_img} src={} ></img> */}
                                                <h5 className={styles.card_h2 + " mm-h4 mt-3"}>{element.title}</h5>
                                                {element.description && <p className={styles.card_p + " mm-body-1 mt-3"}>{element.description}</p>}
                                            </a>
                                        </Link>
                                    </div>

                                    :
                                    // item without link and hover anim, rest is same above item
                                    <div style={{ textAlign: props.content.features.length % 3 === 0 ? "left" : "center", maxWidth: props.content.features.length % 3 === 0 ? "33.33%" : "50%" }} className={styles.card_item}>

                                        {element.image?.url &&
                                            <div style={{ display: "flex", justifyContent: props.content.features.length % 3 === 0 ? "flex-start" : "center" }}>
                                                <Image
                                                    height={element.image?.height}
                                                    width={element.image?.width}
                                                    src={getImageUrl(element.image?.url)}
                                                />
                                            </div>
                                        }
                                        {/* <img className={styles.card_img} src={} ></img> */}
                                        <h5 className={styles.card_h2 + " mm-h4 mt-3"}>{element.title}</h5>
                                        {element.description && <p className={styles.card_p + " mm-body-1 mt-3"}>{element.description}</p>}

                                    </div>

                                )

                            )
                        })}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {(props.content?.PrimaryButton || props.content?.SecondaryButton) && <div className={styles.button_container}>
                            {props.content?.PrimaryButton &&
                                <Link passHref href={props.content?.PrimaryButton?.Url ?? " "}>
                                    <a>
                                        <button className='mm-primary-button-regular' >{props.content?.PrimaryButton?.Text ?? " "}</button>
                                    </a>
                                </Link>
                            }

                            {props.content?.SecondaryButton &&
                                <Link passHref href={props.content?.SecondaryButton?.Url ?? " "}>
                                    <a>
                                        <button className='mm-secondary-button-regular' >{props.content?.SecondaryButton.Text ?? " "}</button>
                                    </a>
                                </Link>
                            }
                        </div>}
                    </div>

                    {/* <div className="row justify-content-center">
                {props.content.features.map(element=>{
                    return(
                        <div className="col-md-4 p-4">
                           {element.image?.url &&
                            <Image
                            height={element.image?.height}
                            width={element.image?.width}
                            src={getImageUrl(element.image?.url)}
                            />}
                            <h5 className={styles.card_h2+" mm-h4 mt-3"}>{element.title}</h5>
                            {element.description && <p className={styles.card_p+" mm-body-1 mt-3"}>{element.description}</p>}
                        </div>
                    )
                })}


                
                </div> */}

                </div>
            </div>
        </>
    )
}

export default Features;