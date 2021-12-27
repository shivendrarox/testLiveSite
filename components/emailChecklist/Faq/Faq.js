import React, { useState, useContext } from 'react';
import styles from '../features.module.scss';

import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';


const Faq=(props)=>{
    return(
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.Faq+" "}>
            {/* <h2 className={styles.heading+" mt-2"}>FAQ</h2> */}
            {/* {false && <p className={styles.desc+" mt-4 mb-3"}>Lorem ipsum doler amiti ukhdf oijoiejwo ikpp posodjf</p>} */}
            <div className="container mt-5">
                    {/* <Button color="link" className={styles.accord_btn} id={"toggle" + 0} style={{ marginBottom: '0rem' }}>
                        <ul><li>Why should I read this ebook?</li></ul>
                    </Button>
                    <UncontrolledCollapse toggler={"#toggle" + 0}>
                        <Card className={styles.accord_card}>
                            <CardBody>
                                <p>
                                Imagine fixing your car. The first step is to do a thorough check-up and then diagnose the problem of why your car isn’t working. As they say, the identification of the problem is where the real battle lies. Once you have diagnosed this, the next natural step is to troubleshoot it. 
This is a book about the nitty-gritty of email marketing, email analytics and how it ties to the real-life growth numbers of the business and most importantly or how to use these details to derive actionable insights.
                                </p>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse> */}
                    <Button color="link" className={styles.accord_btn} id={"toggle" + 0} style={{ marginBottom: '0rem' }}>
                        <ul><li>What can you expect?</li></ul>
                    </Button>
                    <UncontrolledCollapse defaultOpen={true} toggler={"#toggle" + 0}>
                        <Card className={styles.accord_card}>
                            <CardBody>
                                <p>
                                Marketers know that emails in the primary inbox enjoy better open rates than in the promotions or updates tabs. Most of the techniques in this e-book provide the dual benefit of personalizing the email experience and making your mail more relevant to the user as well as avoiding promotion or updates tabs.
                                </p>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse> 

                    {/* <Button color="link" className={styles.accord_btn} id={"toggle" + 1} style={{ marginBottom: '0rem' }}>
                        <ul><li>Do you have an excerpt?</li></ul>
                    </Button>
                    <UncontrolledCollapse defaultOpen={true} toggler={"#toggle" + 1}>
                        <Card className={styles.accord_card}>
                            <CardBody>
                                <p>
                                Obviously, emails in the primary inbox enjoy better open rates than in the promotions or updates tabs. Here are some suggestions to land in the primary inbox. Most of these techniques provide the dual benefit of personalizing the email experience and making your mail more relevant to the user as well as avoiding promotion or updates tabs.
                                </p>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse> */}

                    <Button color="link" className={styles.accord_btn} id={"toggle" + 2} style={{ marginBottom: '0rem' }}>
                        <ul><li>Who created this e-book?</li></ul>
                    </Button>
                    <UncontrolledCollapse defaultOpen={true} toggler={"#toggle" + 2}>
                        <Card className={styles.accord_card}>
                            <CardBody>
                            <p>
                            This e-book is produced by Mailmodo. We are also grateful to all the subject matter experts, email geeks, and digital marketing specialists who helped us with ideas, surveys, their experiences and valuable industry insights.
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

