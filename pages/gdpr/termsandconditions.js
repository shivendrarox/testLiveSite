import React from "react";
import Head from "next/head";
import styles from '../../assets/gdpr.module.scss'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
    const [value, setValue] = React.useState(2);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
    <Head>
    <style>{'body{background-color:#ffff !important;}'}</style>
    </Head>
    <NextSeo
    title={`Terms and Services | Mailmodo`}
    description= {`Information about terms and conditions to use Mailmodo regarding communications, subscriptions, free trials, etc.`}
    canonical={`https://www.mailmodo.com/gdpr/termsandconditions/`}
    keywords={" "}
    openGraph={{
    url: `https://www.mailmodo.com/gdpr/termsandconditions/`,
    title: `Terms and Services | Mailmodo`,
    description: `Information about terms and conditions to use Mailmodo regarding communications, subscriptions, free trials, etc.`,
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
    <TabPanel value={value} index={2}>
    <div className="layout-gap"></div>
    <div className={styles.terms_detail+" w-100-center"}>
    <h1>Terms of Service 📜</h1>
            <p style={{textAlign: 'justify',padding:"0"}}>&nbsp;</p>
            <span className={styles.dates} style={{float:"left"}}>LAST UPDATED ON: AUGUST 3RD, 2021</span>
        <p style={{textAlign: 'justify'}}>&nbsp;</p>


            <h2>   1. Introduction</h2>

          <p>
            <strong> Welcome to Mailmodo Technologies Inc</strong> (“Company”, “we”, “our”, “us”)!
</p>
          <p>
            These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at mailmodo.com (together or individually “Service”) operated by Mailmodo Technologies Inc.
</p>
          <p>
            Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.
</p>
          <p>
            Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound of them.
</p>
          <p>
            If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at help@mailmodo.com so we can try to find a solution.These Terms apply to all visitors, users and others who wish to access or use Service.
</p >
          <p>
            <h2>  2. Communications</h2>
          </p>
          <p>
            By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at help@mailmodo.com.
</p>
          <p>
            <h2>  3. Purchases</h2>
          </p>
          <p>
            If you wish to purchase any product or service made available through Service (“Purchase”), you may be asked to supply certain information relevant to your Purchase including but not limited to, your credit or debit card number, the expiration date of your card, your billing address, and your shipping information.
</p>
          <p>
            You represent and warrant that: (i) you have the legal right to use any card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
</p>
          <p>
            We may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.
</p>
          <p>
            We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.
</p>
          <p>
            We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.
</p>
          <p>
            <h2>   4. Contests, Sweepstakes and Promotions</h2>
          </p>
          <p>
            Any contests, sweepstakes or other promotions (collectively, “Promotions”) made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.
</p>
          <p>
            <h2> 5. Subscriptions</h2>
          </p>
          <p>
            Some parts of Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles will be set depending on the type of subscription plan you select when purchasing a Subscription.
</p>
          <p>
            At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or Mailmodo Technologies Inc cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting help@mailmodo.com customer support team.
</p>
          <p>
            A valid payment method is required to process the payment for your subscription. You shall provide Mailmodo Technologies Inc with accurate and complete billing information that may include but not limited to full name, address, state, postal or zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize Mailmodo Technologies Inc to charge all Subscription fees incurred through your account to any such payment instruments.
</p>
          <p>
            Should automatic billing fail to occur for any reason, Mailmodo Technologies Inc reserves the right to terminate your access to the Service with immediate effect.
</p>
          <p>
            <h2>  6. Free Trial</h2>
          </p>
          <p>
            Mailmodo Technologies Inc may, at its sole discretion, offer a Subscription with a free trial for a limited period of time ("Free Trial").
</p>
          <p>
            You may be required to enter your billing information in order to sign up for Free Trial.
</p>
          <p>
            If you do enter your billing information when signing up for Free Trial, you will not be charged by Mailmodo Technologies Inc until Free Trial has expired. On the last day of Free Trial period, unless you cancelled your Subscription, you will be automatically charged the applicable Subscription fees for the type of Subscription you have selected.
</p>
          <p>
            At any time and without notice, Mailmodo Technologies Inc reserves the right to (i) modify Terms of Service of Free Trial offer, or (ii) cancel such Free Trial offer.
</p>
          <p>
            <h2>  7. Fee Changes</h2>
          </p>
          <p>
            Mailmodo Technologies Inc, in its sole discretion and at any time, may modify Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.
</p>
          <p>
            Mailmodo Technologies Inc will provide you with a reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.
</p>
          <p>
            Your continued use of Service after Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.
</p>
          <p>
            <h2> 8. Refunds</h2>
          </p>
          <p>
            We issue refunds for Contracts within 0 days of the original purchase of the Contract.
</p >
        <p>
          <h2>  9. Content</h2>
        </p>
        <p>
          Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (“Content”). You are responsible for Content that you post on or through Service, including its legality, reliability, and appropriateness.
</p>
        <p>
          By posting Content on or through Service, You represent and warrant that: (i) Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.
</p>
        <p>
          You retain any and all of your rights to any Content you submit, post or display on or through Service and you are responsible for protecting those rights. We take no responsibility and assume no liability for Content you or any third party posts on or through Service. 
          </p>
        <p>
          Mailmodo Technologies Inc has the right but not the obligation to monitor and edit all Content provided by users.
</p>
        <p>
          In addition, Content found on or through this Service are the property of Mailmodo Technologies Inc or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.
</p>
        <p>
          <h2>  10. Prohibited Uses</h2>
        </p>
        <p>
          You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:
</p>
        <p>
          0.1. In any way that violates any applicable national or international law or regulation.
</p>
        <p>
          0.2. For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.
</p>
        <p>
          0.3. To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail”, “chain letter,” “spam,” or any other similar solicitation.
</p>
        <p>
          0.4. To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.
</p>
        <p>
          0.5. In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.
</p>
        <p>
          0.6. To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability.
</p>
<p>
          0.7. To send any unsolicited emails to any person or any email who have not opted in to receive your emails.
  </p>
 <p>
          Additionally, you agree not to:
</p>
        <p>
          0.1. Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other party’s use of Service, including their ability to engage in real time activities through Service.
</p>
        <p>
          0.2. Use any robot, spider, or other automatic device, process, or means to access Service for any purpose, including monitoring or copying any of the material on Service.
</p>
        <p>
          0.3. Use any manual process to monitor or copy any of the material on Service or for any other unauthorized purpose without our prior written consent.
</p>
        <p>
          0.4. Use any device, software, or routine that interferes with the proper working of Service.
</p>
        <p>
          0.5. Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.
</p>
        <p>
          0.6. Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the server on which Service is stored, or any server, computer, or database connected to Service.
</p>
        <p>
          0.7. Attack Service via a denial-of-service attack or a distributed denial-of-service attack.
</p>
        <p>
          0.8. Take any action that may damage or falsify Company rating.
</p>
        <p>
          0.9. Otherwise attempt to interfere with the proper working of Service.
</p>
        <p>
          <h2>  11. Analytics</h2>
        </p>
        <p>
          We may use third-party Service Providers to monitor and analyze the use of our Service.
</p>
        <p>
          <h2>  12. No Use By Minors</h2>
        </p>
        <p>
          Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using Service, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of Terms. If you are not at least eighteen (18) years old, you are prohibited from both the access and usage of Service.
</p>
        <p>
          <h2> 13. Accounts</h2>
        </p>
        <p>
          When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on Service.
</p>
        <p>
          You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
</p>
        <p>
          You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar or obscene.
</p>
        <p>
          We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.
</p>
        <p>
          <h2>   14. Intellectual Property</h2>
        </p>
        <p>
          Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Mailmodo Technologies Inc and its licensors. Service is protected by copyright, trademark, and other laws of and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of Mailmodo Technologies Inc.
</p>
        <p>
          <h2>  15. Copyright Policy</h2>
        </p>
        <p>
          We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Service infringes on the copyright or other intellectual property rights (“Infringement”) of any person or entity.
</p>
        <p>
          If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to help@mailmodo.com, with the subject line: “Copyright Infringement” and include in your claim a detailed description of the alleged Infringement as detailed below, under “DMCA Notice and Procedure for Copyright Infringement Claims”
</p>
        <p>
          You may be held accountable for damages (including costs and attorneys’ fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through Service on your copyright.
</p>
        <p>
          <h2> 16. DMCA Notice and Procedure for Copyright Infringement Claims</h2>
        </p>
        <p>
          You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):
</p>
        <p>
          0.1. an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright’s interest;
</p>
        <p>
          0.2. a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;
</p>
        <p>
          0.3. identification of the URL or other specific location on Service where the material that you claim is infringing is located;
</p>
        <p>
          0.4. your address, telephone number, and email address;
</p>
        <p>
          0.5. a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;
</p>
        <p>
          0.6. a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner’s behalf.
</p>
        <p>
          You can contact our Copyright Agent via email at help@mailmodo.com.
</p>
        <p>
          <h2> 17. Error Reporting and Feedback</h2>
        </p>
        <p>
          You may provide us either directly at help@mailmodo.com or via third party sites and tools with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service (“Feedback”). You acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose.
</p>
        <p>
          <h2> 18. Links To Other Web Sites</h2>
        </p>
        <p>
          Our Service may contain links to third party web sites or services that are not owned or controlled by Mailmodo Technologies Inc.
</p>
        <p>
          Mailmodo Technologies Inc has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
</p>


        <p >
          YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB SITES OR SERVICES.
</p>
        <p>
          WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.
</p>
        <p>
          <h2>  19. Disclaimer Of Warranty</h2>
        </p>
        <p>
          THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
</p>
        <p>
          NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
</p>
        <p>
          COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.
</p>
        <p>
          THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
</p>
        <p>
          <h2>  20. Limitation Of Liability</h2>
        </p>
        <p>
          EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
</p>
        <p>
          <h2> 21. Termination</h2>
        </p>
        <p>
          We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.
</p>
        <p>
          If you wish to terminate your account, you may simply discontinue using Service.
</p>
        <p>
          All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
</p>
        <p>
          <h2>  22. Governing Law</h2>
        </p>
        <p>
          These Terms shall be governed and construed in accordance with the laws of India, which governing law applies to agreement without regard to its conflict of law provisions.
</p>
        <p>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service.
</p>
<p style={{textAlign:"justify"}}>&nbsp;</p>
<p>
<h2>Service Agreement</h2>

</p>


        <p>
          All services provided by Mailmodo may be used for lawful purposes only. Transmission or storage of any information, data or material in violation of any United States Federal, State or City law is prohibited. This includes, but is not limited to: copyrighted material, material legally judged to be threatening or obscene, or material protected by trade secret and other statute. The subscriber agrees to indemnify and hold harmless Mailmodo from any claims resulting from the use of the service which damages the subscriber or any other parties.
</p>
        <p>
          Spamming, or the sending of unsolicited email, using an email address, URL that is maintained on an Mailmodo machine, or directing traffic to a webpage that contains any reference to Mailmodo is STRICTLY prohibited. Mailmodo will be the sole arbiter as to what constitutes a violation of this provision. This action WILL RESULT in immediate termination of your account without refund. Any service interruptions as a result of subscribers spamming will be billed to the subscriber at $50.00 per hour until service is restored. Subscriber will also be in violation of the Mailmodo Service Agreement and subject to legal action.
</p>
        <p>
          Importing or in any way using purchased leads with an Mailmodo account is strictly prohibited. If you paid money or in any way purchased a group of pre-existing leads these may not be used with Mailmodo. This includes co-registration services, "safe lists" or any type of free leads given to you. Only people that have specifically requested information directly from you may be emailed through Mailmodo.
</p>
        <p>
          Batching or in any way trying to script the addition of new subscribers to the web form subscribe methods is strictly forbidden. A script must not be used to auto submit a web form subscriber on behalf of a website visitor. The visitor who desires to subscribe to your list must be the one to activate that subscription process.
</p>
        <p>
          No individual under the age of sixteen (16) may use the Services, provide any personal information to Mailmodo, or otherwise submit personal information through Mailmodo Services (including, for example, a name, address, telephone number, or email address).
</p>
        <p>
          Pornography and sex-related merchandising are prohibited on any Mailmodo server. Mailmodo will be the sole arbiter as to what constitutes a violation of this provision.
</p>
        <p>
          The collecting of personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade-union membership, and the processing of genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person's sex life or sexual orientation is prohibited. Mailmodo will be the sole arbiter as to what constitutes a violation of this provision.
</p>
        <p>
          The subscriber agrees that the company has the right to delete all data, files or other information that is stored in the subscriber's account if the subscriber's account with the company is terminated, for any reason, by either Mailmodo or the subscriber. System accounts can not be transferred or used by anyone other than the subscriber. Accounts which have been transferred to other parties, or show other activity in violation of this paragraph, are subject to immediate cancellation.
</p>
        <p>
          Mailmodo shall have the right to suspend service to the subscriber at any time, and for any reason, without notice. If such a suspension is to last for more than 20 days, the subscriber will be notified as to the reason.
</p>
        <p>
          Service provided by Mailmodo may be cancelled in writing at any time with no penalty. Customer Account Login/Email and Response to Security Question must be included in the cancellation request. Cancellation will take effect only when the receipt of the cancellation request is confirmed by Mailmodo. Mailmodo reserves the right to change the rate by notifying the subscriber 15 days in advance of the effective date of the change.
</p>
        <p>
          Mailmodo exercises no control whatsoever over the content of the information passing through Mailmodo. All leads (email addresses) generated by subscribers are held strictly confidential. The leads are never released to any other parties for any purpose. The lead information is only used on Mailmodo' servers to deliver the follow up messages designated by the subscriber.
</p>
        <p>
          Customers are prohibited from transmitting on or through any of Mailmodo' services, any material that is, in Mailmodo' sole discretion, unlawful, obscene, threatening, abusive, libelous, or hateful, or that encourages conduct which would constitute a criminal offense, give rise to civil liability, or otherwise violate any local, state, national or international law.
</p>
        <p>
          <h2> 1. Changes To Service</h2>
        </p>
        <p>
          We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Service, or the entire Service, to users, including registered users.
</p>
        <p>
          <h2> 2. Amendments To Terms</h2>
        </p>
        <p>
          We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.
</p>
        <p>
          Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
</p>
        <p>
          By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Service.
</p>
        <p>
          <h2>3. Waiver And Severability</h2>
        </p>
        <p>
          No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision.
</p>
        <p>
          If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of Terms will continue in full force and effect.
</p>
        <p>
          <h2>4. Acknowledgement</h2>
        </p>
        <p>
          BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
</p>
        <p>
          <h2>5. Contact Us</h2>
        </p>
        <p style={{textTransform:"none"}}>
          Please send your feedback, comments, requests for technical support by email: <strong><a href="mailto:help@mailmodo.com">help@mailmodo.com</a></strong>.
</p>
        <p>
          Our Corporate address
</p>
        <p style={{textTransform:"none"}}>
          Mailmodo Technologies Inc.
</p>
        <p style={{textTransform:"none"}}>
        355 Bryant Street, Unit 403
</p>
        <p style={{textTransform:"none"}}>
        San Francisco, CA 94107
</p>
        <p style={{textTransform:"none"}}>
          USA
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
