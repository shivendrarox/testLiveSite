import React, { useState, useContext } from 'react';
import styles from '../features.module.scss';

import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';


const Faq=(props)=>{
    return(
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.Faq+" "}>
            <div className="layout-gap"></div>
            <h2 className={styles.heading+" "}>FAQ</h2>
            {/* {false && <p className={styles.desc+" mt-4 mb-3"}>Lorem ipsum doler amiti ukhdf oijoiejwo ikpp posodjf</p>} */}
            <div className="layout-padding"></div>
            <div className="container">
                    <Button color="link" className={styles.accord_btn} id={"toggle" + 0} style={{ marginBottom: '0rem' }}>
                        <ul><li>Why should I read this subject line ebook?</li></ul>
                    </Button>
                    <UncontrolledCollapse toggler={"#toggle" + 0}>
                        <Card className={styles.accord_card}>
                            <CardBody>
                            <p>Fascination with email open rates is understandable- after all, if an email is not opened, it’s not going to get you any results whatsoever.</p>
<p>But we believe that email open rates are only part of the picture.</p>
<p>Laser-sharp focus on making email subject lines irresistibly clickable leads to misuse of best practices, and inboxes full of similar-looking, clickbait-y, best-practice-approved subject lines. After all, if you found that info online, it means that your competitors found it, too.</p>
<p>Best-case scenario: you send out emails with subject lines that don’t stand out one way or another, and get good-enough open rates and click-through rates.</p>
<p>Worse-case scenario: your over-optimized email subject lines backfire, and your CTRs sink to the all-time low, because they don’t match the email content (possibly leading to more unsubscribes on top of low CTRs). As you’ll see in our email subject line experiment, sometimes clever is much worse than clear.</p>
<p>An antidote to this sea of sameness or a wave of unsubscribes is focusing on the context and constantly optimizing your subject lines based on what works for a specific audience.</p>
<p>In this guide, we’ll walk you through a process that’ll help you focus on implementing best practices deliberately and strategically- so that you find the subject lines that get the results that you need.</p>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>

                    <Button color="link" className={styles.accord_btn} id={"toggle" + 1} style={{ marginBottom: '0rem' }}>
                        <ul><li>Do you have an excerpt from this subject line ebook?</li></ul>
                    </Button>
                    <UncontrolledCollapse toggler={"#toggle" + 1}>
                        <Card className={styles.accord_card}>
                            <CardBody>
                            
<p>Email subject lines best practices are awesome. Until they aren’t.<br/>
A Google search for “email subject lines” will bring up 968,000,000 results, including best practices, best subject lines to improve open rates, and tips for creating the best subject lines.<br/>
Awesome!<br/>
Except for the information overload that’ll inevitably follow reading through all of those posts and trying to figure out how they apply to your brand and your audience.</p>


                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>

                    <Button color="link" className={styles.accord_btn} id={"toggle" + 2} style={{ marginBottom: '0rem' }}>
                        <ul><li>Who created this ebook?</li></ul>
                    </Button>
                    <UncontrolledCollapse toggler={"#toggle" + 2}>
                        <Card className={styles.accord_card}>
                            <CardBody>
                            <p>
                            This ebook is produced by Mailmodo and <a href="https://pinwheeltrans.com/">Ekaterina Howard</a>, a conversion copywriter and strategist We are also grateful to all the subject matter experts, email geeks, and digital marketing specialists who helped us with ideas, surveys, and valuable industry insights.
                            </p>

                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>

            </div>

        </div>
        </>
    )
}

export default Faq

