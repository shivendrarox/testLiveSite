import React from 'react';
import { getImageUrl } from '../../../lib/strapiApi';
import styles from '../features.module.scss';
import marked from 'marked'

const GenericBlock = (props) => {
    return (
        <>
            <div style={{ backgroundColor: props.content.backgroundColor?? "#FFFF" }} className={styles.generic_box + " "}>
                <div className="container">
                    {props.content.title && <h2 className={styles.heading + " "}>{props.content.title??" "}</h2>}
                    {props.content.subTitle && <h3 className={styles.title + " "}>{props.content.subTitle??" "}</h3>}

                    <div className="row mt-4">
                        <div className="col-md-12 align-self-center ">
                            <div className={" "+styles.content+" "+styles.matter_block} dangerouslySetInnerHTML={{ __html: marked(props.content?.content??" ") }}></div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export default GenericBlock