  
import React, { useState } from 'react'
import axios from 'axios'
import styles from '../../../assets/newsletter/newsletter-slug-redesign.module.scss'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {  notification } from 'antd';
import { message } from 'antd';

const openNotification = (placement,msg,desc) => {
  notification.info({
    message: msg,
    description:desc,
    placement,
  });
};

const SampleEmail = ({ trackingId,campaignId, usecase }) => {
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const sendTestMail = async () => {
    if (!regex.test(email)) {
      console.log('regex', regex.test(email))
      setIsEmailValid(false)
      return
    }

    try {
      const response = await axios({
        method: 'POST',
        url: 'https://api.mailmodo.com/api/v1/at/c/uRySaYGSVz/e9d47c43-8c59-5f7c-bae6-e9d2ef0b7d23',
        data: {
          email,
        },
      })
      setIsEmailSent(true)
      analytics.track('Newsletter Subscribed', {
        email:email,
        location:trackingId,
      });
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
        <input
          className={styles.cta_input+" "}
          onChange={(e) => {
            setIsEmailSent(false)
            setIsEmailValid(true)
            setEmail(e.target.value)
          }}
          placeholder="Your email address"
        />
      <button id={trackingId} onClick={() => sendTestMail()} className={styles.cta_btn}>
      Subscribe
      </button>
      {!isEmailValid && (
          // <div className={styles.message}>Please enter a valid email</div>
          message.error({className:styles.ant_custom_message ,content:'Please enter a valid email'})
        )}
        {isEmailSent && (
          message.success({
            className: styles.ant_custom_message,
            content:'Thank you for submitting the form. We will connect with you shortly'})
          // <div className={styles.message_success}>Thank you for submitting the form. We will connect with you shortly</div>
        )}
    </>
  )
}

export default SampleEmail;