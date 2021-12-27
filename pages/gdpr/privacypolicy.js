import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from '../../assets/gdpr.module.scss'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { style } from "@material-ui/system";
import Link from 'next/link';
import { NextSeo } from 'next-seo'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224,
    },
    tabs: {
    //   borderRight: `1px solid ${theme.palette.divider}`,
        borderRight: `1px solid black`,
    },
    indicator:{backgroundColor:'yellow'},
  }));
  
const Gdpr = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
    <Head>
    <style>{'body{background-color:#ffff !important;}'}</style>
    </Head>
    <NextSeo
    title={`Mailmodo's Privacy Policy`}
    description= {`Mailmodo is serious about your data privacy. Our privacy policy explains who we are, how we collect, share and use personal information.`}
    canonical={`https://www.mailmodo.com/gdpr/privacypolicy/`}
    keywords={" "}
    openGraph={{
    url: `https://www.mailmodo.com/gdpr/privacypolicy/`,
    title: `Mailmodo's Privacy Policy`,
    description: `Mailmodo is serious about your data privacy. Our privacy policy explains who we are, how we collect, share and use personal information.`,
    type: 'Article',
    locale: 'en_US',
    article: {
    authors: ['Mailmodo'],
                        // publishedTime: blocks.seo?.createdAt??" ",
                        // modifiedTime: blocks.seo?.updatedAt??" "
                    },
                    images: [{ url: `https://www.mailmodo.com/static/images/og-image.png` }],
                }}
                twitter={{
                    handle: '@mailmodo',
                    site: 'twitter.com/mailmodo',
                    cardType: 'summary_large_image',
                  }}
            />  
        <div className={styles.gdpr_container}>
            <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className={styles.custom_vert_tabs}>
                    <Link href="/gdpr/gdprcompliance"><button className={(value === 3)?styles.button_active:""} onClick={(e)=>{handleChange(e,3)}} >GDPR Compliance</button></Link>                
                    <Link href="/gdpr/privacypolicy"><button className={(value === 0)?styles.button_active:""} onClick={(e)=>{handleChange(e,0)}}>Privacy Policy</button></Link>
                        <Link href="/gdpr/cookiepolicy"><button  className={(value === 1)?styles.button_active:""} onClick={(e)=>{handleChange(e,1)}}>Cookie Policy</button></Link>
                        <Link href="/gdpr/termsandconditions "><button className={(value === 2)?styles.button_active:""} onClick={(e)=>{handleChange(e,2)}} >Terms of Service</button></Link>  
                    </div>
                </div>

                <div className={"col-8 "+styles.mobile_expand}>
        <TabPanel value={value} index={0}>
        <div className=" ">
            <div className="layout-gap"></div>
        <div className={` ${styles.privacy_detail} w-100-center `}>
            <div className={styles.privacy_dates}>
            <h1>Privacy Policy 🔐</h1>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <span className={styles.dates} style={{float:"left"}}>Effective Date: August 3rd, 2021</span>

            <span className={styles.dates} style={{float:"right"}}>Last Updated on: August 3rd, 2021</span>

            </div>

            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>

            <div className="">
            <p style={{textAlign: 'justify'}}>This privacy policy (“<strong>Policy</strong>”) explains how Mailmodo Technologies Inc (Mailmodo) or any of its affiliates or subsidiaries (“<strong>We</strong>”, “<strong>Us</strong>”, “<strong>Our</strong>”) Processes Personal Data collected from You.</p>
            <p>&nbsp;</p>
            <ol start={1}><li style={{textAlign: 'justify'}}>1. DEFINITIONS</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol ><li style={{textAlign: 'justify'}}>1.1&nbsp;“<strong>Controller</strong>” <span style={{fontWeight: 400}}>means the natural or legal person, public authority, agency, or other body which alone or jointly with others, determines the purposes and means of the processing of Personal Data.</span></li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={2}><li style={{textAlign: 'justify'}}>1.2&nbsp;“<strong>End-User</strong>” means any person or entity with whom the Subscriber interacts using the Service(s).</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={3}><li style={{textAlign: 'justify'}}>1.3&nbsp;“<strong>Personal Data</strong>” means any information relating to an identified or identifiable natural person; an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.</li>
            </ol>
            <p>&nbsp;</p>
            <ol start={4}><li style={{textAlign: 'justify'}}>1.4&nbsp;“<strong>Usage Data</strong>” means data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={5}><li style={{textAlign: 'justify'}}>1.5&nbsp;“<strong>Process</strong>”<strong>&nbsp;</strong>means any operation or set of operations which is performed on Personal Data or on sets of Personal Data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={6}><li style={{textAlign: 'justify'}}>1.6&nbsp;“<strong>Processor</strong>” means a natural or legal person, public authority, agency, or other body which Processes Personal Data on behalf of the Controller.</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={7}><li style={{textAlign: 'justify'}}>1.7&nbsp;“<strong>Service(s)</strong>” shall have the meaning ascribed to it in the Terms of Service. </li>
            </ol>
            <p>&nbsp;</p>
            <ol start={8}><li style={{textAlign: 'justify'}}>1.8&nbsp;“<strong>Subscriber</strong>” means the natural or legal person that has subscribed to the Service(s) by agreeing to the Terms of Service.</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={9}><li style={{textAlign: 'justify'}}>1.9&nbsp;“<strong>Terms of Service</strong>” means the binding contract between Us and You which governs the access and use of the Service(s) by You available at <a href="https://www.google.com/url?q=https://www.mailmodo.com/gdpr/termsandconditions/&sa=D&source=editors&ust=1628062115307000&usg=AOvVaw1FOpveaDfCBnmiRHy4WU6h"  target="_blank" rel="noopener" >https://www.mailmodo.com/gdpr/termsandconditions/</a>&nbsp;</li>
            </ol>
            <p>&nbsp;</p>
            <ol start={10}><li style={{textAlign: 'justify'}}>1.10&nbsp;“<strong>Website(s)</strong>” means the websites that We operate.</li>
            </ol>
            <p>&nbsp;</p>
            <ol start={11}><li style={{textAlign: 'justify'}}>1.11&nbsp;“<strong>You</strong>” and “<strong>Your</strong>” means an identified or identifiable natural person whose Personal Data We process as a Controller.</li>
            </ol>
            <p>&nbsp;</p>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={1}><li style={{textAlign: 'justify'}}>2. PERSONAL DATA COLLECTED BY US</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={12}><li style={{textAlign: 'justify'}}>2.1&nbsp;You directly provide Us with most of the data We collect. We collect Personal Data from You directly as follows: a) When You subscribe for any of Our Service(s) by agreeing to the Terms of Service, We collect sign-up and account information including Your first and last name, e-mail address, phone number, address, State, Province, ZIP/Postal code, city; b) When You submit web forms on Our Website(s) or as You use interactive features of the Website(s), including providing feedback or suggestions, making requests, or participation in surveys, contests, webinars, events, podcasts, promotions, sweepstakes, requesting customer support, or otherwise communicating with Us; c) When You provide testimonials, forms or information to Us in other contexts; or d) When You authorize Us to connect with a third-party service, We will access and store Your Personal Data that the third-party service makes available to Us, which may include &nbsp;Your email address, location or profile information;</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={13}><li style={{textAlign: 'justify'}}>2.2&nbsp;We may also receive Your Personal Data indirectly as follows: a) from third party sources like marketing lists, databases and social media but only where We have checked that these third parties either have Your consent or are otherwise legally permitted or required to disclose Your Personal Data to Us; b)When You download and/or use the Service(s), We automatically collect Usage Data&nbsp;such as Your device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data, to perform Our agreement with You; e) When You use or view Our Website(s), information is collected via Your browser’s cookies as described in clause 9 herein; f)&nbsp;When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile internet browser You use, unique device identifiers and other diagnostic data; g) We may also collect or receive Your Personal Data from other sources such as Our business or channel partners through whom You create or access Your account, publicly available sources, email add-ons and/ or through the combining of information We obtain from third parties along with the Personal Data You provide to Us.</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={14}><li style={{textAlign: 'justify'}}>2.3&nbsp;If you decide to register through or otherwise grant access to a third-party social networking or integrated service, such as Facebook, Google or similar single sign-on service, we may also collect Personal Data that is already associated with your integrated service account. You may also have the option of sharing additional information such as profile pictures with us through an integrated service, as controlled through your settings on that integrated service. If you choose to provide such information, during registration or otherwise, we will treat the information as Personal Data and will use it in the ways described in this Privacy Policy.</li>
            </ol>
            <p>&nbsp;</p>
            <ol start={15}><li style={{textAlign: 'justify'}}>2.4&nbsp;The Website(s) includes social media features and widgets that are either hosted by a third-party or hosted directly on the Website(s) and Your interaction with these social media features and widgets is governed by the privacy statement of the companies that provide them. You should check Your privacy settings on these third-party services to understand and change the information sent to Us through these services.</li>
            </ol>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <ol start={2}><li style={{textAlign: 'justify'}}>3. PURPOSES FOR WHICH PERSONAL DATA WILL BE PROCESSED</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <p style={{textAlign: 'justify'}}>3.1 We Process Your Personal Data to: a) facilitate Your access to the Website(s) and Service(s); b) process and complete payment transactions; c) provide customer service and support; d) send You communication on Your use of the Service(s), updates on Our Terms of Service or other policies; e) send You communication on new features in the Service(s) or new service offerings, news, special offers and general information about other goods, services and events, in compliance with applicable laws, unless You have opted not to receive such information.; f) conduct analytics and/or to improve Our Service(s) for Your benefit; e) organise events or for other marketing/ promotional activities; f) investigate and prevent fraudulent transactions, unauthorized access to the Websites and Service(s), and other illegal activities; g) personalize the Websites and Service(s); and for other purposes for which We obtain Your consent.</p>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={3}><li style={{textAlign: 'justify'}}>4. SHARING OF PERSONAL DATA</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={16}><li style={{textAlign: 'justify'}}>4.1 You acknowledge that We will share Your Personal Data with Our group companies and third-party service providers so that they may offer You Our Service(s) and/or to send information or updates on the Service(s) if You are a Subscriber.</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={17}><li style={{textAlign: 'justify'}}>4.2 When We Process Your order where You are a Subscriber, we may send Your Personal Data to and also use the resulting information from credit reference agencies to prevent fraudulent purchases.</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={18}><li style={{textAlign: 'justify'}}>4.3 We share Personal Data with Our third-party service providers that host and maintain the Our Website(s), applications, backup, storage, payment processing, analytics and other services. These third-party service providers may have access to or Process Your Personal Data for the purpose of providing these services to Us.</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={19}><li style={{textAlign: 'justify'}}>4.4 We may share Your Personal Data with third-party providers who assist Us in marketing and promotions in compliance with applicable laws.</li>
            </ol>
            <p>&nbsp;</p>
            <ol start={20}><li style={{textAlign: 'justify'}}>4.5 We may share or transfer Your Personal Data in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
            </ol>
            <p>&nbsp;</p>
            <ol start={21}><li style={{textAlign: 'justify'}}>4.6 We may disclose Your Personal Data for any other purpose with Your consent.</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={22}><li style={{textAlign: 'justify'}}>4.7 We may be required to disclose Your Personal Data in response to: a) lawful requests by public authorities, including to meet national security or law enforcement requirements and/or b) subpoenas, court orders, or legal process, or to establish or exercise Our legal rights or defend against legal claims.</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={23}><li style={{textAlign: 'justify'}}>4.8 We may also share Personal Data to assist investigation and prevention of illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of Our Terms of Service, or as otherwise required by law.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br /></li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={4}><li style={{textAlign: 'justify'}}>5. INTERNATIONAL TRANSFER</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={24}><li style={{textAlign: 'justify'}}>5.1. We mainly Process Personal Data in the USA. However, We may transfer Personal Data outside the USA for the purposes referred to in <br/> Section 4. We will ensure that the recipient of Your Personal Data offers an adequate level of protection that is at least comparable to that which is provided under applicable data protection laws. &nbsp; </li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={5}><li style={{textAlign: 'justify'}}>6. RETENTION OF PERSONAL DATA</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={25}><li style={{textAlign: 'justify'}}>6.1 We retain the Personal Data collected where an ongoing legitimate business requires retention of such Personal Data.</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={26}><li style={{textAlign: 'justify'}}>6.2 In the absence of a need to retain Personal Data under Section 6.1. above, We will either delete it or aggregate it, or, if this is not possible then We will securely store Your Personal Data and isolate it from any further Processing until deletion is possible.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br /></li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={6}><li style={{textAlign: 'justify'}}>7. SECURITY OF PERSONAL DATA</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <p style={{textAlign: 'justify'}}>7.1. We use appropriate technical and organizational measures to protect the Personal Data that We collect and Process. The measures We use are designed to provide a level of security appropriate to the risk of Processing Your Personal Data. If You have questions about the security of Your Personal Data, please contact Us immediately as described in this Policy.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={7}><li style={{textAlign: 'justify'}}>8. YOUR RIGHTS</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <p style={{textAlign: 'justify'}}>You are entitled to the following rights:</p>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={1}>
            <li style={{textAlign: 'justify'}}>8.1. You can request Us for access, correction, update or request deletion of Your Personal Data.</li>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>

            <li style={{textAlign: 'justify'}}>8.2. You can object to the Processing of Your Personal Data, ask Us to restrict processing of Your Personal Data or request portability of Your Personal Data&nbsp;to the extent required under applicable laws.</li>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>

            <li style={{textAlign: 'justify'}}>8.3. You have the right to opt-out of marketing communications We send You at any time.&nbsp;You can exercise this right by clicking on the “unsubscribe” or “opt-out” link in the marketing emails We send You. To opt-out of other forms of marketing (such as postal marketing or telemarketing), please contact Us.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>

            <li style={{textAlign: 'justify'}}>8.4. Similarly, if We have collected and processed Your Personal Data with Your consent, then You can withdraw your consent at any time. Withdrawing Your consent will not affect the lawfulness of any processing We have conducted prior to Your withdrawal, nor will it affect processing of Your Personal Data conducted in reliance on lawful processing grounds other than consent.</li>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>

            <li style={{textAlign: 'justify'}}>8.5. You have the right to complain to a data protection authority about Our collection and use of Your Personal Data. For more information, please contact Your local data protection authority.</li>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>

            <li style={{textAlign: 'justify'}}>8.6. If You seek access to, or wish to correct, update, modify or delete Your Personal Data that We process, please contact Us at the details provided in clause 12.&nbsp;We respond to all requests We receive from individuals wishing to exercise their data protection rights within a reasonable timeframe in accordance with applicable data protection laws.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>

            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={8}><li style={{textAlign: 'justify'}}>9. COOKIE POLICY</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <p style={{textAlign: 'justify'}}>Cookies are text files that are placed on Your computer to collect standard internet log information and visitor behaviour information by Us. When You visit the Website(s), We may collect Personal Data automatically from You through cookies or similar technology. We also set cookies to collect information that is used either in aggregate form to help Us understand how our Website(s) are being used or how effective Our marketing campaigns are, to help customise the Website(s) for You or to make advertising messages more relevant to You.</p>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <p style={{textAlign: 'justify'}}>You can read more about our Cookie Policy here <a href="https://www.google.com/url?q=https://www.mailmodo.com/gdpr/cookiepolicy/&sa=D&source=editors&ust=1628062115314000&usg=AOvVaw2bNJs5DXnOyZeKr380mUJ5"  target="_blank" rel="noopener" >https://www.mailmodo.com/gdpr/cookiepolicy/</a>&nbsp;</p>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={9}><li style={{textAlign: 'justify'}}>10. PRIVACY OF CHILDREN</li>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            </ol>
            <ol start={1}><li style={{textAlign: 'justify'}}>10.1. We recognize the importance of children's safety and privacy. We do not request, or knowingly collect, any Personal Data from children under the age of 18. If a parent or guardian becomes aware that his or her child has provided Us with Personal Data, they should write to us at the email address provided in clause 12.</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={10}><li style={{textAlign: 'justify'}}>11. NOTICE TO END-USER AND OTHER EXCLUSIONS</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={2}><li style={{textAlign: 'justify'}}>11.1. Where the Services are made available to an End-User through a Subscriber, that Subscriber is the Controller of the End-User’s Personal Data. In such a case, the End-User’s data privacy questions and requests should be submitted to the Subscriber in its capacity as the End-User’s Controller. If the End-User is an individual who interacts with a Subscriber using Our Services, the End-User will be directed to contact Our Subscriber for assistance with any requests or questions relating to their Personal Data. We are not responsible for Subscribers’ privacy or security practices which may be different from this notice. Subscribers to Our Services are solely responsible for establishing policies for and ensuring compliance with all applicable laws and regulations, as well as any and all privacy policies, agreements, or other obligations, relating to the collection of Personal Data in connection with the use of Our Services by End-Users.</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={3}><li style={{textAlign: 'justify'}}>11.2. We will not send emails to End-Users of our Subscribers’ websites. However, Our Subscribers may use Mailmodo’s Service to send commercial e-mails to End-Users. Under Our policies, Subscribers may only use the Service to send commercial emails to End-Users who have opted in to receiving such e-mails. Each email sent by a Subscriber through Our Service contains an opt-out mechanism through which You may tell a Subscriber You do not wish to receive future marketing emails from the Subscriber. However, We are not responsible for the emails sent by Our Subscribers, through Our Services, and We cannot guarantee that Subscribers will follow Our policies or comply with applicable laws. End-Users can report suspected abuse to <a href="mailto:abuse@mailmodo.com"  target="_blank" rel="noopener" >abuse@mailmodo.com</a>.&nbsp;</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={4}><li style={{textAlign: 'justify'}}>11.3. Our Website(s) contain links to other websites. Our Policy applies only to our Website(s), so if You click on a link to another website, You should read their privacy policy. We encourage You to review the privacy statements of any such other websites to understand their Personal Data practices.</li>
            </ol>
            <p>&nbsp;</p>
            <ol start={5}><li style={{textAlign: 'justify'}}>11.4. This Policy does not apply to aggregated information which summarises statistical information about groups of members, and which does not include name, contact information, or any other information that would allow any particular individual to be identified.</li>
            </ol>
            <p>&nbsp;</p>
            <ol start={6}><li style={{textAlign: 'justify'}}>11.5. When You share Personal Data or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a third-party social media service, Your contacts on the third-party social media service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={11}><li style={{textAlign: 'justify'}}>12.&nbsp;CONTACT INFORMATION</li>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            </ol>
            <p style={{textAlign: 'justify'}}>You may contact us if You have any enquiries or feedback on Our personal data protection policies and procedures, or if You wish to make any request, in the following manner:</p>
            <p style={{textAlign: 'justify'}}><br />Kind Attention: Md. Aquibur Rahman </p>
            <p style={{textAlign: 'justify'}}>Email Address: aquib@mailmodo.com</p>
            <p style={{textAlign: 'justify'}}>Address: 355 Bryant Street, Unit 403, San Francisco, CA 94107, USA</p>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <ol start={12}><li style={{textAlign: 'justify'}}>13. CHANGES TO THE POLICY</li>
            </ol>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <p style={{textAlign: 'justify'}}>We keep this Policy under regular review and may update this webpage at any time. This Policy may be amended at any time and You shall be notified only if there are material changes to this Policy.</p>
            <p style={{textAlign: 'justify'}}>&nbsp;</p>
            <p>&nbsp;</p>
        </div>

        </div>
        </div> 
    
        </TabPanel>
                    
             </div>

                <div className={"col-1 "+styles.mobile_remove}>

                </div>
            </div>

            <div className="layout-gap"></div>
            </div>


        </div>

    </>
  );
};

export default Gdpr;
