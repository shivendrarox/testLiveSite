import React, { useState } from "react";
import styles from "../assets/home.module.scss";
import Image from 'next/image';
import heroAnim from "../static/videos/home-animation.json";
import LottieReact from 'react-lottie';
import Link from 'next/link';
import Head from 'next/head';
import BannerCarousel from "../components/home/Carousel/BannerCarousel";
import TextLoop from "react-text-loop";
import dynamic from 'next/dynamic';

  const Part1LoadableComponent = dynamic(() => import("../components/home/Part1/index"), {
  })

  const Part2LoadableComponent = dynamic(() => import("../components/home/Part2/index"), {
  })

  const Part3LoadableComponent = dynamic(() => import("../components/home/Part3/index"), {
  })
  


 function makeHomePageSchema() {
    return {
        // schema truncated for brevity
        '@context': 'http://schema.org',
        '@type': 'Corporation',
        name:'Mailmodo',
        legalName:'Mailmodo Technologies Inc.',
        url:'https://www.mailmodo.com',
        logo:'https://www.mailmodo.com/static/images/logo/logo-full.svg',
        image:'og-image',
        description: 'Create and send interactive emails to maximize conversions and reinvent your user journey',
        alternateName: 'MM',
        brand: "Mailmodo",
        contactPoint: [
          {
          '@type': "contactPoint",
          email: "support@mailmodo.com",
          contactType: "Sales and PR",
          contactOption: "Email"
          }
          ],
          sameAs: [
            "https://twitter.com/mailmodo",
            "https://www.facebook.com/mailmodo/",
            "https://www.linkedin.com/company/mailmodo/",]          
    }
  }

const Page = ({ }) => {

    // React.useEffect(() => {
    //     lottie.loadAnimation({
    //       container: document.querySelector("#hero-anim"),
    //       animationData: heroAnim,
    //     }).setSpeed(1.5);
    //   }, []);

    //   DONE: On scroll animation
    //   React.useEffect(() => {
    //     lottie.loadAnimation(
    //     {
    //     container: document.querySelector("#mountain-anim"),
    //       animationData: jetpackAnim,
    //       loop:false,
    //       autoplay:true,
    //     }
    //     );
    //   }, []);
    const g2schema = `(function(a,b,c,d){window.fetch("https://www.g2.com/products/mailmodo/rating_schema.json").then(e=>e.json()).then(f=>{c=a.createElement(b);c.type="application/ld+json";c.text=JSON.stringify(f);d=a.getElementsByTagName(b)[0];d.parentNode.insertBefore(c,d);});})(document,"script");`

    

      const heroLottieOptions = {
        loop: true,
        autoplay: true, 
        animationData: heroAnim,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

   
    return (
        <>
            <Head>
                <style>{'body{background-color:#ffffff !important;font-family:Inter !important;}'}</style>
            
                {/* SEO Begin */}
                {/* JSON LD data */}
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(makeHomePageSchema()) }}
                />
                <script dangerouslySetInnerHTML={{ __html: g2schema }}></script>
                {/* JSON LD data end */}
                <link rel="canonical" href="https://www.mailmodo.com" />

                <meta name="robots" content="index,follow" />

                <meta name="googlebot" content="index,follow" />

                <title>Free Email Marketing Software to create & send interactive AMP Emails | Mailmodo</title>

                <meta name="description" content="Create and send interactive emails to maximize conversions and reinvent your user journey" />

                <meta name="keywords" content="email marketing, email marketing software, email marketing services, best email marketing service, AMP Emails, AMP" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Free Email Marketing Software to create & send interactive AMP Emails | Mailmodo" />
                <meta property="og:description" content="Create and send interactive emails to maximize conversions and reinvent your user journey" />
                <meta property="og:url" content="https://www.mailmodo.com" />
                <meta property="og:image" content="https://www.mailmodo.com/static/images/og-image.png" />
                <meta property="og:image:secure_url" content="https://www.mailmodo.com/static/images/og-image.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content="Create and send interactive emails to maximize conversions and reinvent your user journey" />
                <meta name="twitter:title" content="Free Email Marketing Software to create & send interactive AMP Emails | Mailmodo" />
                <meta name="twitter:site" content="@mailmodo" />
                <meta name="twitter:image" content="https://www.mailmodo.com/static/images/og-image.png" />
                {/* SEO end */}

            </Head>
            
            <div className={styles.hero_bg_img_wrap}>
            <div className={styles.hero_fold}>
                {/* <img src={hero_bg} className={styles.bg_img}></img> */}

                    <div className="container">

                        <div className="row">
                            <div className="col-md-6 align-self-center ">
                                <div className={styles.hero_matter} >
                                    <h1>
                                    Bring Life To Your Emails
                                    </h1>
                                    <p>
                                    Convert your emails into experiences with our complete email marketing platform. Add interactive elements like forms, carts, calendar and more to your email.
                                    </p>
                                    <div className={styles.button_section} >
                                        {/* TODO: Test for other viewports */}
                                        <div className={styles.btn_container} >
                                        <Link prefetch={false} href="https://manage.mailmodo.com/auth/signup" >
                                        <button className={styles.button_email}>
                                        Sign up with email  
                                        {/* <span style={{ marginLeft: 'auto' }}>&#8594;</span> */}
                                        </button>
                                        </Link>
                                        <Link prefetch={false} href="https://accounts.google.com/o/oauth2/v2/auth?client_id=470844256400-hq3ji6me9kpgkf420lsdp4osk61cpdmi.apps.googleusercontent.com&redirect_uri=https://manage.mailmodo.com/auth/googleRedirect&response_type=code&prompt=consent&scope=profile%20openid%20email&" >
                                        <button className={styles.button_google}>
                                      <Image priority={true} alt="google icon" height="24px" width="24px" src="https://res.cloudinary.com/mailmodo/image/upload/v1637039847/strapi/image_22_246adcec9f.png" />  Sign up with Google
                                        </button>
                                        </Link>
                                        </div> 
                                      
                                        <p>Send 5000 emails/month for free. No card needed.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className={styles.hero_img_container} style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                                    {/* <Image
                                        height="540"
                                        width="290"
                                        src={ ("https://res.cloudinary.com/mailmodo/image/upload/v1635134449/strapi/Group_101318_7a33b8a95b.png")}
                                    /> */}
                                          <div className={styles.hero_anim} style={{ width: '287px', height: '540px' }}>
                                          <LottieReact options={heroLottieOptions}
                                            isStopped={false}
                                            isPaused={false}/>
                                          </div>
                                          {/* <div style={{width:'271px'}}  className={styles.hero_anim} ></div> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.features_fold}>

<h2>When email meets{" "}
      <span  className=" "><TextLoop children={['interactivity', 'forms', 'cart', 'bookings']} ></TextLoop></span>, 
<br/>the possibilities become endless</h2>

    <div className={styles.desktop_only + " container"}>

        <div className="row">

            <div className="col-md-4 px-0">
                <div className={styles.card_item}>
                    <Image
                        alt="feed back email image"
                        layout="fixed"
                        height="165"
                        width="212"
                        src={('https://res.cloudinary.com/mailmodo/image/upload/v1636963375/strapi/Frame_101088_c073677b7c.svg')}
                    />
                    <h3>Feedback email</h3>
                    <p>257% higher feedback responses</p>

                    <div className={styles.hover_card_item}>
                        <hr />
                 
                        <p>
                        Our merchants loved it as they could share their thoughts with us without getting redirected even once. It gave us a 250% increase in survey responses.                                    </p>
                        <div className={styles.bio_section}>
                            <div className={styles.image_section}>
                                <Image
                                    alt = "bio image"
                                  height="70"
                                  width="70"
                                    src={('https://res.cloudinary.com/mailmodo/image/upload/v1636985224/strapi/Group_101452_c9f57e1871.png')}
                                />
                            </div>
                            <div className={styles.details}>
                                <p className={styles.heading}>Subhash Dash</p>
                                <p className={styles.desc}>Growth Marketing</p>

                            </div>
                            <div className={styles.brand_image}>
                        <Image
                        alt = "brand image"
                            layout="fixed"
                            height="26"
                            width="120"
                            src={('https://res.cloudinary.com/mailmodo/image/upload/v1635136243/strapi/Page_1_5a791e5b1e.png')}
                        />
                        </div>
                        </div>
                    </div>
                </div>
            </div>

           

            <div className="col-md-4 px-0">
                <div className={styles.card_item}>
                    <Image
                    alt="Registration email imge"
                        layout="fixed"
                        height="165"
                        width="212"
                        src={('https://res.cloudinary.com/mailmodo/image/upload/v1636963637/strapi/Frame_101090_795f846b1c.svg')}
                    />
                    <h3>Registration email</h3>
                    <p>280% increase in webinar signups</p>

                    <div className={styles.hover_card_item}>
                        <hr />
                      
                        <p>
                        After switching to Mailmodo, we have doubled our webinar registrations because our users can sign up for the Airmeet event right inside the inbox.
                        </p>
                        <div className={styles.bio_section}>
                            <div className={styles.image_section}>
                                <Image
                                alt = "bio image"
                                     height="70"
                                     width="70"
                                    src={('https://res.cloudinary.com/mailmodo/image/upload/v1636725258/strapi/Group_101438_412d5e855e.png')}
                                />
                            </div>
                            <div className={styles.details}>
                                <p className={styles.heading}>Pranjal Agarwal</p>
                                <p className={styles.desc}>Customer Experience</p>

                            </div>
                            <div className={styles.brand_image}>
                        <Image
                        alt = "brand image"
                            layout="fixed"
                            height="23"
                            width="90"
                            src={('https://res.cloudinary.com/mailmodo/image/upload/v1637038782/strapi/mudrex_028b857771.png')}
                        />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="col-md-4 px-0">
                <div className={styles.card_item}>
                    <Image
                    alt="Newsletters image"
                        layout="fixed"
                        height="165"
                        width="212"
                        src={('https://res.cloudinary.com/mailmodo/image/upload/v1636963705/strapi/Frame_101091_7dd07f389d.svg')}
                    />
                    <h3>Newsletters</h3>
                    <p>56% open rate on feature updates</p>

                    <div className={styles.hover_card_item}>
                        <hr />
                        
                        <p>
                        Mailmodo made us know exactly what needs to be done and had quick turnaround times. Our campaigns would not have been as successful as it was without Mailmodo.

                        </p>
                        <div className={styles.bio_section}>
                            <div className={styles.image_section}>
                                <Image
                                alt= " bio image"
                                    height="70"
                                    width="70"
                                    src={('https://res.cloudinary.com/mailmodo/image/upload/v1636985506/strapi/Group_101448_f90f56f00c.png')}
                                />
                            </div>
                            <div className={styles.details}>
                                <p className={styles.heading}>Ardith Vijh</p>
                                <p className={styles.desc}>	Growth, Community and Partnerships</p>

                            </div>
                            <div className={styles.brand_image}>
                        <Image
                        alt="brand image"
                            layout="fixed"
                            height="18"
                            width="63"
                            src={('https://res.cloudinary.com/mailmodo/image/upload/v1637038862/strapi/kodo_7c70c60fef.png')}
                        />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="col-md-4 px-0">
                <div className={styles.card_item+" "+styles.row_2nd_anim}>
                    <Image
                    alt="NPS surveys image"
                        layout="fixed"
                        height="165"
                        width="212"
                        src={ ('https://res.cloudinary.com/mailmodo/image/upload/v1636963883/strapi/Frame_101093_d5c266f269.svg')}
                    />
                    <h3>NPS surveys</h3>
                    <p>45% response rate</p>

                    <div className={styles.hover_card_item}>
                        <hr />
                       
                        <p>
                        Mailmodo was incredibly useful to drive communication with our candidates from the comfort of their email itself, be it surveys or bookings and so on.
                        </p>
                        <div className={styles.bio_section}>
                            <div className={styles.image_section}>
                                <Image
                                alt="bio image"
                                     height="70"
                                     width="70"
                                    src={ ('https://res.cloudinary.com/mailmodo/image/upload/v1637038211/strapi/Group_101444_52e22e1979.png')}
                                />
                            </div>
                            <div className={styles.details}>
                                <p className={styles.heading}>Aashish Mittal</p>
                                <p className={styles.desc}>Co-founder and CTO</p>

                            </div>
                            <div className={styles.brand_image}>
                        <Image
                        alt="brand image"
                            layout="fixed"
                            height="23"
                            width="145"
                            src={ ('https://res.cloudinary.com/mailmodo/image/upload/v1637039044/strapi/interviewvector_a802886fe6.png')}
                        />
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 px-0">
                <div className={styles.card_item+" "+styles.row_2nd_anim}>
                    <Image
                    alt="Demo booking image"
                        layout="fixed"
                        height="165"
                        width="212"
                        src={ ('https://res.cloudinary.com/mailmodo/image/upload/v1636963750/strapi/Frame_101092_3d7a4dc4e0.svg')}
                    />
                    <h3>Demo booking</h3>
                    <p>20% conversion for demos</p>

                    <div className={styles.hover_card_item}>
                        <hr />
                        
                        <p>Mailmodo decreased the friction in our demo bookings making the experience smooth both for our customers and our internal teams.</p>
                        <div className={styles.bio_section}>
                            <div className={styles.image_section}>
                                <Image
                                alt="bio image"
                                     height="70"
                                     width="70"
                                    src={ ('https://res.cloudinary.com/mailmodo/image/upload/v1636985723/strapi/Group_101446_d635383d7a.png')}
                                />
                            </div>
                            <div className={styles.details}>
                                <p className={styles.heading}>Priya Goel</p>
                                <p className={styles.desc}>Founder and CEO</p>

                            </div>
                            <div className={styles.brand_image}>
                        <Image
                        alt="brand image"
                            layout="fixed"
                            height="28"
                            width="149"
                            src={ ('https://res.cloudinary.com/mailmodo/image/upload/v1637038956/strapi/Hobspace_227a6a6113.png')}
                        />
                        </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-4 px-0">
                <div className={styles.card_item+" "+styles.row_2nd_anim}>
                    <Image
                    alt="Cart abandonment email image"
                        layout="fixed"
                        height="165"
                        width="212"
                        src={('https://res.cloudinary.com/mailmodo/image/upload/v1636963507/strapi/Frame_101089_1ed2c13a09.svg')}
                    />
                    <h3>Cart abandonment email</h3>
                    <p>15% cart recovery rate</p>

                    <div className={styles.hover_card_item}>
                        <hr />
                        
                        <p>
                        Mailmodo let our customers directly checkout from email and it was a major boost for our revenue. We had cart recovery rates of around 15% too.
                        </p>
                        <div className={styles.bio_section}>
                            <div className={styles.image_section}>
                                <Image
                                alt="bio image"
                                     height="70"
                                     width="70"
                                    src={('https://res.cloudinary.com/mailmodo/image/upload/v1636985133/strapi/Group_101449_c87ded8d73.png')}
                                />
                            </div>
                            <div className={styles.details}>
                                <p className={styles.heading}>Ridhima Achaliya</p>
                                <p className={styles.desc}>Growth Marketing</p>

                            </div>
                            <div className={styles.brand_image}>
                        <Image
                        alt="brand image"
                            layout="fixed"
                            height="41"
                            width="79"
                            src={('https://res.cloudinary.com/mailmodo/image/upload/v1637038694/strapi/traya_5dadd32420.png')}
                        />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div className={styles.mobile_carousel + " carousel-banner"}>
        <BannerCarousel />

    </div>
            </div>

          <Part1LoadableComponent />

        <Part2LoadableComponent/>
            
            <Part3LoadableComponent/>

      
            
        </>


    )
}

export default Page;
