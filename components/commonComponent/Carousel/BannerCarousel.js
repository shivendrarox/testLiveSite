import React from "react";
// import Swiper from 'react-id-swiper';
import { Carousel } from "react-responsive-carousel";

const BannerCarousel = () => {
  const bannerData = [
    {
      src: "/static/videos/Video_01_Survey.mp4",
      desc: "Survey",
    },
    {
      src: "/static/videos/Video_02_Ecommerce.mp4",
      desc: "Ecommerce",
    },
    {
      src: "/static/videos/Video_03_Appointment.mp4",
      desc: "Appointment",
    },
    {
      src: "/static/videos//static/videos/Video_04_Join Webinar.mp4",
      desc: "Join Webinar",
    },
    {
      src: "/static/videos/Video_05_Calculator.mp4",
      desc: "Calculator",
    },
  ];

  return (
    <Carousel
      infiniteLoop
      useKeyboardArrows
      autoPlay
      interval={10000}
      showArrows={true}
      showThumbs={false}
    >
      <div>
        <video loop autoPlay muted playsInline className="w-100" preload="metadata">
          <source
            src="https://res.cloudinary.com/mailmodo/video/upload/q_50/v1628513223/website/static/videos/Video_01_Survey.webm"
            type="video/webm"
            preload="metadata"
          />
          <source
            src="https://res.cloudinary.com/mailmodo/video/upload/q_50/v1628513223/website/static/videos/Video_01_Survey.mp4"
            type="video/mp4"
            preload="metadata"
          />
        </video>
        <p className="caption-custom">Collect Feedback & Reviews</p>
      </div>
      <div>
        <video loop autoPlay muted playsInline className="w-100" preload="metadata">
          <source
            src="https://res.cloudinary.com/mailmodo/video/upload/q_50/v1628513223/website/static/videos/Video_02_Ecommerce.webm"
            type="video/webm"
            preload="metadata"
          />
          <source
            src="https://res.cloudinary.com/mailmodo/video/upload/q_50/v1628513223/website/static/videos/Video_02_Ecommerce.mp4"
            type="video/mp4"
            preload="metadata"
          />
        </video>
        <p className="caption-custom">Sell Things & Services</p>
      </div>
      <div>
        <video loop autoPlay muted playsInline className="w-100" preload="metadata">
          <source
            src="https://res.cloudinary.com/mailmodo/video/upload/q_50/v1628513223/website/static/videos/Video_03_Appointment.webm"
            type="video/webm"
            preload="metadata"
          />
          <source
            src="https://res.cloudinary.com/mailmodo/video/upload/q_50/v1628513223/website/static/videos/Video_03_Appointment.mp4"
            type="video/mp4"
            preload="metadata"
          />
        </video>
        <p className="caption-custom">Get Leads & Registrations</p>
      </div>
      <div>
        <video loop autoPlay muted playsInline className="w-100" preload="metadata">
          <source
            src="https://res.cloudinary.com/mailmodo/video/upload/q_50/v1628513223/website/static/videos/Video_04_Join_Webinar.webm"
            type="video/webm"
            preload="metadata"
          />
            <source
            src="https://res.cloudinary.com/mailmodo/video/upload/q_50/v1628513223/website/static/videos/Video_04_Join_Webinar.mp4"
            type="video/mp4"
            preload="metadata"
          />
        </video>
        <p className="caption-custom">Book Appointments</p>
      </div>
      <div>
        <video loop autoPlay muted playsInline className="w-100" preload="metadata">
          <source
            src="https://res.cloudinary.com/mailmodo/video/upload/q_50/v1628513223/website/static/videos/Video_05_Calculator.webm"
            type="video/webm"
            preload="metadata"
          />
          <source
            src="https://res.cloudinary.com/mailmodo/video/upload/q_50/v1628513223/website/static/videos/Video_05_Calculator.mp4"
            type="video/mp4"
            preload="metadata"
          />
        </video>
        <p className="caption-custom">Create Interactive Experience</p>
      </div>
    </Carousel>
  );
};

export default BannerCarousel;
