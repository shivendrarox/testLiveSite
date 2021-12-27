import React from 'react';
import styles from '../features.module.scss';
import Image from 'next/image'
const Testimonial=(props)=>{

    return(
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.Testimonial+" "}>
          {props.content.title &&  <h2 className={styles.heading+" mm-h2"}>{props.content.title}</h2>}

            {<p className={styles.desc+" mm-h6"}>{props.content?.subTitle??" "}</p>}

            <div className={styles.card_container}>
            
            {props.content?.testimonials?.map((item)=>{
                return (
                    <>
                    <div className={styles.card_item}>
                                            <div className={styles.brand_image}>
                                                        {item.brand_logo?.url&&<Image
                                                            alt = "brand image"
                                                            layout="fixed"
                                                            height={item.brand_logo?.height}
                                                            width={item.brand_logo?.width}
                                                            src={item.brand_logo.url}
                                                        />}
                                            </div>        
                                            {item.title &&
                                            <h3 className="mm-subtitle-1">
                                                {item.title}
                                            </h3>
                                            }        
                                            {item.description &&
                                                    <p className="mm-body-1" >
                                                            {item.description}
                                                        </p>
                                                        }
                                                        <div className={styles.bio_section}>
                                                            <div className={styles.image_section}>
                                                                {item.image?.url &&
                                                                <Image
                                                                    alt = "bio image"
                                                                height="70"
                                                                width="70"
                                                                    src={(item.image.url)}
                                                                />
                                                                }
                                                            </div>
                                                            <div className={styles.details}>
                                                                {item.name && <p className={styles.heading+" mm-subtitle-1 "}>{item.name}</p>}
                                                                {item.designation && <p className={styles.desc+" mm-body-1 "}>{item.designation}</p>}
                                                            </div>
                                                        </div>
                                            </div>
                    </>
                )
            })}

            </div>

        </div>
        </>
    )
}
export default Testimonial;