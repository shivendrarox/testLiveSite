import React from 'react';

import styles from '../../comparison.module.scss';import Link from 'next/link'
import GoogleSignupButton from "../GoogleButton/index";
import SignupButton from "../SignupButton/index";
import { getImageUrl } from '../../../../lib/strapiApi'

const Compare = (props) => {
    return (
        <>
        <div style={{backgroundColor:"#FFF9F2"}} className={styles.spacing+" "+styles.Compare}>
        
        <h2 className={styles.heading}>{props.content?.title??" "}</h2>
        <p className={styles.desc}>{props.content?.subTitle??" "}</p>
        
        <div className={styles.table_cont}>
        <table className={styles.table_class}>
                <thead>
                    <tr>
                        <th className={styles.col1+" "+styles.col_each} ></th>
                        <th className={styles.col2+" "+styles.col_each} ></th>
                        <th  className={styles.col3} ><img className={styles.table_img} src="/static/images/strapi-pages/comparison/mm.svg"></img></th>
                        <th  className={styles.col3}><img className={styles.table_img} src={getImageUrl( props.CompetitorLogo?.url??" ")}></img></th>
                    </tr>
                </thead>

                {props.content.blocks.map((tbody_item)=>{
                    return(
                        <>
                        <tbody className={styles.blank_row}>            
                            <tr> <td className={styles.col1+" "+styles.col_each}></td><td className={styles.col2+" "+styles.col_each}></td><td></td><td></td></tr>
                        </tbody>

                        <tbody className={styles.highlight_row}>
                            
                        {tbody_item.items.map((row_item,index)=>{
                                    return(
                                        <>
                                         <tr style={{backgroundColor:"white"}} >
                                            <td className={styles.col1+" "+styles.col_each}>{(index===0)?tbody_item.title??"":""}</td>
                                            <td className={styles.col2+" "+styles.col_each}>{row_item.title??""}</td>
                                            <td className={styles.col3} ><img className={styles.signs} src={`/static/images/strapi-pages/comparison/${(row_item.mailmodo??false)?"tick":"cross"}.svg`}></img></td>
                                            <td className={styles.col3} ><img className={styles.signs} src={`/static/images/strapi-pages/comparison/${(row_item.competitor??false)?"tick":"cross"}.svg`}></img></td>
                                        </tr> 
                                        </>
                                    )
                                })}

                        </tbody>
                        </>
                    )
                })}

    
            </table>
        
        </div>
   

            <p  className={" "+styles.table_footer}>*The comparison table is based on the most recommended plan of each platform. </p>
        </div>
       
        </>
    )
}

export default Compare;