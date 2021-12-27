import React from 'react';

import styles from '../comparison.module.scss'
import Link from 'next/link'
import GoogleSignupButton from "../GoogleButton/index";
import SignupButton from "../SignupButton/index";
import { getImageUrl } from '../../../lib/strapiApi'
import BlackCta from '../BlackCta/BlackCta';

const Advantages = (props) => {

    return (
        <>
            <div style={{ backgroundColor: "#ffff" }} className={styles.Advantages}>
                <h2> What can you do with Mailmodo but not with Mailchimp </h2>
                <p className={styles.desc}>
                    Mailchimp has been around for far longer than us and they've definitely nailed some features and have been adding a lot more. Here's a fair comparison of our offerings to help you make a final decision.
                 </p>

                <div className="container">
                    <table className={styles.table_class}>
                        <thead>
                            <tr>
                            <th style={{width:"50%"}}><img className={styles.table_img} src="/static/images/strapi-pages/comparison/mm.svg"></img></th>
                            <th style={{width:"50%"}}><img className={styles.table_img} src="/static/images/strapi-pages/comparison/mm.svg"></img></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>                      
                            <td><div className={styles.flex_container}><img className={styles.signs} src="/static/images/strapi-pages/comparison/tick.svg"></img><p className={styles.tick_p}>Mailchimp pricing plans come with contact list slabs, which makes it restrictive and complicated as you grow.</p></div></td>
                            <td><div className={styles.flex_container}><img className={styles.signs} src="/static/images/strapi-pages/comparison/cross.svg"></img><p className={styles.cross_p}>Mailchimp pricing plans come with contact list slabs, which makes it restrictive and complicated as you grow.</p></div></td>
                            </tr>
                    
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )

}

export default Advantages;