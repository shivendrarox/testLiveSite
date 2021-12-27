  
import React, { useState } from 'react'
import axios from 'axios'
import styles from '../features.module.scss'
import { Modal, Button } from 'antd'
import 'antd/dist/antd.css';
import Image from 'next/image';


const SampleEmail = ({ eventName, location, btnText,title, urlsToCall }) => {
  const [btnLoading, setbtnLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const sendTestMail = async () => {
    setbtnLoading(true)
    if (!regex.test(email)) {
      console.log('regex', regex.test(email))
      setIsEmailValid(false)
      setbtnLoading(false)
      return
    }
    console.log(urlsToCall)

    try {
      if(!urlsToCall){
        urlsToCall=[
          'https://api.mailmodo.com/api/v1/at/c/PnHIG1txa6/8e7b535a-8993-588d-bc73-cdfa35507e62',
          'https://enmti55ea713lgq.m.pipedream.net/'

        ];
      }
      for (const url of urlsToCall) {
        const response = await axios({
          method: 'POST',
          url: url,
          data: {
            email,
          },
        })
      }
      
     
      setIsEmailSent(true)
      setIsModalVisible(true);
      setbtnLoading(false)
      analytics.track(eventName, { 
        title:title,
        email:email,
        location:location,
      });
    } catch (err) {
      setbtnLoading(false)
      console.log(err)
    }
  }

  // modal logics
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // Modal logics end

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
      <Button type="ghost" onClick={() => sendTestMail()}  className={styles.cta_btn} loading={btnLoading}  style={btnLoading?{"opacity":0.5,cursor:"default"}:{opacity:1,cursor:"pointer"}} >
        <div style={{display:"inline-block"}}>{btnText}</div>
         </Button>

      <Modal width={400} closable={false} footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div style={{display:"flex",justifyContent:"center"}}>
          <Image
          src="https://res.cloudinary.com/mailmodo/image/upload/v1632810447/strapi/success_secondary_e33377ffbc.svg"
          alt = "success image"
          height="90"
          width="90"
          />
        </div>
        <div className="layout-padding" ></div>
        <p style={{color: '#64748B',fontStyle: 'normal',fontWeight: 'bold',fontSize: '16px',lineHeight: '20px',textAlign:"center"}} >Thanks for registering.</p>
        <p style={{cursor:"pointer",textDecorationLine:"underline",color:'#8E8E8E',fontStyle: 'normal',fontWeight: 'bold',fontSize: '12px',lineHeight: '24px',textAlign:"center"}} onClick={handleOk}>close</p>
      </Modal>
      {!isEmailValid && (
          <div className={styles.message}>Please enter a valid email</div>
        )}
  
    </>
  )
}

export default SampleEmail;