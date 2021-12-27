import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import Book from "../componentIcon/Book";
import Calender from "../componentIcon/Calender";
import Integrate from "../componentIcon/Integrate";
import RSS from "../componentIcon/RSS";
import Cloud from "./../componentIcon/Cloud";
import Image from "next/image"
import { getImageUrl } from "../../../lib/strapiApi";
const items = [
  {
    src: "/static/images/email-marketing/slide4.png",
    altText: "No-code Editor",
    caption: "No-code Editor",
    text:
      "Create both AMP & HTML emails with drag-and-drop editor",
  },
  {
    src: "/static/images/email-marketing/contacts.png",
    altText: "Contact Management",
    caption: "Contact Management",
    text:
      "Upload, manage & segment contacts using attributes and behavior",
  },
  {
    src: "/static/images/email-marketing/slide2.png",
    altText: "Transactional Emails",
    caption: "Transactional Emails",
    text:
      "Trigger transactional emails with API and integrations",
  },
  {
    src: "/static/images/email-marketing/journey.png",
    altText: "Email Automation",
    caption: "Email Automation",
    text:
      "Automate email sequences with visual journey builder",
  },
  {
    src: "/static/images/email-marketing/Analytics.png",
    altText: "Email Analytics",
    caption: "Email Analytics",
    text:
      "Track campaign performance metrics and export data",
  },

];

const EmailMarketingCarousel = (props) => {
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        {/* <img src={item.src} alt={item.altText} /> */}
        <Image src={getImageUrl(item.src)} title={item.altText+" icon"} alt={item.altText} width="882" height="450"/>
        {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
        <p className="text-email-marketing">{item.text}</p>
        <h3 class="mobile-heading">{item.caption}</h3>
      </CarouselItem>
    );
  });

  return (
    <>
      <div className="col-md-4 d-none d-md-block">
        <div
          className={`marketing-tile ${activeIndex == 0 ? "active" : ""}`}
          onClick={() => goToIndex(0)}
        >
          <Cloud />
          <p className="label">
            No-code <br/> Editor
          </p>
          <img
            className="arrow"
            alt="mailmodo-arrow-right"
            src="/static/images/icon/arrow-right-theme.svg"
            title="mailmodo-arrow-right icon"
          />
        </div>
        <div
          className={`marketing-tile ${activeIndex == 1 ? "active" : ""}`}
          onClick={() => goToIndex(1)}
        >
          <Calender />
          <p className="label">
            Contact <br/> Management
          </p>
          <img
            className="arrow"
            alt="mailmodo-arrow-right"
            src="/static/images/icon/arrow-right-theme.svg"
            title="mailmodo-arrow-right icon"
          />
        </div>
        <div
          className={`marketing-tile ${activeIndex == 2 ? "active" : ""}`}
          onClick={() => goToIndex(2)}
        >
          <Integrate />
          <p className="label">
            Transactional <br/> Emails
          </p>
          <img
            className="arrow"
            alt="mailmodo-arrow-right"
            src="/static/images/icon/arrow-right-theme.svg"
            title="mailmodo-arrow-right icon"

          />
        </div>
        <div
          className={`marketing-tile ${activeIndex == 3 ? "active" : ""}`}
          onClick={() => goToIndex(3)}
        >
          <RSS className="icon" />
          <p className="label">
            Email <br/> Automation
          </p>
          <img
            className="arrow"
            alt="mailmodo-arrow-right"
            src="/static/images/icon/arrow-right-theme.svg"
            title="mailmodo-arrow-right icon"

          />
        </div>
        <div
          className={`marketing-tile ${activeIndex == 4 ? "active" : ""}`}
          onClick={() => goToIndex(4)}
        >
          <Book />
          <p className="label">
            Email <br/> Analytics
          </p>
          <img
            className="arrow"
            alt="mailmodo-arrow-right"
            src="/static/images/icon/arrow-right-theme.svg"
            title="mailmodo-arrow-right icon"

          />
        </div>
      </div>
      <div className="col-md-8">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          // pause={true}
          // interval={3000}
        >
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
      </div>
    </>
  );
};

export default EmailMarketingCarousel;
