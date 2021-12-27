import React from "react";
import Head from "next/head";
import styles from '../../assets/gdpr.module.scss'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
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
    const [value, setValue] = React.useState(3);
    const router = useRouter()

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
    <Head>
    <style>{'body{background-color:#ffff !important;}'}</style>
    </Head>
    <NextSeo
    title={`General Data Protection Regulation (GDPR) Compliance`}
    description= {`Mailmodo's tools and resources allow you to comply with the GDPR and gather consent easily for your marketing campaigns.`}
    canonical={`https://www.mailmodo.com/${router.asPath}`}
    keywords={" "}
    openGraph={{
    url: `https://www.mailmodo.com/${router.asPath}`,
    title: `General Data Protection Regulation (GDPR) Compliance`,
    description: `Mailmodo's tools and resources allow you to comply with the GDPR and gather consent easily for your marketing campaigns.`,
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
    <TabPanel value={value} index={3}>
    <div className="layout-gap"></div>
    <div className={styles.gdpr_detail+" w-100-center"}>
    <h1>GDPR Compliance 🛡️</h1>
            <p style={{textAlign: 'justify',padding:"0"}}>&nbsp;</p>
            <span className={styles.dates} style={{float:"left"}}>LAST UPDATED ON: AUGUST 3RD, 2021</span>
        <p style={{textAlign: 'justify'}}>&nbsp;</p>

<p>
<h2>Our Commitment to GDPR Rules</h2>
</p>


          <p>
          GDPR Law is the landmark step for the privacy and security concerns by the European Union.<br/>
          Mailmodo Technologies Inc as a registered entity is duly committed to the norms and regulations to maintain the status of a GDPR compliant organization. We are strictly careful about the privacy and security of the data and key information used on our platform.          </p>
          <p>
          Please read below our implementation plan to be GDPR Compliant.
          </p>

          <p>
            <h2>Our Privacy Policy</h2>
          </p>
          <p>
          We have updated our privacy policy, with the essential features of GDPR compliances. Our Privacy policy explicitly explains how the data is processed on the platform and how one can raise a request for inquiries or feedback on personal data protection policies and procedures. 
          </p>
<p>
<a href="https://mailmodo.com/gdpr/privacypolicy">Learn More →</a>
</p>



          <p>
            <h2>Our Cookie Policy</h2>
          </p>
          <p>
          We have updated our cookie policy as well. It can be referred to read the detailed explanation on the type of cookies we store to make the experience better and personalized for the users. We have also installed a cookie management system, which asks the user to opt-in or manage their preferences regarding the cookies on our website when they visit the first time.
          </p>
          <p>
          <a href="https://mailmodo.com/gdpr/cookiepolicy">Learn More →</a>
          </p>


          <p>
            <h2>Our Data Processing Agreements</h2>
          </p>
          <p>
          We have extensively formalized our DPAs for our clients and the vendors to create a secure system that would ensure no breach of GDPR norms and regulations. You can request at <a href="mailto:help@mailmodo.com">help@mailmodo.com</a> to learn more about DPA and associated documents.</p>

          <p>
            <h2>Additional Information</h2>
          </p>
          <p>
          We would regularly be updating the documents when required to maintain transparency on anything related to data and privacy. Moreover, if you wish to learn more regarding GDPR and policies, do refer to the official website <a href="https://gdpr.eu/what-is-gdpr/">here</a>. And If there's anything that still needs to be understood, feel free to drop an email at <a href="mailto:help@mailmodo.com">help@mailmodo.com</a> to have all the answers.
          </p>


    </div >
 
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
