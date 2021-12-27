import React, { useState, useContext } from 'react';
import styles from '../type1.module.scss';

import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';


const Faq=(props)=>{
  
    return(
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.Faq+" "}>
            <h2 className={styles.heading+" mt-2"}>FAQ</h2>
            {false && <p className={styles.desc+" mt-4 mb-3"}>Lorem ipsum doler amiti ukhdf oijoiejwo ikpp posodjf</p>}
            <div className="container mt-5">
            <Button color="link" className={styles.accord_btn}  id="toggler" style={{ marginBottom: '0rem' }}>
               <img src="/static/images/type1/left.svg"></img> What is AMP email?
            </Button>
            <UncontrolledCollapse toggler="#toggler">
            <Card className={styles.accord_card}>
                <CardBody>
AMP Email is a framework created by Google that allows emails to render and display dynamic elements like accordions, carousels, forms, calendars, shopping carts, dynamic APIs, etc. within the mail-body. It creates a mini-website inside an email.
                </CardBody>
            </Card>
            </UncontrolledCollapse>

            <Button color="link" className={styles.accord_btn} id="toggle2" style={{ marginBottom: '0rem' }}>
                <img src="/static/images/type1/left.svg"></img> Are there any limitations of AMP emails?
            </Button>
            <UncontrolledCollapse toggler="#toggle2">
            <Card className={styles.accord_card}>
                <CardBody>
                AMP emails are just like any other emails except the fact that they come with a number of superpowers and don't render in every email client at present. There aren't any other limitations.
                </CardBody>
            </Card>
            </UncontrolledCollapse>

            <Button color="link" className={styles.accord_btn} id="toggle3" style={{ marginBottom: '0rem' }}>
                <img src="/static/images/type1/left.svg"></img> Which email clients support AMP for Email?
            </Button>
            <UncontrolledCollapse toggler="#toggle3">
            <Card className={styles.accord_card}>
                <CardBody>
At present, AMP is supported by Gmail, GSuite, Yahoo and Mail.ru. When a user's email client doesn't support AMP emails, the recipient will be able to see plain HTML email which we provide options for.
                </CardBody>
            </Card>
            </UncontrolledCollapse>

            <Button color="link" className={styles.accord_btn} id="toggle4" style={{ marginBottom: '0rem' }}>
                <img src="/static/images/type1/left.svg"></img>  How does Mailmodo help in sending actionable AMP emails?
            </Button>
            <UncontrolledCollapse toggler="#toggle4">
            <Card className={styles.accord_card}>
                <CardBody>
Mailmodo helps you and other marketers create actionable AMP emails without any coding knowledge. You just have to drag and drop blocks and edit them as per your needs. We also help you to send any number of emails using your own or our SMTP.                </CardBody>
            </Card>
            </UncontrolledCollapse>
            </div>

        </div>
        </>
    )
}

export default Faq

