import styles from '../../comparison.module.scss';import React, { useState } from 'react';
import { getImageUrl } from '../../../../lib/strapiApi';

const Advantage = (props) =>{
    return(
        <>
        <div style={{backgroundColor:"#FFF9F2"}} className={styles.spacing+" "+styles.Advantage}>

        <h2 className={styles.heading}>{props.content?.title??""}</h2>
        <p className={styles.desc}>{props.content?.subTitle??"`"}</p>
        
        <div className={styles.table_cont}>
        <table className={styles.table_class}>
                <thead>
                    <tr>
                        <th className={styles.col1+" "+styles.col_each} ></th>
                        <th className={styles.col2+" "+styles.col_each} ><img className={styles.table_img} src="/static/images/strapi-pages/comparison/mm.svg"></img></th>
                        <th className={styles.col3+" "+styles.col_each} ><img className={styles.table_img} src={getImageUrl(props.CompetitorLogo?.url??" ")}></img></th>
                    </tr>
                </thead>
                <tbody className={styles.blank_row}>
                     <tr><td></td><td></td><td></td></tr>
                </tbody>
  
                            <tbody className={styles.highlight_row}>
                            {props.content?.GetItem?.map((item)=>{
                            return (
                                <>
                                    <tr style={{backgroundColor:"white"}} >
                                        <td className={styles.col1+" "+styles.col_each}>{item.title??""}</td>
                                        <td className={styles.col2+" "+styles.col_each}> <p className={""}>{item.mailmodo}</p> </td>
                                        <td className={styles.col3+" "+styles.col_each}> <p className={""}>{item.competitor}</p> </td>
                                    </tr>
                                 </>
                                )
                            })}
                            </tbody>
    
            </table>
        
        </div>
   

        {/* <p  className={" "+styles.table_footer}>*The comparison table is based on the most recommended plan of each platform. </p> */}
        
        </div>
        </>
    )
}

export default Advantage;