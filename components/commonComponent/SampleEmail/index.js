import React, { useState } from 'react'
import axios from 'axios'

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
        url: 'https://685461e5bbc4215a56f9256abcb695dc.m.pipedream.net',
        data: {
          campaignId,
          email,
          usecase,
        },
      })
      setIsEmailSent(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="test-mail-container">
        <input
          className="test-mail-input"
          onChange={(e) => {
            setIsEmailSent(false)
            setIsEmailValid(true)
            setEmail(e.target.value)
          }}
          placeholder="Enter Your Email"
        />
        {!isEmailValid && (
          <div className="message">Please enter valid email</div>
        )}
        {isEmailSent && (
          <div className="message-success">Email sent successfully!</div>
        )}
        <br />
      </div>
      <button id={trackingId} onClick={() => sendTestMail()} className="button-signup btn">
        Send me a sample email
      </button>
    </>
  )
}

export default SampleEmail
