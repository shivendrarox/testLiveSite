import styles from "./part3.module.scss";
import  Space from 'antd/lib/space/index';
import 'antd/lib/space/style/index.css';
import Collapse from 'antd/lib/collapse/index';
import 'antd/lib/collapse/style/index.css';
import Icon from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import { getImageUrl } from '../../../lib/strapiApi';

const { Panel } = Collapse;
const FaqChevronSvg = () => (
    <svg width="15" height="9" viewBox="0 0 15 9" fill="none">
        <path d="M1 1.41602L7.5 7.60649L14 1.41602" stroke="#929292" stroke-width="2"/>
    </svg>
  );
const FaqChevronSvgIcon = props => <Icon component={FaqChevronSvg} {...props} />;

const Part3 = () =>{
    return(
        <>
                <div className={styles.card_fold} >
<h2 className={styles.heading}>We’ve designed our platform for you</h2>
{/* <h2 className={styles.heading}>Check how Mailmodo helps Developers & Shopify Merchants</h2> */}
<div className={styles.card_container}>
    <div className={styles.card}>
        <div className={styles.hide_mobile} style={{display:"flex",justifyContent:"center",width:"100%"}}>
            <Image
            alt="Mailmodo for Developers image"
            height="214"
            width="331"
            src={ ('https://res.cloudinary.com/mailmodo/image/upload/v1637330700/strapi/for_developers_748540d332.svg')}
            />
        </div>
        <h3>Mailmodo for Developers</h3>
        <p>
        Mailmodo’s developer API is designed to help developers enable triggered interactive emails, add, modify or delete contacts and trigger automated email journeys from scratch in a minimum setup time without coding.
        </p>
        <a href="https://www.mailmodo.com/developers/ZG9jOjE2MjM4MTIy-getting-started-with-mailmodo-api" >Learn more &nbsp; &nbsp;&#x203A;</a>
    </div>

    <div className={styles.card+" "+styles.bg_shadow}>
    <div className={styles.hide_mobile} style={{display:"flex",justifyContent:"center",width:"100%"}}>
            <Image
                                        alt="Mailmodo for Shopify image"
            height="214"
            width="331"
            src={ ('https://res.cloudinary.com/mailmodo/image/upload/v1637330735/strapi/for_shopify_21d3c3bc56.svg')}
            />
        </div>
        <h3>Mailmodo for Shopify</h3>
        <p>
        Mailmodo’s Shopify integration allows e-commerce owners and sellers to sync their Shopify contacts, send interactive cart emails and automate lifecycle email journeys through defined use cases, ready-made templates and an intuitive no-code experience.
        </p>
        <a href="https://www.mailmodo.com/features/shopify-email-marketing/" >Learn more &nbsp; &nbsp;&#x203A;</a>
    </div>

    <div className={styles.card}>
    <div className={styles.hide_mobile} style={{display:"flex",justifyContent:"center",width:"100%"}}>
            <Image
                                        alt="Mailmodo for Marketers image"
            height="214"
            width="331"
            src={ ('https://res.cloudinary.com/mailmodo/image/upload/v1637330801/strapi/for_marketers_d99f85319f.svg')}
            />
        </div>
        <h3>Mailmodo for Marketers</h3>
        <p>
        Built by marketers, Mailmodo is designed to help marketers engage their audience at every step of the funnel from lead generation to nurturing to upselling without tech intervention. Mailmodo integrates with your entire marketing stack, your CRM, marketing analytics tools and so on.
        </p>
        <a href="https://manage.mailmodo.com/auth/login" >Learn more &nbsp; &nbsp;&#x203A;</a>
    </div>
  
</div>
</div>

<div className={styles.faq_fold}>
<h2 className={styles.heading}>Frequently Asked Questions</h2>
<div className={styles.faq_container+" faq-fold-override"}>
<Space style={{width:"100%",gap:'11px'}} direction="vertical">
<Collapse
 ghost className={styles.tab_body} bordered={false} expandIconPosition={"right"} >
<Panel  extra={FaqChevronSvgIcon()} showArrow={false} header={<span className={styles.tab_title}>Does Mailmodo create/send only AMP emails?</span>} key="1">
    <p className={styles.tab_p}>
    Mailmodo enables but is not limited to creating and sending of AMP emails. You can create, send and automate both AMP and HTML email campaigns without any tech intervention.
    </p>
</Panel>
</Collapse>

<Collapse
 ghost className={styles.tab_body} bordered={false} expandIconPosition={"right"}  >
<Panel  extra={FaqChevronSvgIcon()} showArrow={false} header={<span className={styles.tab_title}>What is AMP for email?</span>} key="2">
    <p className={styles.tab_p}>
    AMP email is an open-source framework created by Google that allows emails to render and display dynamic elements like accordions, carousels, forms, calendars, shopping carts, dynamic APIs, etc. It creates a mini-website inside an email.
    </p>
</Panel>
</Collapse>

<Collapse
 ghost className={styles.tab_body} bordered={false} expandIconPosition={"right"} >
<Panel  extra={FaqChevronSvgIcon()} showArrow={false} header={<span className={styles.tab_title}>Are there any limitations of AMP emails?</span>} key="3">
    <p className={styles.tab_p}>
    AMP emails are just like any other emails except the fact that they come with several superpowers. Not every email client renders AMP emails though. At present, AMP email is supported by Gmail, GSuite, Yahoo and Mail.ru. If a user's email client doesn't support AMP emails, the recipient will see a plain HTML fallback email we provide options for.
    </p>
</Panel>
</Collapse>

<Collapse
 ghost className={styles.tab_body} bordered={false} expandIconPosition={"right"} >
<Panel  extra={FaqChevronSvgIcon()} showArrow={false} header={<span className={styles.tab_title}>Can I send AMP emails from my current platform? </span>} key="4">
    <p className={styles.tab_p}>
    Most likely, no. Most ESPs don’t support sending AMP emails. Nor can you import AMP emails to your current platform. Unfortunately, our email infrastructure does not work like that. But you can use both together with a range of triggers and integrations Mailmodo has. That way you can get the best of both worlds.
    </p>
</Panel>
</Collapse>

<Collapse
 ghost className={styles.tab_body} bordered={false} expandIconPosition={"right"} >
<Panel  extra={FaqChevronSvgIcon()} showArrow={false} header={<span className={styles.tab_title}>Do I have to switch from my current email tool to use Mailmodo?</span>} key="5">
    <p className={styles.tab_p}>
    Not necessarily. Mailmodo is a complete email marketing platform that offers the same functionality as your ESP. But if you’d prefer not to switch, Mailmodo offers a range of integrations with email tools, CRMs and marketing analytics platforms to make your experience seamless.
    </p>
</Panel>
</Collapse>

<Collapse
 ghost className={styles.tab_body} bordered={false} expandIconPosition={"right"} >
<Panel  extra={FaqChevronSvgIcon()} showArrow={false} header={<span className={styles.tab_title}>Can I send transactional emails with Mailmodo?</span>} key="6">
    <p className={styles.tab_p}>
    Of course. Mailmodo’s API for Transaction Email enables developers to set up transactional email campaigns using REST API without having to code the emails.
    </p>
</Panel>
</Collapse>
</Space>
</div>

</div>

<div className={styles.email_card_fold}>
<div className="container ">
    <div className={styles.email_card_container}>
        <div className={"row"}>
            <div className="col-md-6 px-0 ">
                <div className={styles.matter_block}>
                <p>Ready to get started?</p>
                <h2>Send 5000 emails/month for free.<br/> 
                Go crazy!
                </h2>
                <Link prefetch={false} href="https://manage.mailmodo.com/auth/signup" >
                <button>Get Started</button>
                </Link>
                </div>
                
            </div>
            <div className="col-md-6 px-0">
                {/* <div style={{width:"100%",marginBottom:"-11px"}} > */}
                <div className={styles.img_container} >
                <Image
                alt="email templates image"
                  height="362"
                  width="700"
                  src={'https://res.cloudinary.com/mailmodo/image/upload/v1637067281/strapi/Group_101390_2_6df0c84e98.png'}
                />
                </div>

            </div>

        </div>

    </div>
</div>
</div>

<div className={styles.awards_fold}>
<div className="container">
<div className={styles.awards_container}>
<div className="row">
  <div className={"col-md-6"}>

    <h2 className={styles.awards_h2}>
        Backed by
    </h2>
    {/* <div className="badge-cont">
        <img className="logo-yc" src="/static/images/yc.svg">
        </img>
        <img  className="logo-seq" src="/static/images/seq.svg">
        </img>
        <img  className="logo-al" src="/static/images/al.svg">
        </img>
    </div> */}
    <div className={styles.badge_container}>
    <Image
    alt="VC images"
      layout="responsive"
      width="611"
      height="40"
      alt="left-vc.svg"
      title="left vc"
      src={ getImageUrl("/static/images/left-vc.svg")}
    />
    </div>
    
  </div>

  <div className="col-md-6">

    <h2 className={styles.awards_h2}>
        Featured on
    </h2>

      <img loading="lazy" alt="logo-ph" className={styles.logo_ph} src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=281327&theme=light&period=daily" title="Mailmodo - Boost email conversions with interactive AMP emails. | Product Hunt"  />

      <img loading="lazy" alt="logo-g2" className={styles.logo_g2}  title="Mailmodo is a leader in Email Marketing on G2" src="/static/images/G2.svg" />
    

  </div>
</div>

</div>
</div>

</div>

        </>
    )
}
export default Part3