import React from 'react';

import styles from '../comparison.module.scss'
import Link from 'next/link'
import GoogleSignupButton from "../GoogleButton/index";
import SignupButton from "../SignupButton/index";
import { getImageUrl } from '../../../lib/strapiApi'
import BlackCta from '../BlackCta/BlackCta';

const Verdict = (props) => {

    return (
        <>
            <div style={{ backgroundColor: "#ffff" }} className={styles.spacing+" "+styles.Verdict}>
                <h2>When to choose which - Mailmodo vs Mailchimp</h2>
                <p className={styles.desc}>
                Mailchimp has been around for far longer than us and they've definitely nailed some features and have been adding a lot more. Mailmodo comes with a slightly different value proposition. Here's a fair assessment of which platform serves best when.
                </p>

                <div className="container">
                    <div className="row">
                        <div className={styles.left + " col-md-6"}>
                            <img src="/static/images/strapi-pages/comparison/mm.svg" className={styles.compare_img}></img>

                            <ul className={styles.compare_list}>
                                <li>
                                You want to centralize all your email marketing efforts through a single tool complete with integrations to your system.                                </li>
                                <li>
                                Mailmodo fits you better if you are looking for a host of email marketing features (like bulk emailing, email automation, transactional emails and more) all packed into one.                                 </li>
                                <li>
                                You want to send interactive and dynamic AMP emails.
                                </li>
                                <li>
                                You have several and growing lists of subscribers.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.right + " col-md-6"}>
                            <img src="/static/images/strapi-pages/comparison/MC.svg" className={styles.compare_img}></img>

                            <ul className={styles.compare_list}>
                                <li>
                                If you're looking for an all-in-one marketing platform, CRM, landing page builder, etc. Mailchimp is your best bet.                                </li>
                                <li>
                                You have a limited contact list or can spend more marketing dollars as your list grows.                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <BlackCta btn_text={`Sign up for FREE`} text={`Both Mailchimp and Mailmodo have a four tiered pricing system including the free version. Most of Mailmodo's features are available in the free version too though, if you want to explore our platform. `} />
            </div>
        </>
    )

}

export default Verdict;