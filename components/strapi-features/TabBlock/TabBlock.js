import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import Link from 'next/link'
import styles from '../features.module.scss';
import { getImageUrl } from "../../../lib/strapiApi";
import Image from 'next/image'

const TabBlock = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
      console.log("check");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const items = [
    // {
    //   src: "/static/images/email-marketing/slide4.png",
    //   altText: "Create Emails Without Coding",
    //   caption: "Create Emails Without Coding",
    //   text:
    //     "With a no-code editor, create both AMP & HTML emails with ease. Do things that were not possible before.",
    // },
  
  ];
  props.content.tabs.map((element,index)=>{
    items.push({src:index,text:element.description??" ",caption:element.title??" ",media:element.media??" "})
  })
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
                          {item.media.url?.includes("mp4")?   
                            
                            <>
                {item.media.url &&
              
                            <video  loop autoPlay muted className={"w-100 "+styles.video}>
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
                                 height={item.media.height}
                                 width={item.media.width}
                                 src={getImageUrl(item.media.url)}
                                 />
                               </div>
                      
                               }
                                 </>
                                
                  }
        {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
        <h4 className={styles.mobile_heading+" mm-subtitle-1"}>{item.caption}</h4>
      </CarouselItem>
    );
  });

  return (
    <>
    <div className={styles.TabBlock}>
    {props.content.title && <h2 className={styles.heading + " mm-h2"}>{props.content.title??" "}</h2>}

<div className=" container ">
<div className={" row "}>
    <div className={" col-md-4 d-none d-md-block"}>

      {props.content.tabs.map((element,index)=>{
       return(  <div
        className={styles.marketing_tile+` ${activeIndex == index ? styles.active : ""}`}
        onClick={() => goToIndex(index)}
      >
        <p className={" mm-subtitle-1"}>
          {element.title}
        </p>
        {element.description && <p style={{display:`${activeIndex==index?"block":"none"}`}} className={styles.text_email_marketing+" mm-body-1"}>{element.description}</p>}

      </div>) 
      }) }
 
         
     </div>

      <div className="col-md-8 ">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          // pause={true}
          // interval={3000}
        >
          
          {slides}
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
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
            //className={styles.arrow}
          />
        </Carousel>
      </div>
    </div>
   

</div>
   
    </div>

    </>
  );
};

export default TabBlock;
