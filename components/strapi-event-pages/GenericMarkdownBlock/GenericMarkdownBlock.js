import React from 'react';
import { getImageUrl } from '../../../lib/strapiApi';
import styles from '../features.module.scss';
import marked from 'marked'
import Link from 'next/link'

const GenericMarkdownBlock = (props) => {
    // console.log(props)
    return (
        <>
            <div style={{ backgroundColor: props.content.backgroundColor?? "rgba(239, 255, 244, 1)" }} className={styles.generic_md_block_section + " "}>
                <div className="container">
                    {props.content.title && <div className={styles.heading + " "}  dangerouslySetInnerHTML={{ __html: marked(props.content?.title??" ") }}></div>}
                    {/* <div className="layout-padding"></div> */}

                    <div className="row mt-4">

                        <div className={`${props.content?.image?'col-md-7  ':' col-md-12 align-self-center '} ${(props.content.imagePosition=='Right')?' order-sm-1 ':' order-sm-12 '}`}>
                            
                            <div  className={styles.md_content} dangerouslySetInnerHTML={{ __html: marked(props.content?.content??" ") }}></div>

                        </div>

                        {props.content?.image && <div  className={`col-md-5 align-self-center ${(props.content.imagePosition=='Right')?' order-sm-12 ':' order-sm-1 '}`}>
                            {/* Logic for margin adjustments on image postion */}
                            <figure>
                            { <img alt={props.content?.image?.caption??" "}  src={getImageUrl(props.content.image?.url ?? "No Image Url")} className={styles.strapi_image}></img>}

                                {props.content.image.caption && <figcaption className={styles.fig_caption}><em>{props.content.image.caption??" "}</em></figcaption>}
                            </figure>

       
                        </div>}

                    </div>

                </div>
                { props.content?.button &&
                <Link href={props.content?.button?.link??" "}>
                    <button  className={styles.custom_btn}>{props.content?.button?.text??" "}</button>
                </Link>
                }
            </div>
        </>
    )
}
export default GenericMarkdownBlock