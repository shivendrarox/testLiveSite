import React, { useState } from 'react'
import axios from 'axios'
import styles from '../features.module.scss'
import { Button } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Link from 'next/link'

import Whatsapp from '../../../static/images/icon/whatsapp-colored.svg'
import Linkedin from '../../../static/images/icon/linkedin-colored.svg'
import fb from '../../../static/images/newsletter/facebook.svg';
import twitter from '../../../static/images/newsletter/twitter.svg';
import pinterest from '../../../static/images/newsletter/pinterest.svg';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #000',
    boxShadow: theme.shadows[5],
    borderRadius:'12px',
    padding: theme.spacing(2, 4, 3),
  },
}));

const SampleEmail = ({ trackingId,campaignId, usecase }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [CompanyName, setCompanyName] = useState('')
  const [Designation, setDesignation] = useState('')

  const [errMsg, seterrMsg] = useState('')

  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [btnLoading, setbtnLoading] = useState(false)
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendTestMail = async () => {
    setbtnLoading(true)

    if (!regex.test(email)) {
      console.log('regex', regex.test(email))
      seterrMsg("Please enter a valid email")
      setIsEmailValid(false)
      setbtnLoading(false)
      return
    }

    if(name=="" || Designation == "" || CompanyName==""){
      setIsEmailValid(false)
      setbtnLoading(false)
      seterrMsg("Please fill all the fields")
      return
    }

    try {
      const response = await axios({
        method: 'POST',
        url: 'https://api.mailmodo.com/hooks/start/5dbd2d82-6370-4beb-b591-5c644c7aaad7',
        data: {
          email,
          data:{
            'name': name,
            'CompanyName': CompanyName,
            'Designation': Designation,
          }
        },
        headers:{
          "mmapikey":'QYH1TNE-1AK4B22-Q6VB34M-ASVZTQE'
        }
      })
      setIsEmailSent(true)
      setbtnLoading(false)
      analytics.track('Ebook Downloaded', {
        email:email,
        title: "Email Subject Lines for the Win",
        location:trackingId,
      });
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={{background:"#F8F8F8"}} className={classes.paper}>
          <Button style={{float:"right",border:"none",backgroundColor:"transparent",color:"rgba(0, 0, 0, 0.34)"}} onClick={() => handleClose()} >X</Button>
          <div className={isEmailSent?styles.hidden:" "}>

            <div className={styles.ebook_modal_container+ "  "}>
            {/* <h2 id="transition-modal-title">Modal working</h2> */}
            <span className={styles.modal_input_label}>Name*</span>
            <input
          className={styles.modal_input+" "}
          onChange={(e) => {
            setIsEmailSent(false)
            setIsEmailValid(true)
            setName(e.target.value)
          }}
        />

        <span className={styles.modal_input_label}>Company Name*</span>
          <input
          className={styles.modal_input+" "}
          onChange={(e) => {
            setIsEmailSent(false)
            setIsEmailValid(true)
            setCompanyName(e.target.value)
          }}
        />

        <span className={styles.modal_input_label}>Designation*</span>
        <select style={{paddingTop: '4px', paddingBottom: '4px'}} className={styles.modal_input+" "}
           onChange={(e) => {
            setIsEmailSent(false)
            setIsEmailValid(true)
            setDesignation(e.target.value)
          }} name="Designation" id="Designation_input" >
          <option disabled selected value="">Select an Option</option>
          <option value="Founder">Founder</option>
          <option value="CMO/Marketing Head/VP Marketing">CMO/Marketing Head/VP Marketing</option>
          <option value="Marketing Manager/Sr. Manager">Marketing Manager/Sr. Manager</option>
          <option value="Email/Campaign/CRM Manager">Email/Campaign/CRM Manager</option>
          <option value="Social Media Manager">Social Media Manager</option>
          <option value="Product Marketing Manager">Product Marketing Manager</option>
          <option value="Student">Student</option>
          <option value="Others">Others</option>
        </select>

        <span className={styles.modal_input_label}>Enter Email*</span>
        <input
          className={styles.modal_input+" "}
          onChange={(e) => {
            setIsEmailSent(false)
            setIsEmailValid(true)
            setEmail(e.target.value)
          }}
        />
            <div style={{paddingTop:"12px"}} ></div>
        <Button            
          loading={btnLoading} id={trackingId} onClick={() => sendTestMail()} style={btnLoading?{"opacity":0.5,cursor:"default"}:{opacity:1,cursor:"pointer"}} className={styles.cta_btn}>
          Get your free copy now!
         </Button>
         {!isEmailValid && (
          <div style={{fontSize:"18px",textAlign:"center",color:"black",paddingTop:"6px",fontWeight:"700"}} className={styles.message}>{errMsg}</div>
        )}
            </div>
          </div>
          <div className={isEmailSent?styles.show:styles.hide_tick}>
            <img style={{marginTop:"48px"}} src="https://res.cloudinary.com/mailmodo/image/upload/v1632810447/strapi/success_secondary_e33377ffbc.svg"></img>

        {isEmailSent && (
          <div style={{fontSize:"20px",textAlign:"center",color:"black",paddingTop:"26px"}} className={styles.message_success}>Please check your inbox for the ebook!</div>
        )}

<div style={{fontSize:"20px",textAlign:"center",color:"black",paddingTop:"26px",fontWeight:"700",paddingBottom:"26px"}} className={styles.message_success}>Share this ebook</div>
<ul style={{listStyleType:"none",display:"flex",justifyContent:"space-evenly",paddinTop:"26px"}}>
                {/* <li>Share : </li> */}
                <Link href={`https://www.facebook.com/sharer/sharer.php?u=https://www.mailmodo.com/ebook/${"subject-line"}/`}><li style={{cursor:"pointer"}}><img title="facebook" alt="fb.svg" src={fb}></img></li></Link>
                                <Link href={`https://twitter.com/intent/tweet?url=https://www.mailmodo.com/ebook/${"subject-line"}/&text=`}><li style={{cursor:"pointer"}}><img title="Twitter" alt="twitter.svg" src={twitter}></img></li></Link>
                                {/* <Link href={`https://pinterest.com/pin/create/button/?url=https://www.mailmodo.com/ebook/${"subject-line"}/&media=&description=`}><li style={{cursor:"pointer"}}><img title="Pinterest" alt="pinterest.svg" src={pinterest}></img></li></Link> */}
                                <Link href={`https://wa.me/?text=https://mailmodo.com/ebook/${"subject-line"}/`}><li style={{cursor:"pointer"}}><img title="Whatsapp" alt="whatsapp.svg" src={Whatsapp}></img></li></Link>
                                <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=https://mailmodo.com/ebook/${"subject-line"}/`}><li style={{cursor:"pointer"}}><img title="Linkedin" alt="Linkedin.svg" src={Linkedin}></img></li></Link>

              </ul>
          </div>
          </div>
        </Fade>
      </Modal>
    

      <Button            
        onClick={() => handleOpen()}  className={styles.cta_btn}>
          Get your free copy now!
      </Button>

    </>
  )
}

export default SampleEmail;