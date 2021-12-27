import React from 'react';
import { getImageUrl } from '../../../lib/strapiApi';
import styles from '../features.module.scss';

const Section = (props) => {
    return (
        <>
            <div style={{ backgroundColor: props.content.backgroundColor?? "#FFFF" }} className={styles.section + " "}>
                <div className="container">
                    {props.content.title && <h2 className={styles.heading + " "}>{props.content.title??" "}</h2>}

                    <div className="row mt-4">

                        <div className={`${props.content?.image?'col-md-6':' col-md-12 align-self-center '} ${(props.content.imagePosition=='Right')?' order-sm-1 ':' order-sm-12 '}`}>
                            {props.content?.subTitle && <h3 className={styles.title + ` ${props.content?.image?'':'text-center'}  mt-5 mb-5`}>{props.content.subTitle??""}</h3>}
                            
                            <div className={props.content?.image?'':styles.matter_block}>
                            {props.content.features.map(element => {
                                return (<>
                                    {element.title && <h4 className={styles.desc_title + " my-1"}>{element.title??""}</h4>}
                                    {element.description && <p className={styles.desc + ` ${props.content?.image?'':'text-center'} my-4`}>{element.description??""}</p>}
                                </>)
                            })}
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