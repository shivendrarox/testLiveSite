import React from "react";
import Head from "next/head";
import styles from '../../assets/gdpr.module.scss'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import { NextSeo, ArticleJsonLd } from 'next-seo'

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
    const [value, setValue] = React.useState(1);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
    <Head>
    <style>{'body{background-color:#ffff !important;}'}</style>
    </Head>
    <NextSeo
    title={`Cookie Policy: Why and What We Use | Mailmodo`}
    description= {`Everything you need to know about the cookie policy. Learn why and which cookies do we use along with how can you control your cookies.`}
    canonical={`https://www.mailmodo.com/gdpr/cookiepolicy/`}
    keywords={" "}
    openGraph={{
    url: `https://www.mailmodo.com/gdpr/cookiepolicy/`,
    title: `Cookie Policy: Why and What We Use | Mailmodo`,
    description: `Everything you need to know about the cookie policy. Learn why and which cookies do we use along with how can you control your cookies.`,
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
              
    <TabPanel value={value} index={1}>
    <div className="layout-gap"></div>
    <div className={styles.cookies_detail+" w-100-center "}>
        <div className={styles.privacy_dates}>
          <h1>Cookie Policy 🍪</h1>
          <p style={{textAlign: 'justify'}}>&nbsp;</p>
          <span className={styles.dates} style={{float:"left"}}>Effective Date: August 3rd, 2021</span>

          <span className={styles.dates} style={{float:"right"}}>Last Updated on: August 3rd, 2021</span>

        </div>

        <p style={{textAlign: 'justify'}}>&nbsp;</p>
        <p style={{textAlign: 'justify'}}>&nbsp;</p>

        <div className="">
        <p></p>
        <p style={{textAlign: 'justify'}}>In this Cookie Policy, references to “<strong>We</strong>”, “<strong>Us</strong>” or “<strong>Our</strong>” mean Mailmodo Technologies Inc., whose registered address is 355 Bryant Street, Unit 403, San Francisco, CA 94107, USA.</p><br/>
        <p style={{textAlign: 'justify'}}>We may, through the websites owned and operated by Us (“<strong>Website(s)</strong>”) place and access certain first-party cookies on your computer or device. Any user visiting Our Website(s) will receive cookies from Us, and the details of the cookies used are set out below. </p>
        <p style={{textAlign: 'justify'}}>&nbsp;</p>
        <ol start={1}><li style={{textAlign: 'justify'}}>WHAT ARE COOKIES? </li>

        </ol>
        <p style={{textAlign: 'justify'}}>A cookie is a small text file placed on your computer or device by Our Website when you visit certain parts of Our Website and/or when you use certain features of Our Website. Cookies set by the Website owner are called “first party cookies”. Cookies set by parties other than the Website owner are called “third party cookies”. </p>
        <p style={{textAlign: 'justify'}}>&nbsp;</p>
        <ol start={2}><li style={{textAlign: 'justify'}}>WHY DO WE USE COOKIES? </li>

        </ol>
        <p style={{textAlign: 'justify'}}>We use cookies to facilitate and improve your experience on Our Website(s). &nbsp;More specifically, we use cookies to:</p><br/>
        <ol start={1}><li style={{textAlign: 'justify'}}>Help remember and process your chosen plan.</li>
          <li style={{textAlign: 'justify'}}>Understand and save your preferences for future visits.</li>
          <li style={{textAlign: 'justify'}}>Compile aggregate data about site traffic and site interactions in order to offer better Website experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.</li>
        </ol>
        <p style={{textAlign: 'justify'}}>Further to this, Our Website uses website analytics services. &nbsp;Website analytics refers to a set of tools used to collect and analyse usage statistics, enabling Us to better understand how people use Our Website. These enable Us to improve Our Website and the&nbsp;products and&nbsp;services offered through it. You do not have to allow Us to use these cookies, as detailed below, however, while Our use of them does not pose any risk to your privacy or your safe use of Our Website, it does enable Us to continually improve Our Website, making it a better and more useful experience for you.</p>
        <p style={{textAlign: 'justify'}}>&nbsp;</p>
        <ol start={3}><li style={{textAlign: 'justify'}}>LIST OF COOKIES WE USE</li>

        </ol>
        <p>The cookies used by Us may be categorized as: &nbsp;</p><br/>
        <ol start={1}><li>Essential Cookies: We set essential cookies that enable core functionality such as security, network management, and accessibility. You may not opt-out of these cookies. However, you may disable these by changing your browser settings, but this may affect how the Website functions.</li>
          <li>Analytics, Customisation and Advertising Cookies: We set these cookies to help Us improve Our Website by collecting and reporting information on how you use it. The cookies collect information in a way that does not directly identify anyone.</li>
          <li>Flash Cookies: Certain features of Our Service may use local stored objects (or Flash Cookies) to collect and store information about your preferences or your activity on Our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies. For more information on how you can delete Flash Cookies, please read "Where can I change the settings for disabling, or deleting local shared objects?" available at this <a href="https://www.google.com/url?q=https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html%23main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects&sa=D&source=editors&ust=1628067340666000&usg=AOvVaw0lMkiOe5GKD7h7L87tqhG9"  target="_blank" rel="noopener" >link</a>.<br />&nbsp; </li>
          <li>Web Beacons: Certain sections of Our Service and Our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit Us, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity). </li>
          <li>"Persistent" or "Session" Cookies:&nbsp;Persistent Cookies remain on your personal computer or mobile device when you go offline, while Session Cookies are deleted as soon as you close your web browser. </li>
        </ol>
        <p>&nbsp;</p>
        <ol start={4}><li style={{textAlign: 'justify'}}>HOW CAN YOU CONTROL COOKIES?<span style={{fontWeight: 400}}>&nbsp;<br /></span></li>

        </ol>
        <p style={{textAlign: 'justify'}}>Usually, before&nbsp;any&nbsp;cookies are placed on your computer or device,&nbsp;you will be shown a&nbsp;prompt such as a pop-up or message bar&nbsp;requesting your consent to set those cookies that are not essential or strictly necessary. By giving your consent to the placing of these cookies you are enabling Us to provide the best possible experience and service to you. You may, if you wish, deny consent to the placing of such cookies; however certain features of Our Website may not function fully or as intended. <br /></p>
        <p style={{textAlign: 'justify'}}>&nbsp;</p>
        <ol start={5}><li style={{textAlign: 'justify'}}>&nbsp;DO NOT TRACK</li>

        </ol>
        <p style={{textAlign: 'justify'}}>Some Internet browsers - like Internet Explorer, Firefox, and Safari - include the ability to transmit “Do Not Track” or “DNT” signals. Since uniform standards for “DNT” signals have not been adopted, Our Website does not currently process or respond to “DNT” signals. We take privacy and meaningful choice seriously and will make efforts to continue to monitor developments around DNT browser technology and the implementation of a standard. To learn more about “DNT”, please visit All About Do Not Track: <a href="https://www.google.com/url?q=https://allaboutdnt.com/&sa=D&source=editors&ust=1628067340667000&usg=AOvVaw2RQq67LX0-7kNU9rgWhXd4"  target="_blank" rel="noopener" >https://allaboutdnt.com/</a>&nbsp;</p>
        <p style={{textAlign: 'justify'}}>&nbsp;</p>
        <ol start={6}><li style={{textAlign: 'justify'}}>RESOURCES YOU MAY WANT TO REFER TO</li>

        </ol>
        <p>To find out more about cookies, visit&nbsp;<a href="https://www.google.com/url?q=https://www.aboutcookies.org/&sa=D&source=editors&ust=1628067340668000&usg=AOvVaw1MX0TgSyTahay7HE4g1dxH"  target="_blank" rel="noopener" >www.aboutcookies.org</a>&nbsp;&nbsp;or <a href="https://www.google.com/url?q=https://www.termsfeed.com/blog/cookies/&sa=D&source=editors&ust=1628067340668000&usg=AOvVaw3bk9jcmd4WFKUHW_9BH3f3"  target="_blank" rel="noopener" >All About Cookies by TermsFeed.</a></p>
        <p>Further to this, the links below are helpful if you want to learn about advertiser’s use of cookies:</p>
        <ul><li><a href="https://www.google.com/url?q=https://www.iab.com/&sa=D&source=editors&ust=1628067340669000&usg=AOvVaw016tHLOl9Z7fbQKo3ZMLra"  target="_blank" rel="noopener" >Internet Advertising Bureau (US)</a></li>
          <li><a href="https://www.google.com/url?q=https://iabeurope.eu/&sa=D&source=editors&ust=1628067340669000&usg=AOvVaw3LOn4Gz3oOJ11K0B0c2B-c"  target="_blank" rel="noopener" >Internet Advertising Bureau (EU)</a></li>
        </ul>
        <p>Below are a few references to some popular browser manufacturers and their help pages relating to cookie management in their respective products.</p><br/>
        <ul><li><a href="https://www.google.com/url?q=https://support.google.com/chrome/answer/95647?hl%3Den-GB&sa=D&source=editors&ust=1628067340670000&usg=AOvVaw2HvVTfsxbOeyZ_JhTPa5Bq"  target="_blank" rel="noopener" >Google Chrome</a></li>
          <li><a href="https://www.google.com/url?q=https://support.microsoft.com/en-us/topic/description-of-cookies-ad01aa7e-66c9-8ab2-7898-6652c100999d&sa=D&source=editors&ust=1628067340670000&usg=AOvVaw2RaTUU4JhSI48p3j0j1iRX"  target="_blank" rel="noopener" >Internet Explorer</a></li>
          <li><a href="https://www.google.com/url?q=https://support.google.com/nexus/answer/54068?visit_id%3D636863395166851235-1101973626%26hl%3Den%26rd%3D1&sa=D&source=editors&ust=1628067340671000&usg=AOvVaw1WPid7EWr2FMC9Zh6x_inj"  target="_blank" rel="noopener" >Android Browser</a></li>
          <li><a href="https://www.google.com/url?q=https://support.apple.com/en-in/guide/safari/sfri11471/mac&sa=D&source=editors&ust=1628067340671000&usg=AOvVaw1uSLHUmu5XeVL12GRz5U6g"  target="_blank" rel="noopener" >Safari (Desktop)</a></li>
          <li><a href="https://www.google.com/url?q=https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer&sa=D&source=editors&ust=1628067340672000&usg=AOvVaw0w72pheSzDtGg7nhB6_dxh"  target="_blank" rel="noopener" >Mozilla Firefox</a></li>
          <li><a href="https://www.google.com/url?q=https://support.apple.com/en-us/HT201265&sa=D&source=editors&ust=1628067340672000&usg=AOvVaw3GP58HMGSkNyfg8gBxb6Tc"  target="_blank" rel="noopener" >Safari (Mobile)</a></li>
        </ul>
        <p style={{textAlign: 'justify'}}>&nbsp;</p>
        <ol start={7}><li>HOW OFTEN WILL WE UPDATE THIS COOKIE POLICY?</li>
        </ol>
        <p style={{textAlign: 'justify'}}>We may update this Cookie Policy from time to time to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies. The date at the bottom of this Cookie Policy indicates when it was last updated.</p>
        <p style={{textAlign: 'justify'}}>&nbsp;</p>
        <ol start={8}><li>WHERE CAN YOU GET FURTHER INFORMATION?</li>

        </ol>
        <p style={{textAlign: 'justify'}}>If you have any questions about our use of cookies or other technologies, please email Us at help@mailmodo.com</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
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
