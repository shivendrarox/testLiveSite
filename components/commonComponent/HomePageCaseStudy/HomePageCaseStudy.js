import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";

const items = [
  {
    title: "World's Second Largest Payment Gateway Increased Email Conversions",
    description:
      "Read how Razorpay used AMP emails to increase their email conversion rate by 225%",
  },
  {
    title:
      "A talent-first platform achieved better conversions to shorten the hiring process",
    description:
      "Read how Talent500 used AMP emails to increase their form submission rate by 370%",
  },
  {
    title:
      "A leading jewellery & lifestyle company drastically improved its NPS surveys",
    description:
      "Read how Bluestone used AMP emails to increase their NPS survey response rate by 833%",
  },
];

const HomePageCaseStudy = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
      console.log("check");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        pause={false}
      >
        <h3 className="case-study-heading">{item.title}</h3>
        <p className="para">{item.description}</p>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
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
      />
    </Carousel>
  );
};

export default HomePageCaseStudy;
