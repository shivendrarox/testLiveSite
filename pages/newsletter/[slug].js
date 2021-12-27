import { NextSeo, ArticleJsonLd } from 'next-seo'

import Link from 'next/link';
import Head from 'next/head';
import React, { useEffect, useState } from "react";
import { getNewsletterPagesBySlug, getImageUrl, getAllNewsletterPageSlugs, getRecentNewsletters, } from '../../lib/strapiApi';
import styles from '../../assets/newsletter/newsletter-slug-redesign.module.scss';
import Iframe from 'react-iframe'
import leftbtn from '../../static/images/newsletter/left-arrow.svg';
import rightbtn from '../../static/images/newsletter/right-arrow.svg';
import fb from '../../static/images/newsletter/facebook.svg';
import twitter from '../../static/images/newsletter/twitter.svg';
import pinterest from '../../static/images/newsletter/pinterest.svg';
import spotify from '../../static/images/newsletter/spotify.svg';
import apple from '../../static/images/newsletter/apple.svg';


import google from '../../static/images/newsletter/google.svg';
import Image from 'next/image';
import SampleEmailSlug from '../../components/newsletterComponents/SampleEmailSlug/SampleEmail';
import SampleEmail from '../../components/newsletterComponents/SampleEmail/SampleEmail';

import SignupButton from "../../components/commonComponent/SignupButton";
import 'react-h5-audio-player/lib/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Breadcrumb from '../../components/commonComponent/Breadcrumb/Breadcrumb';
import Whatsapp from './../../static/images/icon/whatsapp-colored.svg'
import Linkedin from './../../static/images/icon/linkedin-colored.svg'
import { useRouter } from 'next/router'

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

const Page = ({ slug, latest, newsletterPageData, totalCards }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openSubscribe, setOpenSubscribe] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenSubscribe = () => {
    setOpenSubscribe(true);
  };

  const handleCloseSubscribe = () => {
    setOpenSubscribe(false);
  };
  //Floating CTA Logics
  const [floatingCTA, setFloatingCTA] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const handleScroll = (e) => {
    let box = document.getElementById("homepage-banner");
    // let width = box.offsetWidth;
    let height = box?.offsetHeight;
    if (window.scrollY > 400) setFloatingCTA(true);
    else setFloatingCTA(false);
  };
  //Floating CTA Logics END
  const router = useRouter()

  return (
    <>
      <Head>
        <style>{'body{font-family:Inter !important;}'}</style>
      </Head>

      <ArticleJsonLd
                url={`https://www.mailmodo.com/newsletter/${slug}/`}
                title={newsletterPageData.Seo?.title??" "}
                images={[(newsletterPageData.Seo?.shareImage?.image?.url)?getImageUrl(newsletterPageData.Seo?.shareImage?.image.url):`https://www.mailmodo.com/static/images/og-image.png` ]}
                datePublished={newsletterPageData.PublishedOn??" "}
                dateModified={newsletterPageData.Seo?.updatedAt??" "}
                authorName={ "Mailmodo"}
                publisherName="Mailmodo"
                publisherLogo="https://www.mailmodo.com/static/images/logo/logo-full.svg"
                description={newsletterPageData.Seo?.description??` `}
                />  

            <NextSeo
                title={newsletterPageData.Seo?.title??` `}
                description= {newsletterPageData.Seo?.description??` `}
                canonical={`https://www.mailmodo.com/newsletter/${slug}/`}
                keywords={newsletterPageData.Seo?.keywords??" "}
                openGraph={{
                    url: `https://www.mailmodo.com/newsletter/${slug}/`,
                    title: newsletterPageData.Seo?.title??` `,
                    description: newsletterPageData.Seo?.description??` `,
                    type: 'Article',
                    locale: 'en_US',
                    article: {
                        authors: ['Mailmodo'],
                        publishedTime: newsletterPageData.PublishedOn??" ",
                        modifiedTime: newsletterPageData.Seo?.updatedAt??" "
                    },
                    images: [{ url: (newsletterPageData.Seo?.shareImage?.image?.url)?getImageUrl(newsletterPageData.Seo?.shareImage?.image.url):`https://www.mailmodo.com/static/images/og-image.png` }],
                }}
                twitter={{
                    handle: '@mailmodo',
                    site: 'twitter.com/mailmodo',
                    cardType: 'summary_large_image',
                  }}
            />   
      {/* Floating CTA */}
      {/* <div className="home-page">
        <div className={`cta-email ${floatingCTA && "floating-cta"}`}>
          <div className="col-8 mx-auto d-md-flex align-items-center justify-content-center px-0 px-md-3 d-none d-md-flex">
            <div className="logo-cta d-none d-md-block">
              <img title="mm logo" alt="mailmodo" src="/static/images/logo.svg" />
            </div>
            <p className="cta-text text-center text-left">
              Create & Send Actionable Emails
            </p>
            <div className=" d-flex align-items-center justify-content-center">

              <SignupButton btn_text={"Sign Up"} trackingId={'email_sticky_home'} />
            </div>
          </div>
          <div className="justify-content-end d-md-flex align-items-center mobile-sticky-footer d-md-none d-md-flex">
            <div className="logo-cta d-none d-md-block">
              <img alt="mailmodo" src="/static/images/logo.svg" />
            </div>
            <p className="cta-text text-center text-left pr-3 pb-0">
              Create & Send Actionable Emails
            </p>
            <div className=" d-flex align-items-center justify-content-center">
            </div>
          </div>
        </div>

      </div> */}
      {/* Floating CTA  END*/}
       

      <div>
      {/* <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
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
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Get notified for latest updates</h2>

            <div className={styles.cta_modal + "  "}>
                            <SampleEmail
                                usecase="Newsletter"
                                campaignId=""
                                trackingId = "Newsletter"
                                />
                        </div>
          </div>
        </Fade>
      </Modal>
    
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openSubscribe}
        onClose={handleCloseSubscribe}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openSubscribe}>
          <div className={styles.subscribe_modal}>
            <h2 id="transition-modal-title">Listen to this podcast on</h2>
            {/* <p id="transition-modal-description">react-transition-group animates me.</p> */}
            <div className={styles.icon_list_container}>
              <ul>
                <Link href={`https://open.spotify.com/show/41rlqC731UXmrm7m5qRpH9`}><li><img title="spotify logo" alt="spotify" src={spotify}></img> Spotify</li></Link>
                <Link href={`https://podcasts.apple.com/us/podcast/the-growth-chat/id1583912971`}><li><img title="apple logo" alt="apple" src={apple}></img> Apple</li></Link>
                <Link href={`https://podcasts.google.com/u/3/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xNzcxODQ0LnJzcw`}><li><img title="google logo" alt="google" src={google}></img> Google</li></Link>
              </ul>
            </div>
          </div>
        </Fade>
      </Modal>
   
    </div>
      <div className={styles.custom_container}>
      <div className="container">
        <div className={styles.Breadcrumb_container} style={{width:"50%",float:'left'}}>
        <Breadcrumb/>

        </div>
        <div className={styles.share_container}>
        <ul>
                <li>Share : </li>
                <Link href={`https://www.facebook.com/sharer/sharer.php?u=https://www.mailmodo.com/newsletter/${slug}/`}><li><img title="fb logo" alt="facebook" src={fb}></img></li></Link>
                <Link href={`https://twitter.com/intent/tweet?url=https://www.mailmodo.com/newsletter/${slug}/&text=`}><li><img title="twitter logo" alt="twitter" src={twitter}></img></li></Link>
                <Link href={`https://pinterest.com/pin/create/button/?url=https://www.mailmodo.com/newsletter/${slug}/&media=&description=`}><li><img title="pinterest logo" alt="pinterest" src={pinterest}></img></li></Link>
                <Link href={`https://wa.me/?text=https://mailmodo.com/newsletter/${slug}`}><li><img title="whatsapp logo" alt="whatsapp" src={Whatsapp}></img></li></Link>
                <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=https://mailmodo.com/newsletter/${slug}`}><li><img  title="linkedin logo" alt="linkedin" src={Linkedin}></img></li></Link>
              </ul>
        </div>
      </div>
      <div className="layout-padding"></div>
      <div className={styles.description_block}>
        <div className="container">
        <h1>{newsletterPageData.title}</h1>
        {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae urna id ipsum cursus ornare nec non diam. Phasellus congue mi ut ex efficitur tristique. Sed lacinia pharetra tortor, vitae fringilla eros feugiat sit amet. Sed vehicula ante sed lacus tempor scelerisque. Phasellus blandit arcu diam, sit amet consequat sapien aliquam vel. Vestibulum porta orci et ligula iaculis sodales. Nulla scelerisque eros a blandit luctus... See more
        </p> */}
        {/* <div className={styles.podcast_listen_container}>
              <ul>
                <li>Listen On</li>
                <Link href={`https://open.spotify.com/show/41rlqC731UXmrm7m5qRpH9`}><li><img src={spotify}></img></li></Link>
                <Link href={`https://podcasts.apple.com/us/podcast/the-growth-chat/id1583912971`}><li><img src={apple}></img></li></Link>
                <Link href={`https://podcasts.google.com/u/3/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xNzcxODQ0LnJzcw`}><li><img src={google}></img></li></Link>
                <li  onClick={ handleOpenSubscribe }><img src={more_options}></img></li>
              </ul>
        </div> */}
        <div style={{paddingBottom:"1em"}}></div>
        <button onClick={handleOpen} className={styles.subscribe_modal_btn}>Get Notified</button>
        </div>

      </div>
      <div className={styles.mail_content}>
                <div className="container">
                    <div className={styles.center_flex_container}>
                        <div className={styles.button_container}>
                        {parseInt(router.asPath.split('/')[2].split('-')[1]) >1 &&
                            <Link passHref href={`/newsletter/edition-${parseInt(router.asPath.split('/')[2].split('-')[1])-1}`}>
                              <a>
                              <img title="right button image" alt="right button" src={rightbtn}></img>
                              </a>
                            </Link>}
                        </div>
                        <div className={styles.iframe_container}>
                        <div style={{width:"90%"}}>
                        <p className={styles.mm_badge} style={{float:"right"}}><Link href="https://manage.mailmodo.com">Made with 💚 in Mailmodo Editor</Link></p>
        </div>

                            <Iframe
                                url={newsletterPageData.renderUrl}
                                height="800px"
                                width="90%"
                                id="iframe_newsletter"
                                className=""
                                display="initial"
                                position="relative"
                                sandbox="allow-scripts"
                            ></Iframe>
                        </div>
                        <div className={styles.button_container}>
                        {parseInt(router.asPath.split('/')[2].split('-')[1]) <= (totalCards-1) &&
                            <Link passHref href={`/newsletter/edition-${parseInt(router.asPath.split('/')[2].split('-')[1])+1}`}>
                              <a>
                              <img title="left button image" alt="left button" src={leftbtn} ></img>
                              </a>
                            </Link>}
                        </div>
                    </div>
                </div>
            </div>

      <div className="layout-padding"></div>
      <div className="container">
      {/* <div className={styles.episodes_block}>
        <h2>36 Episodes</h2>
        <hr/>
        <div className={styles.card_block}>
          <div className={styles.card_img_container}>
            <div style={{ position: 'relative', width: '156px', height: '156px' }}>
              <Image
                alt="podcast image"
                src={'https://res.cloudinary.com/mailmodo/image/upload/v1630575120/strapi/giphy_5dfebfa90b.gif'}
                layout="fill"
                objectFit="contain"
              />
              <img style={{right: '0%',bottom: '0%',position: 'absolute'}} src={thumb_play}></img>
            </div>
          </div>
          <div className={styles.card_matter_container}>
            <h2 className={styles.heading}>Trailer: The Growth Chat</h2>
            <p className={styles.matter}>
            Episode description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae urna id ipsum cursus ornare nec non diam. Phasellus congue mi ut ex efficitur tristique. Sed lacinia pharetra tortor, vitae fringilla eros feugiat sit amet. Sed vehicula ante... 
            </p>
            <p className={styles.date}>1st Sep, 2021 · 25 min</p>
          </div>
        </div>
        <hr/>
        <div className={styles.card_block}>
          <div className={styles.card_img_container}>
            <div style={{ position: 'relative', width: '156px', height: '156px' }}>
              <Image
                alt="podcast image"
                src={'https://res.cloudinary.com/mailmodo/image/upload/v1630575120/strapi/giphy_5dfebfa90b.gif'}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={styles.card_matter_container}>
            <h2 className={styles.heading}>Trailer: The Growth Chat</h2>
            <p className={styles.matter}>
            Episode description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae urna id ipsum cursus ornare nec non diam. Phasellus congue mi ut ex efficitur tristique. Sed lacinia pharetra tortor, vitae fringilla eros feugiat sit amet. Sed vehicula ante... 
            </p>
            <p className={styles.date}>1st Sep, 2021 · 25 min</p>
          </div>
        </div>
 
      </div> */}
      </div>
      <div className="layout-gap"></div>
      <div className={styles.more_videos_block}>
        <div className="container">
          <h2 className={styles.heading}>More Newsletters</h2>
          <div style={{paddingBottom:"0.5em"}}></div>

          <div className={styles.more_videos_list_container}>
            {latest.map((item,index)=>{
              return(
                <>
                <Link href={`/newsletter/${item.slug??" "}`}>
                            <div className={styles.more_video_card}>
            <div className={styles.more_video_card_img} style={{ position: 'relative', width: '196px', height: '196px' }}>
              <Image
                alt="podcast image"
                title="podcast image thumbnail"
                src={item.thumbnail?.url??"https://res.cloudinary.com/mailmodo/image/upload/v1632463966/strapi/traffic_signs_361514_1920_fd83e3b51d.png"}
                layout="fill"
                objectFit="fill"
              />
            </div>
              <div className={styles.more_video_card_matter}>
                <h3>{item.title}</h3>
              </div>
            </div>
            </Link>
                </>
              )
            })}


          </div>
        </div>

      </div>
      <div className="layout-gap"></div>

      <div className="container">
      <div className={styles.newsletter_footer}>
            <div className="layout-gap"></div>

            <h2>Subscribe to receive our newsletter in your inbox</h2>
            <div className="layout-padding"></div>
            <div className={styles.cta_container}>

            <div className={styles.cta + "  "}>
                            <SampleEmailSlug
                                usecase="newsletter-slug"
                                campaignId=""
                                trackingId = "newsletter-slug"
                                />
                        </div>
 
            </div>
            <div className="layout-gap"></div>

            </div>
 
      </div>
      <div className="layout-gap"></div>

      </div>
 
    </>
  )
}

// pass props to Page component
export async function getStaticProps(context) {


  const slug = context.params.slug // get slug from params
  const newsletterPageData = await getNewsletterPagesBySlug(slug)
  const latest = await getRecentNewsletters();
  const allSlugs = await getAllNewsletterPageSlugs();
  const totalCards = allSlugs.length;

  return {
      props: { slug, latest, newsletterPageData, totalCards }
  };
}

// generate HTML paths at build time
export async function getStaticPaths(context) {

  const slugs = await getAllNewsletterPageSlugs();
  return {
      paths: slugs.map((slug) => {
          return {
              params: {
                  slug: slug
              },
          };
      }),
      fallback: false,
  };
}
export default Page;