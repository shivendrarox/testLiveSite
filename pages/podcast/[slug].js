import { NextSeo, ArticleJsonLd } from 'next-seo'
import Link from 'next/link';
import Head from 'next/head';
import React, { useEffect, useState } from "react";
import { getPodcastPagesBySlug, getImageUrl, getAllPodcastPageSlugs, getRecentPodcastPages, } from '../../lib/strapiApi';
import styles from '../../assets/podcast-pages/podcast-slug-redesign.module.scss';
import fb from '../../static/images/newsletter/facebook.svg';
import twitter from '../../static/images/newsletter/twitter.svg';
import pinterest from '../../static/images/newsletter/pinterest.svg';
import spotify from '../../static/images/newsletter/spotify.svg';
import apple from '../../static/images/newsletter/apple.svg';
import play_btn from '../../static/images/podcast/play.svg';
import pause_btn from '../../static/images/podcast/pause.svg';
import forward_btn from '../../static/images/podcast/Foward30.svg';
import backward_btn from '../../static/images/podcast/Replay10.svg';
import thumb_play from '../../static/images/podcast/thumb_play.svg';
import more_options from '../../static/images/podcast/more_options.svg';
import google from '../../static/images/newsletter/google.svg';
import Image from 'next/image';
import SampleEmail from '../../components/podcastpageComponents/SampleEmailSlug/SampleEmail';
import SignupButton from "../../components/commonComponent/SignupButton";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Breadcrumb from '../../components/commonComponent/Breadcrumb/Breadcrumb';
import Whatsapp from './../../static/images/icon/whatsapp-colored.svg'
import Linkedin from './../../static/images/icon/linkedin-colored.svg'
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
                url={`https://www.mailmodo.com/podcast/${slug}/`}
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
                canonical={`https://www.mailmodo.com/podcast/${slug}/`}
                keywords={PageData.Seo?.keywords??" "}
                openGraph={{
                    url: `https://www.mailmodo.com/podcast/${slug}/`,
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
      {/* <div className="home-page">
        <div className={`cta-email ${floatingCTA && "floating-cta"}`}>
          <div className="col-8 mx-auto d-md-flex align-items-center justify-content-center px-0 px-md-3 d-none d-md-flex">
            <div className="logo-cta d-none d-md-block">
              <img alt="mailmodo" src="/static/images/logo.svg" />
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

            <div className={styles.cta + "  "}>
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
                <Link href={`https://music.amazon.com/podcasts/db70a3bc-0fdc-4b0b-bf4d-edba5fe4ad46`}><li><img title="amazon music" alt="amazon_music.svg" src={'../../static/images/podcast/podcast-icon/amazon_music.svg'}></img> Amazon Music</li></Link>
                <Link href={`https://overcast.fm/itunes1583912971`}><li><img title="Overcast" alt="Overcast.svg" src={'../../static/images/podcast/podcast-icon/Overcast.svg'}></img> Overcast</li></Link>
                <Link href={`https://podcastaddict.com/podcast/3556354`}><li><img title="Podcast addict" alt="Podcast_Addict.svg" src={'../../static/images/podcast/podcast-icon/Podcast_Addict.svg'}></img> Podcast Addict</li></Link>
                <Link href={`https://castro.fm/itunes/1583912971`}><li><img title="Castro" alt="Castro.svg" src={'../../static/images/podcast/podcast-icon/Castro.svg'}></img> Castro</li></Link>
                <Link href={`https://castbox.fm/vic/1583912971`}><li><img title="Castbox" alt="Castbox.svg" src={'../../static/images/podcast/podcast-icon/castboxfm.svg'}></img> Castbox</li></Link>
                <Link href={`https://www.podchaser.com/podcasts/the-growth-chat-1972406`}><li><img title="Podchaser" alt="Podchaser.svg" src={'../../static/images/podcast/podcast-icon/Podchaser.svg'}></img> Podchaser</li></Link>
                <Link href={`https://pca.st/m8qqdvzc`}><li><img title="Pocket_Casts" alt="Pocket_Casts.svg" src={'../../static/images/podcast/podcast-icon/Pocket_Casts.svg'}></img> Pocket Casts</li></Link>
                <Link href={`https://www.deezer.com/show/2906012`}><li><img title="Deezer" alt="Deezer.svg" src={'../../static/images/podcast/podcast-icon/Deezer.svg'}></img> Deezer</li></Link>
                <Link href={`https://www.listennotes.com/c/e63740eb68c44c8da620b948577f4c17/`}><li><img title="Listen Notes" alt="Lsten Notes.svg" src={'../../static/images/podcast/podcast-icon/Listen-Notes.svg'}></img> Listen Notes</li></Link>
                <Link href={`https://player.fm/series/series-2971456`}><li><img title="Player FM" alt="Player_FM.svg" src={'../../static/images/podcast/podcast-icon/Player_FM.svg'}></img> Player FM</li></Link>
                <Link href={`https://podcastindex.org/podcast/4108086`}><li><img title="Podcast Index" alt="Podcast_Index.svg" src={'../../static/images/podcast/podcast-icon/Podcast_Index.svg'}></img> Podcast Index</li></Link>
                <Link href={`https://web.podfriend.com/podcast/1583912971`}><li><img title="Podfriend" alt="Podfriend.svg" src={'../../static/images/podcast/podcast-icon/Podfriend.svg'}></img> Podfriend</li></Link>

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
                <Link href={`https://www.facebook.com/sharer/sharer.php?u=https://www.mailmodo.com/podcast/${PageData.slug??" "}/`}><li><img title="facebook" alt="fb.svg" src={fb}></img></li></Link>
                                <Link href={`https://twitter.com/intent/tweet?url=https://www.mailmodo.com/podcast/${PageData.slug??" "}/&text=`}><li><img title="Twitter" alt="twitter.svg" src={twitter}></img></li></Link>
                                <Link href={`https://pinterest.com/pin/create/button/?url=https://www.mailmodo.com/podcast/${PageData.slug??" "}/&media=&description=`}><li><img title="Pinterest" alt="pinterest.svg" src={pinterest}></img></li></Link>
                                <Link href={`https://wa.me/?text=https://mailmodo.com/podcast/${PageData.slug??" "}/`}><li><img title="Whatsapp" alt="whatsapp.svg" src={Whatsapp}></img></li></Link>
                                <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=https://mailmodo.com/podcast/${PageData.slug??" "}/`}><li><img title="Linkedin" alt="Linkedin.svg" src={Linkedin}></img></li></Link>

              </ul>
        </div>

        <div className={styles.player_header}>
          <div className="layout-padding"></div>
          <div className={styles.menu_bar}>
            <div className="layout-padding"></div>



            <div className={styles.menu_container}>
              <div className={styles.menu_image}>
                <img title="podcast thumb" alt="podcast thumb image" src={PageData.thumbnail?.url??" "}></img>
              </div>
              <div className={styles.menu_heading}>
                <AudioPlayer
                  progressJumpSteps={{ backward: 10000, forward: 30000 }}
                  autoPlay={false}
                  preload={'metadata'}
                  customControlsSection={
                    [
                      <div></div>,
                      RHAP_UI.MAIN_CONTROLS,
                      <div></div>,
                    ]
                  }
                  customProgressBarSection={
                    [
                      RHAP_UI.CURRENT_TIME,
                      RHAP_UI.PROGRESS_BAR,
                      <div style={{ paddingTop: '2em' }}></div>,
                      RHAP_UI.DURATION
                    ]
                  }
                  customIcons={{
                    play: <img alt="play button" style={{ width: '80px', height: "auto" }} src={play_btn}></img>,
                    pause: <img alt="pause button" style={{ width: '80px', height: "auto" }} src={pause_btn}></img>,
                    rewind: <img alt="rewind back button" style={{ width: '20px', height: "auto" }} src={backward_btn}></img>,
                    forward: <img alt="jump back button" style={{ width: '20px', height: "auto" }} src={forward_btn}></img>,
                  }}
                  layout="stacked-reverse"
                  src={PageData.renderUrl??" "}
                  onPlay={e => console.log("onPlay")}
                // other props here
                />
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
        {PageData.details&& <p>
                        {PageData.details??" "}
        </p>}
        <div className={styles.podcast_listen_container}>
              <ul>
                <li>Listen On</li>
                <Link href={`https://open.spotify.com/show/41rlqC731UXmrm7m5qRpH9`}><li><img title="spotify" alt="spotify.svg" src={spotify}></img></li></Link>
                <Link href={`https://podcasts.apple.com/us/podcast/the-growth-chat/id1583912971`}><li><img title="apple" alt="apple.svg" src={apple}></img></li></Link>
                <Link href={`https://podcasts.google.com/u/3/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xNzcxODQ0LnJzcw`}><li><img title="google" alt="google.svg" src={google}></img></li></Link>
                <li  onClick={ handleOpenSubscribe }><img title="more options" alt="more_options.svg" src={more_options}></img></li>
              </ul>
        </div>
        <div style={{paddingBottom:"1em"}}></div>
        <button onClick={handleOpen} className={styles.subscribe_modal_btn}>Get Notified</button>
        </div>

      </div>
      <div className="layout-padding"></div>
      <div className="container">
      <div className={styles.episodes_block}>
        <h2>{latest.length} Episodes</h2>
        {latest.map((item,index)=>{
            return(
                <>
        <hr/>
        <Link href={`/podcast/${item.slug??" "}`}>
        <div className={styles.card_block}>
          <div className={styles.card_img_container}>
            <div style={{ position: 'relative', width: '156px', height: '156px' }}>
              <Image
                alt="podcast image"
                title="Podcast"
                src={item.thumbnail?.url??"https://res.cloudinary.com/mailmodo/image/upload/v1632463966/strapi/traffic_signs_361514_1920_fd83e3b51d.png"}
                layout="fill"
                objectFit="contain"
              />
              <img style={{right: '0%',bottom: '0%',position: 'absolute'}} src={thumb_play}></img>
            </div>
          </div>
          <div className={styles.card_matter_container}>
            <h2 className={styles.heading}>{item.title??" "}</h2>
            {/* <p className={styles.matter}>
            Episode description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae urna id ipsum cursus ornare nec non diam. Phasellus congue mi ut ex efficitur tristique. Sed lacinia pharetra tortor, vitae fringilla eros feugiat sit amet. Sed vehicula ante... 
            </p> */}
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
      {/* <div className={styles.more_videos_block}>
        <div className="container">
          <h2 className={styles.heading}>More podcasts</h2>

          <div className={styles.more_videos_list_container}>
            {latest.map((item)=>{
              return(
                <>
                <Link href={`/podcast/${item.slug}`}>
                            <div className={styles.more_video_card}>
            <div className={styles.more_video_card_img} style={{ position: 'relative', width: '156px', height: '156px' }}>
              <Image
                alt="podcast image"
                src={item.thumbnail?.url??" "}
                layout="fill"
                objectFit="contain"
              />
            </div>
              <div className={styles.more_video_card_matter}>
                <h3>{item.title??" "}</h3>
              </div>
            </div>
            </Link>

                </>
              )
            })}
          </div>
        </div>

      </div>
      <div className="layout-gap"></div> */}

      <div className="container">
      <div className={styles.newsletter_footer}>
            <div className="layout-gap"></div>

            <h2>Subscribe to recieve notifications everytime we release a podcast episode</h2>
            <div className="layout-padding"></div>
            <div className={styles.cta_container}>

            <div className={styles.cta + "  "}>
                            <SampleEmail
                                usecase="video-slug"
                                campaignId=""
                                trackingId = "video-slug"
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
    const PageData = await getPodcastPagesBySlug(slug)
    const latest = await getRecentPodcastPages();
  
    return {
        props: { slug, latest, PageData }
    };
  }
  
  // generate HTML paths at build time
  export async function getStaticPaths(context) {
  
    const slugs = await getAllPodcastPageSlugs();
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