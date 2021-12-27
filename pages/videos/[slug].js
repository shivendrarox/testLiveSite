import { NextSeo, ArticleJsonLd } from 'next-seo'

import Link from 'next/link';
import Head from 'next/head';
import React, { useEffect, useState } from "react";
import { getVideoPagesBySlug, getImageUrl, getAllVideosPageSlugs, getRecentVideoPages, } from '../../lib/strapiApi';
import styles from '../../assets/video-pages/video-slug-redesign.module.scss';

import fb from '../../static/images/newsletter/facebook.svg';
import twitter from '../../static/images/newsletter/twitter.svg';
import pinterest from '../../static/images/newsletter/pinterest.svg';
import spotify from '../../static/images/newsletter/spotify.svg';
import apple from '../../static/images/newsletter/apple.svg';

import google from '../../static/images/newsletter/google.svg';
import ReactPlayer from 'react-player'
import Image from 'next/image';
import SampleEmail from '../../components/videopageComponents/SampleEmailSlug/SampleEmail';
import SignupButton from "../../components/commonComponent/SignupButton";

import 'react-h5-audio-player/lib/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Breadcrumb from '../../components/commonComponent/Breadcrumb/Breadcrumb';
import Whatsapp from './../../static/images/icon/whatsapp-colored.svg'
import Linkedin from './../../static/images/icon/linkedin-colored.svg'
import marked from 'marked';
import thumb_play from '../../static/images/podcast/thumb_play.svg';
import Moment from "react-moment";

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

const Page = ({ slug, latest, PageData }) => {
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

  return (
    <>
      <Head>
        <style>{'body{font-family:Inter !important;}'}</style>
      </Head>
      <ArticleJsonLd
                url={`https://www.mailmodo.com/videos/${slug}/`}
                title={PageData.Seo?.title??" "}
                images={[(PageData.Seo?.shareImage?.image?.url)?getImageUrl(PageData.Seo?.shareImage?.image.url):`https://www.mailmodo.com/static/images/og-image.png` ]}
                datePublished={PageData.PublishedOn??" "}
                dateModified={PageData.Seo?.updatedAt??" "}
                authorName={ "Mailmodo"}
                publisherName="Mailmodo"
                publisherLogo="https://www.mailmodo.com/static/images/logo/logo-full.svg"
                description={PageData.Seo?.description??` `}
                />  

            <NextSeo
                title={PageData.Seo?.title??` `}
                description= {PageData.Seo?.description??` `}
                canonical={`https://www.mailmodo.com/videos/${slug}/`}
                keywords={PageData.Seo?.keywords??" "}
                openGraph={{
                    url: `https://www.mailmodo.com/videos/${slug}/`,
                    title: PageData.Seo?.title??` `,
                    description: PageData.Seo?.description??` `,
                    type: 'Article',
                    locale: 'en_US',
                    article: {
                        authors: ['Mailmodo'],
                        publishedTime: PageData.PublishedOn??" ",
                        modifiedTime: PageData.Seo?.updatedAt??" "
                    },
                    images: [{ url: (PageData.Seo?.shareImage?.image?.url)?getImageUrl(PageData.Seo?.shareImage?.image.url):`https://www.mailmodo.com/static/images/og-image.png` }],
                }}
                twitter={{
                    handle: '@mailmodo',
                    site: 'twitter.com/mailmodo',
                    cardType: 'summary_large_image',
                  }}
            />  
      {/* Floating CTA */}
      <div style={{paddingBottom:"1em"}} className="home-page">
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
              <img title="mm logo" alt="mailmodo" src="/static/images/logo.svg" />
            </div>
            <p className="cta-text text-center text-left pr-3 pb-0">
              Create & Send Actionable Emails
            </p>
            <div className=" d-flex align-items-center justify-content-center">
            </div>
          </div>
        </div>

      </div>
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
                            <SampleEmail
                                usecase="Newsletter"
                                campaignId=""
                                trackingId = "Newsletter"
                                />
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
                <Link href={`https://podcasts.apple.com/us/podcast/the-growth-chat/id1583912971`}><li><img title="spplr logo" alt="apple" src={apple}></img> Apple</li></Link>
                <Link href={`https://podcasts.google.com/u/3/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xNzcxODQ0LnJzcw`}><li><img title="google logo" alt="google" src={google}></img> Google</li></Link>
              </ul>
            </div>
          </div>
        </Fade>
      </Modal>
   
    </div>
    <div className={styles.custom_container}>

      <div className="container">
        <div className={styles.hero_buttons_container}>
        <div className={styles.Breadcrumb_container} style={{width:"50%"}}>
        <Breadcrumb />

        </div>
        <div className={styles.share_container}>
              <ul>
                <li>Share : </li>
                <Link href={`https://www.facebook.com/sharer/sharer.php?u=https://www.mailmodo.com/videos/${slug??" "}/`}><li><img alt="fb" title="fb logo" src={fb}></img></li></Link>
                                <Link href={`https://twitter.com/intent/tweet?url=https://www.mailmodo.com/videos/${slug??" "}/&text=`}><li><img alt="twitter" title="twitter logo" src={twitter}></img></li></Link>
                                <Link href={`https://pinterest.com/pin/create/button/?url=https://www.mailmodo.com/videos/${slug??" "}/&media=&description=`}><li><img alt="pinterest" title="pinterest logo" src={pinterest}></img></li></Link>
                                <Link href={`https://wa.me/?text=https://mailmodo.com/videos/${slug??" "}`}><li><img alt="whatsapp" title="whatsapp logo" src={Whatsapp}></img></li></Link>
                                <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=https://mailmodo.com/videos/${slug??" "}`}><li><img alt="Linkedin" title="Linkedin logo" src={Linkedin}></img></li></Link>

              </ul>
        </div>

        </div>

        <div className={styles.player_header}>
          <div className={styles.menu_bar}>



            <div className={styles.menu_container}>
              <div className={styles.menu_heading}>
              <ReactPlayer playsinline={true} playing={false} className={styles.custom_video_player} height={"550px"} width={"100%"} controls={true} url={PageData.renderUrl??" "} />

              </div>
              {/* <div className={styles.menu_buttons}>
                            <SampleEmailSlugTop
                                usecase="video-slug"
                                campaignId=""
                                trackingId = "video-slug"
                            />
                        </div> */}

            </div>
          </div>
          {/* <div className="layout-padding"></div> */}
        </div>

      </div>
      <div className="layout-padding"></div>
      <div className={styles.description_block}>
        <div className="container">
        <h1>{PageData.title??" "}</h1>
        <div dangerouslySetInnerHTML={{ __html: marked(PageData.details??" ") }} >
        </div>
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
      <div className="layout-padding"></div>
      {/* <div className="container">
        <div className={styles.episodes_block}>
            <h2>1 Episode</h2>
            <hr/>
            <Link href="/videos/chase-dimond">
            <div className={styles.card_block}>
            <div className={styles.card_img_container}>
                <div style={{ position: 'relative', width: '156px', height: '156px' }}>
                <Image
                    alt="podcast image"
                    src={'https://storage.buzzsprout.com/variants/ncp1d6e9286d5bqw8vm6v7k7sy9o/b49cbe86cb411762753e730c58953bb88ad958a9d657212c074729b6f04e5463.jpg'}
                    layout="fill"
                    objectFit="contain"
                />
                <img style={{right: '0%',bottom: '0%',position: 'absolute'}} src={thumb_play}></img>
                </div>
            </div>
            <div className={styles.card_matter_container}>
                <h2 className={styles.heading}>Ecommerce Email Marketing with Chase Dimond</h2>
                <p className={styles.matter}>
                Episode description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae urna id ipsum cursus ornare nec non diam. Phasellus congue mi ut ex efficitur tristique. Sed lacinia pharetra tortor, vitae fringilla eros feugiat sit amet. Sed vehicula ante... 
                </p>
                <p className={styles.date}>1st Sep, 2021 · 25 min</p>
            </div>
            </div>
            </Link>
        </div>
        
      </div>
      
      <div className="layout-gap"></div>
       */}
      <div className={styles.more_videos_block}>
        <div className="container">
          <h2 className={styles.heading}>More videos</h2>
          {latest.map((item,index)=>{
            return(
                <>
        <hr/>
        <Link href={`/videos/${item.slug??" "}`}>
        <div className={styles.card_block}>
          <div className={styles.card_img_container}>
            <div style={{ position: 'relative', width: '300px', height: '200px' }}>
              <Image
                alt="podcast image"
                title="Podcast"
                src={item.thumbnail?.url??"https://res.cloudinary.com/mailmodo/image/upload/v1632463966/strapi/traffic_signs_361514_1920_fd83e3b51d.png"}
                layout="fill"
                objectFit="contain"
              />
              <img style={{right: '45%',top: '40%',position: 'absolute'}} src={thumb_play}></img>
            </div>
          </div>
          <div className={styles.card_matter_container}>
            <h2 className={styles.heading}>{item.title??" "}</h2>
            <p className={styles.matter}>
              {item.description}
            </p>
            {item.PublishedOn && <p className={styles.date}><Moment format="DD MMMM, YYYY" parse="YYYY-MM-DD">{item.PublishedOn??" "}</Moment></p>}
          </div>
        </div>
       </Link>
    
                </>
            )
        })}
    
        </div>

      </div>
      <div className="layout-gap"></div>

      <div className="container">
      <div className={styles.newsletter_footer}>
            <div className="layout-gap"></div>

            <h2>Subscribe to recieve notifications everytime we release a video</h2>
            <div className="layout-padding"></div>
            <div className={styles.cta_container}>

                            <SampleEmail
                                usecase="video-slug"
                                campaignId=""
                                trackingId = "video-slug"
                                />
 
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
    const PageData = await getVideoPagesBySlug(slug)
    const latest = await getRecentVideoPages();
  
    return {
        props: { slug, latest, PageData }
    };
  }
  
  // generate HTML paths at build time
  export async function getStaticPaths(context) {
  
    const slugs = await getAllVideosPageSlugs();
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