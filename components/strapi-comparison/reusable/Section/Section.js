import React from 'react';
import { getImageUrl } from '../../../../lib/strapiApi';
import styles from '../../comparison.module.scss';
const Section = (props) => {
    return (
        <>
            <div style={{ backgroundColor: props.content.backgroundColor?? "#FFFF" }} className={styles.section + " "}>
                <div className="container">
                    {props.content.title && <h2 className={styles.heading + " "}>{props.content.title??" "}</h2>}

                    <div className="row mt-4">

                        <div className={`col-md-6 ${(props.content.imagePosition=='Right')?' order-sm-1 ':' order-sm-12 '}`}>

                            { <h3 className={styles.title + " mt-5 mb-5"}>{props.content.subTitle??"No Content"}</h3>}

                            {props.content.features.map(element => {
                                return (<>
                                    <h4 className={styles.desc_title + " my-1"}>{element.title??"No Content"}</h4>
                                    <p className={styles.desc + " my-4"}>{element.description??"No Content"}</p>
                                </>)
                            })}

                        </div>

                        <div className={`col-md-6 ${(props.content.imagePosition=='Right')?' order-sm-12 ':' order-sm-1 '}`}>
                            { <img src={getImageUrl(props.content.image?.url ?? "No Image Url")} className={styles.image}></img>}

       
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
export default Section