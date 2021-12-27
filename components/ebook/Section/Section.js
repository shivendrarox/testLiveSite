import React from 'react';
import { getImageUrl } from '../../../lib/strapiApi';
import styles from '../features.module.scss';
import Image from  'next/image'

const myLoader = ({ src, width, quality="50" }) => {// default quality 50%
  let newSrc= src.replace('.jpg','.webp')
      newSrc= newSrc.replace('.png','.webp')

  return `https://res.cloudinary.com/mailmodo/image/upload/q_${quality}/v1628497684/strapi/${newSrc}`
}


const Section = (props) => {
    return (
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.section+" "}>
            <div className="container">
            <h2 className={styles.heading + " "}>What does this e-book contain?</h2>
                <div className="row mt-4">

                    <div className="col-md-6  ">

                            <p className={styles.desc+" my-4"}>
                                <ul>
                                    <li>
                                        <div className={styles.custom_li}>
                                            <img className={styles.marker_img} src="/static/images/strapi-pages/comparison/tick.svg">
                                            </img>
                                            <p>
                                            A 3-step framework to turn generic best practice tips into subject line ideas that deliver higher CTRs.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                    <div className={styles.custom_li}>
                                            <img className={styles.marker_img} src="/static/images/strapi-pages/comparison/tick.svg">
                                            </img>
                                            <p>
                                            Tips from email marketers and copywriters on developing a process for optimizing your subject line testing processes.
                                            </p>
                                    </div>
                                    </li>
                                    <li>
                                    <div className={styles.custom_li}>
                                            <img className={styles.marker_img} src="/static/images/strapi-pages/comparison/tick.svg">
                                            </img>
                                            <p>
                                            Discussions on how to craft email subject lines that are irresistibly clickable supported by findings from our subject line experiment.
                                            </p>
                                    </div>
                                    </li>
                                </ul>
                            </p>
                                            
                    </div>

                    <div className="col-md-6 ">
                        <Image
                        layout="responsive"
                        width={595}
                        height={458}
                        placeholder="blur"
                        blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkUAYAACkAJdigItYAAAAASUVORK5CYII=`}
                        loader={myLoader}
                        src={"/uploads/Page_43_90c9f9666f.png"}
                        />
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}
export default Section