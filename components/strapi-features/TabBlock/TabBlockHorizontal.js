import React from 'react';
import { getImageUrl } from '../../../lib/strapiApi';
import styles from '../features.module.scss';
import Link from 'next/link';
import Tabs  from 'antd/lib/tabs/index';
import 'antd/lib/tabs/style/index.css'
import Image from 'next/image'
import { Carousel } from "react-responsive-carousel";

const { TabPane } = Tabs;

const TabBlockHorizontal = (props) => {
    return (
        <>
        {console.log(props)}
          <div className={styles.TabBlockHorizontal + " tab-section"}>
          {props.content.title && <h2 className={styles.heading+" mm-h2 " }>{props.content.title}</h2>}
    <div className="container">
        <div className={styles.desktop_only}>
        <Tabs defaultActiveKey="0" centered>
            {props.content.tabs.map((item,index)=>{
                return(
                    <>
                                <TabPane tab={<div className={styles.tab_head}> <div className={styles.tab_head_heading+" mm-subtitle-2 "}>{item.title}</div></div>} key={index}>
            <h3 className={styles.tab_item_heading+" mm-subtitle-1 "}>{item.description??" "}</h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
                                        {item.media.url?.includes("mp4")?   
                            
                            <>
                {item.media.url &&
              
                            <video  loop autoPlay muted className={styles.video}>
                                         <source
                                  src={getImageUrl(item.media.url)}
                                  type="video/mp4"
                                  preload="metadata"
                                />
                            <source
                              src={item.media.url}
                              type="video/mp4"
                              preload="metadata"
                            />
                          </video>
                }
                  </>
                  :
                               <>
                               {item.media.url &&
                               <div style={{width:"100%",display:"flex",justifyContent:"center"}} >
                               <Image
                                    alt={item.title??" "}
                                    className={styles.shadow_class}
                                 height={item.media.height}
                                 width={item.media.width}
                                 src={item.media.url}
                                 />
                               </div>
                      
                               }
                                 </>
                                
                  }
            </div>
            <div style={{paddingTop:"6rem"}}></div>
        </TabPane>
                    </>
                )
            })}

        </Tabs>
        </div>
        <div className={styles.hide_mobile+" carousel-banner"}>
            {/*  */}
            <Carousel
            infiniteLoop
            useKeyboardArrows
            autoPlay
            interval={10000}
            showArrows={false}
            showThumbs={false}
        >
           {props.content.tabs.map((item,index)=>{
                return(
                    <>
              <div>
                
                {item.media.url?.includes("mp4")?   
                                
                                <>
                    {item.media.url &&
                  
                                <video  style={{width:"50%"}} loop autoPlay muted >
                                             <source
                                      src={getImageUrl(item.media.url)}
                                      type="video/mp4"
                                      preload="metadata"
                                    />
                                <source
                                  src={item.media.url}
                                  type="video/mp4"
                                  preload="metadata"
                                />
                              </video>
                    }
                      </>
                      :
                                   <>
                                   {item.media.url &&
                                   <div style={{width:"100%",display:"flex",justifyContent:"center"}} >
                                   <Image
                                        alt={item.title??" "}
                                        className={styles.shadow_class}
                                     height={item.media.height}
                                     width={item.media.width}
                                     src={item.media.url}
                                     />
                                   </div>
                          
                                   }
                                     </>
                                    
                      }
        
                    {item.description && <h3 style={{paddingTop:"24px",paddingBottom:'24px'}}>{item.description}</h3>}
    
                </div>
                    </>
                )
            })}
           
      
        </Carousel>
            {/*  */}
            <div style={{marginBottom:"20px"}}></div>
        </div>
    </div>
      {/* DONE: link to feature page:https://www.mailmodo.com/features/ */}
      {(props.content?.PrimaryButton || props.content?.SecondaryButton) && 
                            <div style={{justifyContent:"center"}} className={styles.button_container}>
                            {props.content?.PrimaryButton &&
                            <Link passHref href={props.content?.PrimaryButton?.Url??" "}>
                            <a>
                            <button className='mm-primary-button-regular' >{props.content?.PrimaryButton?.Text??" "}</button>
                            </a>
                            </Link>
                            }

                            {props.content?.SecondaryButton &&
                            <Link passHref href={props.content?.SecondaryButton?.Url??" "}>
                            <a>
                            <button className='mm-secondary-button-regular' >{props.content?.SecondaryButton.Text??" "}</button>
                            </a>
                            </Link>
                            }
                            </div>}
</div>
        </>
    )
}
export default TabBlockHorizontal