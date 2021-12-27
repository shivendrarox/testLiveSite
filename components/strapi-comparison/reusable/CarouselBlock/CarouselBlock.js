import styles from '../../comparison.module.scss';import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { getImageUrl } from '../../../../lib/strapiApi';



const CarouselBlock = (props) => {
  let items = [
    {
      bg:"#FFFFFF",
      src:0,
      altText: 'Slide 1',
      caption: 'slide 1',
      imgUrl:'/static/images/type1/image 1.png',
      cardLink:'https://www.mailmodo.com/case-studies/',
      pText:'Razorpay, World’s 2nd largest payment gateway used AMP emails to improve customer feedback responses by 257%'
    },
    {
      bg:"#FFFFFF",
      src:1,
      altText: 'Slide 1',
      caption: 'slide 1',
      imgUrl:'/static/images/type1/image 2.png',
      cardLink:'https://www.mailmodo.com/case-studies/',
      pText:'Talent500 used interactive forms in AMP emails to ger 370% higher form submissions'
    },
    {
      bg:"#FFFFFF",
      src:1,
      altText: 'Slide 1',
      caption: 'slide 1',
      imgUrl:'/static/images/type1/image 3.webp',
      cardLink:'https://www.mailmodo.com/case-studies/',
      pText:'Bluestone conducts NPS survey with AMP emails and gets 800% more responses'
    },

  ];

  // props.content.carousels.map((element, index) => {
  //   items.push({ src: index, imgUrl: getImageUrl(element.logo?.url ?? " "), cardLink: element.readMoreLink, pText: element.text, bg: element.backgroundColor })
  // })


  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div style={{ backgroundColor: item.bg ?? "#3395ff" }} className={ styles.caro_item+"  "}>
          <img className={styles.caro_img+" "} src={item.imgUrl}></img>
          <p className={styles.caro_desc+" "}>{item.pText}</p>
          
          <p className={ styles.caro_link+" "}><a href={item.cardLink??" "} >Read More</a></p>
        </div>

      </CarouselItem>
    );
  });

  return (
    <>
      <div style={{ backgroundColor: "#4243DC" }} className={styles.spacing+" "+styles.carousel_block + " "}>


<div className={styles.cont}>
<div style={{backgroundColor:"#4243DC",flex:"45%"}} className={styles.mobile_remove+" "}>

  <h2 className={styles.heading + " "}>AMP email case studies</h2>
  <p className={styles.desc + " mt-5 "}>{activeIndex+1}</p>
</div>

<div  style={{flex:"55%"}} className={styles.right_box+"  "}>
<Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className={styles.abc}
    >
      <CarouselIndicators className={styles.carousel_indicators} items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
    </Carousel>
</div>

</div>




</div>





       
    </>
  )
}

export default CarouselBlock