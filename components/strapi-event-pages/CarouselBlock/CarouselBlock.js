import styles from '../features.module.scss'
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { getImageUrl } from '../../../lib/strapiApi';



const CarouselBlock = (props) => {
  let items = [
    // {
    //   src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    //   altText: 'Slide 1',
    //   caption: 'slide 1',
    //   imgUrl:'/static/images/features/image 1.png',
    //   cardLink:'https://www.mailmodo.com/case-studies/',
    //   pText:'Razorpay, World’s 2nd largest payment gateway used AMP emails to improve customer feedback responses by 257%'
    // },

  ];

  props.content.carousels.map((element, index) => {
    items.push({ src: index, imgUrl: getImageUrl(element.logo?.url ?? " "), cardLink: element.readMoreLink, pText: element.text, bg: element.backgroundColor })
  })


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
          <img className={styles.caro_img+" "} src={"https://www.mailmodo.com/static/images/type1/image%201.png"||item.imgUrl}></img>
          <p className={styles.caro_desc+" "}>{"Razorpay, World’s 2nd largest payment gateway used AMP emails to improve customer feedback responses by 257%"||item.pText}</p>
          
          <p className={ styles.caro_link+" "}><a href={item.cardLink??" "} >Read More</a></p>
        </div>

      </CarouselItem>
    );
  });

  return (
    <>
      <div style={{ backgroundColor: "#ffff" }} className={styles.carousel_block + " "}>


<div className={styles.cont}>
<div style={{backgroundColor:"#7567F6",flex:"50%"}} className={styles.mobile_remove+" "}>
<img className={styles.img_circle} src="../../static/images/strapi-pages/features/circle.svg"></img>

  <h2 className={styles.heading + " "}>{props.content.title}</h2>
  <p className={styles.desc + " mt-5 "}>{props.content.subTitle}</p>

</div>

<div  style={{flex:"50%"}} className={styles.right_box+"  "}>
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