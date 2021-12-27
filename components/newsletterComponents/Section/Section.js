import React from 'react';
import { getImageUrl } from '../../../lib/strapiApi'
import Image from 'next/image'
import styles from '../features.module.scss'

const myLoader = ({ src, width, quality }) => {
    return `https://mm-strapi-4.azurewebsites.net/${src}`
}


const Section = (props) => {
    return (
        <>
            <div style={{ backgroundColor: "#ffffff" }} className={styles.section + " "}>
                <div className="layout-gap"></div>
                <div className="container">
                    <h2 className={styles.heading + " "}>Here's what you'll read in the newsletter</h2>
                    <div className="layout-padding"></div>
                    <div className="row ">

                        <div className="col-md-12  align-self-center ">

                            <p className={styles.desc + " my-4"}>
                                <ul>
                                    <li>
                                        <div className={styles.custom_li}>
                                            {/* <img className={styles.marker_img} src="/static/images/strapi-pages/comparison/tick.svg">
                                            </img> */}
                                            <p className={styles.marker_img}>
                                            💌 
                                            </p>
                                            <p>
                                            Intriguing email guides written by us - with interesting insights
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.custom_li}>
                                            {/* <img className={styles.marker_img} src="/static/images/strapi-pages/comparison/tick.svg">
                                            </img> */}
                                            <p className={styles.marker_img}>
                                            📑
                                            </p>
                                            <p>
                                                 Hand-picked news and opinions on email from around the world
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.custom_li}>
                                            {/* <img className={styles.marker_img} src="/static/images/strapi-pages/comparison/tick.svg">
                                            </img> */}
                                            <p className={styles.marker_img}>
                                            🤓
                                            </p>
                                            <p>
                                                Expert insights from the #email-geeks
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.custom_li}>
                                            {/* <img className={styles.marker_img} src="/static/images/strapi-pages/comparison/tick.svg">
                                            </img> */}
                                            <p className={styles.marker_img}>
                                            🔥
                                            </p>
                                            <p>
                                                Hottest tweets, threads, and social media trends
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.custom_li}>
                                            {/* <img className={styles.marker_img} src="/static/images/strapi-pages/comparison/tick.svg">
                                            </img> */}
                                            <p className={styles.marker_img}>
                                            🙊
                                            </p>
                                            <p>
                                                Behind-the-scene growth hacks of Mailmodo 
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </p>

                        </div>

                        {/* <div className="col-md-6 align-self-center">
                            <Image
                                layout="responsive"
                                width={595}
                                height={458}
                                placeholder="blur"
                                blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkUAYAACkAJdigItYAAAAASUVORK5CYII=`}
                                loader={myLoader}
                                src={"/uploads/Page_43_90c9f9666f.png"}
                            />
                        </div> */}

                    </div>

                </div>
            </div>
        </>
    )
}
export default Section