import React from 'react';
import { getImageUrl } from '../../../lib/strapiApi';
import styles from '../features.module.scss';
import marked from 'marked'
import Link from 'next/link'

const GenericMarkdownBlock = (props) => {
    return (
        <>
            <div style={{ backgroundColor: props.content.backgroundColor?? "#FFFF" }} className={styles.generic_md_block_section + " "}>
                <div className="container">
                    {props.content.title && <div className={styles.heading + " mm-h2 "}  dangerouslySetInnerHTML={{ __html: marked(props.content.title??" ") }}></div>}

                    {props.content.description && <div className={styles.desc_title+ " mm-subtitle-1 my-1"} dangerouslySetInnerHTML={{ __html: marked(props.content.description??"")}} ></div>}

                    <div className="row mt-4">

                        <div className={`${props.content?.image?'col-md-6':' col-md-12 align-self-center '} ${(props.content.imagePosition=='Right')?' order-sm-1 ':' order-sm-12 '}`}>
                            
                            <div className={props.content?.image?'':styles.matter_block}>
                            {/* {props.content.features.map(element => {
                                return (<>
                                    {element.title && <h4 className={styles.desc_title + " my-1"}>{element.title??""}</h4>}
                                    {element.description && <p className={styles.desc + ` ${props.content?.image?'':'text-center'} my-4`}>{element.description??""}</p>}
                                </>)
                            })} */}
                            {/*            below text align left for no image condition          */}
                            <div style={{textAlign:`${props.content?.image?"":"left"}`}} className={styles.md_content+" mm-markdown-standard "} dangerouslySetInnerHTML={{ __html: marked.parse(props.content.content??" ") }}></div>
                            </div>

                        </div>

                        {props.content?.image && <div className={`col-md-6 align-self-center ${(props.content.imagePosition=='Right')?' order-sm-12 ':' order-sm-1 '}`}>
                            { <img src={getImageUrl(props.content.image?.url ?? "No Image Url")} className={styles.image}></img>}

       
                        </div>}

                    </div>

                </div>
                { props.content?.button &&
                <Link href={props.content?.button?.link??" "}>
                    <button  className={styles.custom_btn+" mm-secondary-button-regular "}>{props.content?.button?.text??" "}</button>
                </Link>
                }
            </div>
        </>
    )
}
export default GenericMarkdownBlock