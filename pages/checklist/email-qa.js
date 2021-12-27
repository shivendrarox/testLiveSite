import React, { useState, useEffect } from "react";
import Head from "next/head";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import marked from 'marked';
import styles from "../../assets/checklistPage/styles.module.scss";
import { Tabs, Radio, Space } from 'antd';
import Link from 'next/link'
import { getImageUrl } from '../../lib/strapiApi'
import Image from 'next/image';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { NextSeo, ArticleJsonLd } from 'next-seo'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Test = ({ tab_data }) => {
  const { height, width } = useWindowDimensions();

  const [btnKey,setbtnKey] = useState("1")

  const [errMsg, setErrMsg] = useState(false)


  const sendFeedbackMail = async (values) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://api-uat.mailmodo.com/api/v1/at/c/hQOjZMdC34/f24585ef-0e4f-514c-8994-703ecccf1bbd',
        data: {
          email:'zeeshan@mailmodo.com',
          data:{
            "feedback_email": values.email,
            "feedback_matter": values.feedback
          }
        },
    
      })

      analytics.track('Feed back', {
        email:values.email,
      });
      setErrMsg("Feedback Sent!")
    } catch (err) {
      setErrMsg("Error !")
      console.log(err)
    }
  }

  return (
    <>

              <ArticleJsonLd
                url={`https://www.mailmodo.com/checklist/email-qa/`}
                title={"Email QA Checklist - Pre-deployment Email Checklist | Mailmodo"}
                images={[`https://res.cloudinary.com/mailmodo/image/upload/v1634572839/strapi/Og_image_f06ab67f3d.png`]}
                // datePublished={blocks.seo?.createdAt??" "}
                // dateModified={blocks.seo?.updatedAt??" "}
                authorName={ "Mailmodo"}
                publisherName="Mailmodo"
                publisherLogo="https://www.mailmodo.com/static/images/logo/logo-full.svg"
                description="Send better email campaigns by checking your email process with this Pre-deployment Email Quality Assurance checklist. Stop fearing the send button today."
                /> 

            <NextSeo
                title={`Email QA Checklist - Pre-deployment Email Checklist | Mailmodo`}
                description= {`Send better email campaigns by checking your email process with this Pre-deployment Email Quality Assurance checklist. Stop fearing the send button today.`}
                canonical={`https://www.mailmodo.com/checklist/email-qa/`}
                keywords={" "}
                openGraph={{
                    url: `https://www.mailmodo.com/checklist/email-qa/`,
                    title: `Email QA Checklist - Pre-deployment Email Checklist | Mailmodo`,
                     description: `Send better email campaigns by checking your email process with this Pre-deployment Email Quality Assurance checklist. Stop fearing the send button today.`,
                    // type: 'Article',
                    locale: 'en_US',
                    // article: {
                        // authors: ['Mailmodo'],
                        // publishedTime: blocks.seo?.createdAt??" ",
                        // modifiedTime: blocks.seo?.updatedAt??" "
                    //},
                    images: [{ url: `https://res.cloudinary.com/mailmodo/image/upload/v1634572839/strapi/Og_image_f06ab67f3d.png` }],
                }}
                twitter={{
                    handle: '@mailmodo',
                    site: 'twitter.com/mailmodo',
                    cardType: 'summary_large_image',
                  }}
            />  

      <Head>
        <style>{'body{font-family: Inter !important;}'}</style>
      </Head>

      <div className={styles.hero_fold}>
      <div style={{ paddingTop: '22px' }}></div>
      <div className="layout-padding"></div>

      <div className="container" >
          <div className={styles.hero_img_container} >

          <div className={styles.hero_img_wrap} >
          <Image
                      height="51"
                      width="67"
                      src={getImageUrl('https://res.cloudinary.com/mailmodo/image/upload/v1634532111/strapi/Group_1_e5e139c32c.png')}
                    />
          </div>

            <div style={{paddingLeft:'20px'}}></div>
            <div className={styles.heading_container} dangerouslySetInnerHTML={{ __html: marked(`# **Email QA Checklist** `) }} ></div>
          
        </div>
      </div>

          {/* <div className={styles.hero_content_container} >
            <div className="layout-gap"></div>
     
          </div> */}
                <div className="layout-padding"></div>
      </div>

      <div className="container" >
        <div className={styles.reset_btn_container}>
          <a href=" ">
            <button>
              <span style={{fontWeight:700}}>&#10227; Reset Checklist</span>
            </button>
          </a>
        </div>

        <div className={styles.checklist_container + " checklist-page-overide "} >
          <Tabs onTabClick={(e)=>{setbtnKey(e)}} activeKey={btnKey} tabPosition={ (width>600 || width == null )?'left':'top'} onChange={callback}>
            {tab_data.map((tab_item, index) => {
              return (
                <>
                  <TabPane style={{ paddingLeft: "0" }} tab={<span className={styles.tab_item} >{tab_item.name ?? " "}</span>} key={index + 1}>
                    <div className={styles.custom_container}>

                      <h2>{tab_item.name ?? " "}</h2>
                      {tab_item.items.map((md_item, index) => {
                        return (
                          <>
                            <div className={styles.checklist_item_container} dangerouslySetInnerHTML={{
                              __html: marked.parseInline(`
<div style="display:flex" >
  <div style="flex-basis:2%;"><input type="checkbox" id="checkbox${index}"></div><div style="flex-basis:98%"><label for="checkbox${index}">${md_item[0].v}</label>
  ${md_item[1] ? `
  <p>
  ${md_item[1].v}
  </p>
</div></div>`: "</div></div>"}
`, { gfm: true })
                            }}></div>
                          </>
                        )
                      })}

                    </div>
                    <div className={styles.prev_next_container} style={{display:"flex"}}>
                    {(index==0)?<></>:<button className={styles.prev_button} onClick={() => {setbtnKey(`${index}`)}} >Previous</button>}

                    {(index+1==tab_data.length)?<button className={styles.next_button} onClick={() => {setbtnKey(`${1}`)}} >Start again</button>:<button className={styles.next_button} onClick={() => {setbtnKey(`${index+1+1}`)}} >Next</button>}                    
                    </div>
                  </TabPane>
                </>
              )
            })}
          </Tabs>
        </div>

      </div>

      <div className="layout-gap"></div>
      <div className="container">
 
        <div className={styles.feedback_form}>

        <div className="row" >
          <div className="col-md-5 align-self-center">
          <h2>Something's missing here? 🤔</h2>
          <label for="feedback">Help us make this checklist better. Share your experiences and tips and we will add it to this checklist.</label>

          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <div className={styles.form_container} >
            <Formik
       initialValues={{email:'', feedback: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
         if (!values.feedback) {
           errors.feedback = 'Required';
         } 
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
           sendFeedbackMail (values)         
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <div style={{paddingBottom:"20px"}}></div>
           <Field  style={{width:"100%"}} type="email" name="email" placeholder="Email" />
           <ErrorMessage name="email" >
           { msg => <div style={{ color: 'red',opacity:'0.7',fontSize:"12px" }}>{msg}</div> }
           </ErrorMessage>
           <div style={{paddingBottom:"20px"}}></div>
           <Field style={{width:"100%",height:"80px"}} component="textarea" name="feedback" placeholder="Feedback" />
           <ErrorMessage name="feedback" >
           { msg => <div style={{ color: 'red',opacity:'0.7',fontSize:"12px" }}>{msg}</div> }
           </ErrorMessage>
           <div style={{paddingBottom:"20px"}}></div>
           <button className={styles.next_button} type="submit" disabled={isSubmitting}>
             Submit Feedback
           </button>
          {errMsg && <div className={styles.form_msg} >Feedback Sent!</div>}
         </Form>
       )}
     </Formik>
            </div>
     
            
            </div>
        </div>
        </div>

   </div>
   <div className="layout-gap"></div>

    </>
  );
};

export default Test;

export async function getStaticProps(context) {
  const spreadsheetId = '1gcBCxMURrWXoUSwqF-bZHPnGlJGK2YJpA4xYMPnE6CU'
  const pageMatter = await fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json`)
    .then(res => res.text())
    .then(text => {
      const json = JSON.parse(text.substr(47).slice(0, -2))
      return json
    })

  //Logic for making an object with a desired usable format
  let arr = Array.from(pageMatter.table.rows)
  let objArr = arr.map((x) => { return x.c[0] })
  objArr.shift()
  objArr = arr.filter(n => n)
  let tabs = objArr.map((item) => { return item.c[0] })
  tabs = tabs.filter(n => n)
  tabs = tabs.map((item) => { return item.v })
  tabs = [...new Set(tabs)]
  let tab_data = []
  //   for(let x=0;x<tabs.length;x++){
  //     for(let y=0;y<arr.length;y++){
  //        (arr[y]['c'][0]!=null)?console.log(arr[y]['c'][0].v):""
  //     }
  // }
  for (let x = 0; x < tabs.length; x++) {
    let temp_arr = []
    for (let y = 0; y < arr.length; y++) {
      if (arr[y]['c'][0] != null && arr[y]['c'][0].v == tabs[x]) {
        let values = []
        values.push(arr[y]['c'][1])
        values.push(arr[y]['c'][3])
        temp_arr.push(values)
      }
    }
    tab_data.push(new Object({ name: tabs[x], items: temp_arr }))
  }
  tab_data.shift()
  //END

  return {
    props: { tab_data }
  };

}
