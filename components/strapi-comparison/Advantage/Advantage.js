import styles from '../comparison.module.scss'
import React, { useState } from 'react';
import { getImageUrl } from '../../../lib/strapiApi';

const Advantage = (props) =>{
    return(
        <>
        <div style={{backgroundColor:"#FFF9F2"}} className={styles.spacing+" "+styles.Advantage}>

        <h2 className={styles.heading}>What all you get with Mailmodo</h2>
        <p className={styles.desc}>We stand apart in some of our features which has our customers picking Mailmodo as the best Mailchimp alternative. (Feature list instead of the table)</p>
        
        <div className={styles.table_cont}>
        <table className={styles.table_class}>
                <thead>
                    <tr>
                        <th className={styles.col1+" "+styles.col_each} ></th>
                        <th className={styles.col2+" "+styles.col_each} ><img className={styles.table_img} src="/static/images/strapi-pages/comparison/mm.svg"></img></th>
                        <th className={styles.col3+" "+styles.col_each} ><img className={styles.table_img} src="/static/images/strapi-pages/comparison/MC.svg"></img></th>
                    </tr>
                </thead>

                <tbody className={styles.blank_row}>
                {true && <tr><td></td><td></td><td></td></tr>}
                </tbody>
                <tbody className={styles.highlight_row}>
                    
                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}>AMP Emails</td>
                        <td className={styles.col2+" "+styles.col_each}> <p className={""}>No code AMP email creation and sending</p> </td>
                        <td className={styles.col3+" "+styles.col_each}> <p className={""}>AMP email not supported</p> </td>
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}>Transactional emails</td>
                        <td className={styles.col2+" "+styles.col_each}> <p className={""}>Available on all plans</p> </td>
                        <td className={styles.col3+" "+styles.col_each}> <p className={""}>Available only as a paid add-on</p> </td>
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}>Phone support</td>
                        <td className={styles.col2+" "+styles.col_each}> <p className={""}>Unlimited contact list</p> </td>
                        <td className={styles.col3+" "+styles.col_each}> <p className={""}>No restictions on number of contacts or audience lists</p> </td>
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}>Available on all plan</td>
                        <td className={styles.col2+" "+styles.col_each}> <p className={""}>Different contact list slabs for each plan and limited number of audience list </p> </td>
                        <td className={styles.col3+" "+styles.col_each}> <p className={""}>Available only on premium plan</p> </td>
                    </tr>
                    
                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}>Custom template import</td>
                        <td className={styles.col2+" "+styles.col_each}> <p className={""}>Available on all plans</p> </td>
                        <td className={styles.col3+" "+styles.col_each}> <p className={""}>Available only above standard plan</p> </td>
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}>Monthly send limit</td>
                        <td className={styles.col2+" "+styles.col_each}> <p className={""}>150,000 sending limits/month on basic plan</p> </td>
                        <td className={styles.col3+" "+styles.col_each}> <p className={""}>10,000 emails/month on free plan, 10x, 12x and 15x times the contact list for the higher ones.</p> </td>
                    </tr>

                </tbody>

        
            </table>
        
        </div>
   

        {/* <p  className={" "+styles.table_footer}>*The comparison table is based on the most recommended plan of each platform. </p> */}
        
        </div>
        </>
    )
}

export default Advantage;