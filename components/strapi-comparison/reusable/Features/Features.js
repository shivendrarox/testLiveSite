import React from 'react';
import { getImageUrl } from '../../../../lib/strapiApi';
import styles from '../../comparison.module.scss';
const Features = (props) => {
    //console.log(props.content)
    return (
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.spacing+" "+styles.features+" "}>
            <div className="container">
                <h2 className={styles.heading}> {props.content?.title??""}</h2>
                <p className={styles.desc+" mt-5"}>
                    {props.content?.subTitle??""}
                </p>
            
                <div className="row mt-5">

                {props.content.features.map(element=>{
                    return( 
                        
                        <div className="col-md-4 mt-5">
                            <img className={styles.card_img} src={getImageUrl(element?.image?.url??"")} ></img>
                            <h3 className={styles.card_h2+" mt-3"}>{element?.title??""}</h3>
                            <p className={styles.card_p+" mt-3"}>{element?.description??""}</p>
                        </div>
                    )
                })} 
                
                </div>

            </div>
        </div>
        </>
    )
}

export default Features;