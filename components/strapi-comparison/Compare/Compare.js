import React from 'react';

import styles from '../comparison.module.scss'
import Link from 'next/link'
import GoogleSignupButton from "../GoogleButton/index";
import SignupButton from "../SignupButton/index";
import { getImageUrl } from '../../../lib/strapiApi'

const Compare = (props) => {
    return (
        <>
        <div style={{backgroundColor:"#FFF9F2"}} className={styles.spacing+" "+styles.Compare}>
        
        <h2 className={styles.heading}>Feature wise comparison</h2>
        <p className={styles.desc}>As much as we'd like to be your marketing partner, we want nothing but to see you get the best results. It's okay if we're not the right choice for you. So here's a fair comparison of Mailmodo and Mailchimp  </p>
        
        <div className={styles.table_cont}>
        <table className={styles.table_class}>
                <thead>
                    <tr>
                        <th className={styles.col1+" "+styles.col_each} ></th>
                        <th className={styles.col2+" "+styles.col_each} ></th>
                        <th  className={styles.col3} ><img title="logo" alt="logo svg file" className={styles.table_img} src="/static/images/strapi-pages/comparison/mm.svg"></img></th>
                        <th  className={styles.col3}><img title="logo" alt="logo svg file" className={styles.table_img} src="/static/images/strapi-pages/comparison/MC.svg"></img></th>
                    </tr>
                </thead>
                {true &&
                <tbody className={styles.blank_row}>            
                 <tr> <td className={styles.col1+" "+styles.col_each}></td><td className={styles.col2+" "+styles.col_each}></td><td></td><td></td></tr>
                </tbody>}
                <tbody className={styles.highlight_row}>
                    
                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}>Email creation</td>
                        <td className={styles.col2+" "+styles.col_each}>No code (drag and drop) AMP email editor</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        
                    </tr>
                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>No code (drag-and-drop) HTML email editor</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        
                    </tr>
                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Supports sending of AMP email</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Personalization in emails</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>
                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Importing custom-coded email templates</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Emails with forms that can be filled inside the email</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        
                    </tr>
                    
                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>If/else logical questions inside email forms</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        
                    </tr>

                </tbody>

                {true &&
                <tbody className={styles.blank_row}>            
                 <tr> <td className={styles.col1+" "+styles.col_each}></td><td className={styles.col2+" "+styles.col_each}></td><td></td><td></td></tr>
                </tbody>}
                <tbody className={styles.highlight_row}>
                    
                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}>A/B testing</td>
                        <td className={styles.col2+" "+styles.col_each}>A/B testing subject line</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>A/B testing content</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>A/B testing for name</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>
                    
                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>A/B testing send time</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>

                </tbody>

                {true &&
                <tbody className={styles.blank_row}>            
                 <tr> <td className={styles.col1+" "+styles.col_each}></td><td className={styles.col2+" "+styles.col_each}></td><td></td><td></td></tr>
                </tbody>}

                <tbody className={styles.highlight_row}>
                    
                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}>Email sending and deliverability</td>
                        <td className={styles.col2+" "+styles.col_each}>SMTP preferences available</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}> </td>
                        <td className={styles.col2+" "+styles.col_each}>Whitelisting assistance for AMP email</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}> </td>
                        <td className={styles.col2+" "+styles.col_each}>Dedicated IP address</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}> </td>
                        <td className={styles.col2+" "+styles.col_each}>IP and domain warm-up</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}> </td>
                        <td className={styles.col2+" "+styles.col_each}>Add your own custom domains</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}> </td>
                        <td className={styles.col2+" "+styles.col_each}>Email validating</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Time zone sending</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Sub user management</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                    </tr>

                </tbody>
            
             
                {true &&
                <tbody className={styles.blank_row}>            
                 <tr> <td className={styles.col1+" "+styles.col_each}></td><td className={styles.col2+" "+styles.col_each}></td><td></td><td></td></tr>
                </tbody>}

                <tbody className={styles.highlight_row}>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}>Contact management </td>
                        <td className={styles.col2+" "+styles.col_each}>Unlimited free upload of contacts</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}> </td>
                        <td className={styles.col2+" "+styles.col_each}>Segmentation and filtering of contacts</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}> </td>
                        <td className={styles.col2+" "+styles.col_each}>Advanced segmentation</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>

                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}> </td>
                        <td className={styles.col2+" "+styles.col_each}>Unlimited filtering</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>

                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}> </td>
                        <td className={styles.col2+" "+styles.col_each}>Unlimited number of audience of contact lists</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>

                    </tr>
                    
                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}> </td>
                        <td className={styles.col2+" "+styles.col_each}>Suppression management</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>

                    </tr>

                </tbody>
    
               
                {true &&
                <tbody className={styles.blank_row}>            
                 <tr> <td className={styles.col1+" "+styles.col_each}></td><td className={styles.col2+" "+styles.col_each}></td><td></td><td></td></tr>
                </tbody>}

                <tbody className={styles.highlight_row}>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}>Transactional emails & workflows</td>
                        <td className={styles.col2+" "+styles.col_each}>Trigger based email campaigns </td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>

                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Trigger based email campaigns </td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>API email triggers</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Webhook triggers</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>CRM and app-based triggers</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Email automation sequences</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Visual email automation builder</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Conditional logic in email sequence</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>

                </tbody>
    
                {true &&
                <tbody className={styles.blank_row}>            
                 <tr> <td className={styles.col1+" "+styles.col_each}></td><td className={styles.col2+" "+styles.col_each}></td><td></td><td></td></tr>
                </tbody>}

                <tbody className={styles.highlight_row}>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}>Integrations</td>
                        <td className={styles.col2+" "+styles.col_each}>Integration with Shopify for e-commerce</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>

                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Integration with Magento, WooCommerce</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>

                    </tr>
                    
                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Integration with Zapier</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>

                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Integration with Hubspot CRM</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>

                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Integration with website builders</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>

                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Integration with marketing analytics tools</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>

                    </tr>
                </tbody>

                {true &&
                <tbody className={styles.blank_row}>            
                 <tr> <td className={styles.col1+" "+styles.col_each}></td><td className={styles.col2+" "+styles.col_each}></td><td></td><td></td></tr>
                </tbody>}

                <tbody className={styles.highlight_row}>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}>Additional marketing features</td>
                        <td className={styles.col2+" "+styles.col_each}>Landing page builder</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>

                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Signup form builder for client’s webpage.</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Forms inside emails</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        
                    </tr>
    
                </tbody>
              
                {true &&
                <tbody className={styles.blank_row}>            
                 <tr> <td className={styles.col1+" "+styles.col_each}></td><td className={styles.col2+" "+styles.col_each}></td><td></td><td></td></tr>
                </tbody>}

                <tbody className={styles.highlight_row}>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}>Support</td>
                        <td className={styles.col2+" "+styles.col_each}>Email and Chat Support</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        
                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Phone Support</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>

                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Chatbot support</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>

                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Ticket support</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>

                    </tr>

                    <tr style={{backgroundColor:"white"}} >
                        <td className={styles.col1+" "+styles.col_each}></td>
                        <td className={styles.col2+" "+styles.col_each}>Knowledge center</td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>
                        <td className={styles.col3} ><img title="table mark" alt="table mark svg" className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img></td>

                    </tr>
    
                </tbody>
 
            </table>
        
        </div>
   

            <p  className={" "+styles.table_footer}>*The comparison table is based on the most recommended plan of each platform. </p>
        </div>
       
        </>
    )
}

export default Compare;