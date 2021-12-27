import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";

import styles from '../comparison.module.scss';
import Link from 'next/link'
import { getImageUrl } from "../../../lib/strapiApi";
import NavItem from "reactstrap/lib/NavItem";

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
    items.push({src:index,text:element.description??" ",caption:element.title??" ",url:getImageUrl(element.media?.url??" ")})
  })
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
                <video  loop autoPlay muted className={"w-100 "+styles.video}>
                <source
                  src={item.url}
                  type="video/mp4"
                  preload="metadata"
                />
              </video>
        {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
        <p className={styles.text_email_marketing+" "}>{item.text}</p>
        <h4 class={styles.mobile_heading+" "}>{item.caption}</h4>
      </CarouselItem>
    );
  });

  return (
    <>
    <div style={{backgroundColor:"#121212"}} className={styles.TabBlock}>
    {props.content.title && <h2 className={styles.heading + " "}>{props.content.title??" "}</h2>}

<div className=" container mt-5 pt-5">
<div className={" row "}>
    <div className={" col-md-4 d-none d-md-block"}>

      {props.content.tabs.map((element,index)=>{
       return(  <div
        className={styles.marketing_tile+` ${activeIndex == index ? styles.active : ""}`}
        onClick={() => goToIndex(index)}
      >
        <p  className="label">
          {element.title}
        </p>

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
