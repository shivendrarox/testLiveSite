import React from 'react';
import { getImageUrl } from '../../../lib/strapiApi';
import styles from '../features.module.scss';
import Link from 'next/link';
const Section = (props) => {
    return (
        <>
            <div style={{ backgroundColor: props.content.backgroundColor?? "#FFFF" }} className={styles.section + " "}>
                <div className="container">
                    {props.content.title && <h2 className={styles.heading + " mm-h2"}>{props.content.title??" "}</h2>}
                    <p className={styles.desc+" mm-h6"}>{props.content.Description??" "}</p>

                    <div className="row mt-4">

                        <div className={`${props.content?.image?'col-md-6':' col-md-12 align-self-center '} ${(props.content.imagePosition=='Right')?' order-sm-1 ':' order-sm-12 '}`}>
                            {props.content?.subTitle && <h3 className={" mm-h3 "+styles.title + ` ${props.content?.image?'':'text-center'}  `}>{props.content.subTitle??""}</h3>}
                            
                            <div className={props.content?.image?'':styles.matter_block}>
                            {props.content.features.map(element => {
                                return (<>
                                    {element.title &&
                                    <div className={styles.list_container}>
                                    <img title="check mark" alt="Check.svg" className={styles.icon} src="/static/images/icon/Check.svg"></img>
                                    <h4 className={styles.list_title + " mm-subtitle-1"}>{element.title??""}</h4>
                                    </div>
                                    }
                                    {element.description && <p className={" mm-body-1 "+styles.list_item + ` ${props.content?.image?'':'text-center'} `}>{element.description??""}</p>}

                                </>)
                            })}
                            {(props.content?.PrimaryButton || props.content?.SecondaryButton) && 
                            <div className={styles.button_container}>
                            {props.content?.PrimaryButton &&
                            <Link passHref href={props.content?.PrimaryButton?.Url??" "}>
                            <a>
                            <button className='mm-primary-button-regular' >{props.content?.PrimaryButton?.Text??" "}</button>
                            </a>
                            </Link>
                            }

                            {props.content?.SecondaryButton &&
                            <Link passHref href={props.content?.SecondaryButton?.Url??" "}>
                            <a>
                            <button className='mm-secondary-button-regular' >{props.content?.SecondaryButton.Text??" "}</button>
                            </a>
                            </Link>
                            }
                            </div>}
  
                            </div>

                        </div>

                        {props.content?.image && <div className={`col-md-6 align-self-center ${(props.content.imagePosition=='Right')?' order-sm-12 ':' order-sm-1 '}`}>
                            { <img src={getImageUrl(props.content.image?.url ?? "No Image Url")} className={styles.image}></img>}

       
                        </div>}

                    </div>

                </div>
            </div>
        </>
    )
}
export default Section