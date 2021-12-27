import styles from "./part2.module.scss";
import Iframe from 'react-iframe'
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from "react";
import LottieReact from 'react-lottie';
import jetpackAnim from "../../../static/videos/jetpack.json";
import Link from 'next/link';
import Image from 'next/image';

const Part2=()=>{
    let [isStopped,setIsStopped]= useState(true); 
    let [isPaused, setIsPaused]= useState(false);

    function onVisibilityChange (isVisible) {
      setIsStopped(isVisible)
    }

    const jetpackAnimOptions = {
        loop: false,
        autoplay: true, 
        animationData: jetpackAnim,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

return(
    <>
    <div className={styles.img_slider_fold}>
                <div className={styles.matter_block}>
                <h2 className={styles.heading}>Meet AMP email, the tech behind the interactive emails</h2>
                <p className={styles.description} >Mailmodo builds the interactive email experience on AMP email. Unlike traditional HTML emails, it allows your users to take action right within the inbox. Move the slider to see your email transform.</p>

                </div>

                <div style={{ display: 'flex', justifyContent: "center" }}>
                    <div className={styles.slider_condtainer}>
                        <Iframe url="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=c50f3b14-461b-11ec-abb7-b9a7ff2ee17c"
                            width="100%"
                            height="611px"
                            className="juxtapose"
                            // frameBorder="0"
                            loading="lazy"
                            scrolling="no"
                            display="initial"
                            position="relative" />

                        <img loading="lazy" alt="iframe sticker image" className={styles.sticker_image} src="https://res.cloudinary.com/mailmodo/image/upload/q_50,f_webp/v1637668536/strapi/iframe_sticker_f2620b5707.png"></img>
                    </div>
                </div>
                <VisibilitySensor minTopValue={800} onChange={onVisibilityChange}>
            <div style={{height:"1px"}} >&nbsp;</div>
    </VisibilitySensor>
            </div>

            <div className={styles.img_slider_fold_additional_bg_img} >
                <div className={styles.img_slider_fold_additional}>
                    <div className={styles.anim_container}>
                    <LottieReact options={jetpackAnimOptions}
              isStopped={isStopped}
              isPaused={isPaused}/>
                    </div>
              
                {/* <div className={styles.anim_container}  id="mountain-anim" /> */}

                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <h2>
                        Lesser steps,
                        <span>higher conversions.</span>
                        </h2>
                        <p>
                        Users drop off at every stage of this journey. By letting users take action inside the email, your users can convert from the email itself.
                        </p>
                        {/* TOD0: Arrow icon */}
                        <div style={{textAlign:"left"}} >
                            <ul>
                                <li>
                                    <div>
                                    <img alt="tick icon image" src="../static/images/home/tick.svg"></img>
                                    <p>Remove needless redirections</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                    <img alt="tick icon image" src="../static/images/home/tick.svg"></img>
                                    <p>Minimize distractions</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                    <img alt="tick icon image" src="../static/images/home/tick.svg"></img>
                                    <p>Increase conversions</p>
                                    </div>
                                </li>
                            </ul>
                           

                        </div>
                        {/* TODO: link */}
                        <Link  prefetch={false} href="https://manage.mailmodo.com/auth/signup" >
                        <button className="mm-primary-btn ">Send interactive emails</button>
                        </Link>
                    </div>
                    <div className="col-md-6">
                    {/* <Lottie
                        options={{  
                            width:'100%',
                            height:'100%',
                            autoplay:"false",
                    animationData: jetpackAnim 
                 }}
                    /> */}
                    </div>
                    </div>
                </div>
            </div>
            </div>

            <div className={styles.integrations_fold}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 px-0">
                            <h2>
                            Integrate with all your systems
                            </h2>
                            <ul>
                                <li>
                                <div className={styles.list_container}><img title="check mark" alt="Check.svg" class="styles_icon_img__2cOuM" src="/static/images/home/green_ticks.svg"></img><p>Import data from other apps</p></div>
                                </li>

                                <li>
                                <div className={styles.list_container}><img title="check mark" alt="Check.svg" class="styles_icon_img__2cOuM" src="/static/images/home/green_ticks.svg"></img><p>Export form submission to other apps</p></div>
                                </li>

                                <li>
                                <div className={styles.list_container}><img title="check mark" alt="Check.svg" class="styles_icon_img__2cOuM" src="/static/images/home/green_ticks.svg"></img><p>Trigger emails using other CRMs</p></div>
                                </li>

                                <li>
                                <div className={styles.list_container}><img title="check mark" alt="Check.svg" class="styles_icon_img__2cOuM" src="/static/images/home/green_ticks.svg"></img><p>Add Shopify cart, Calendly etc. inside email</p></div>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-6 align-self-center">
                            <Image
                                                            alt="integration fold image"
                            height="386"
                            width="722"
                            src={ ('https://res.cloudinary.com/mailmodo/image/upload/v1635189203/strapi/Group_101337_9fab83ea9e.png')}
                            />
                        </div>
                    </div>
                </div>
            </div>
    </>
)
}
export default Part2