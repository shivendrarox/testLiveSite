import React from "react";
// import Swiper from 'react-id-swiper';
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image';
const BannerCarousel = () => {

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
        <Image
                  alt="slide image"
          layout="fixed"
          height="165"
          width="212"
          src={('https://res.cloudinary.com/mailmodo/image/upload/v1636963375/strapi/Frame_101088_c073677b7c.svg?auto=format&fit=max&w=256')}
        />
        <h3>Feedback email</h3>
        <p className="caption-custom">257% higher feedback responses</p>
      </div>

      <div>
        <Image
                  alt="slide image"

          layout="fixed"
          height="165"
          width="212"
          src={('https://res.cloudinary.com/mailmodo/image/upload/v1636963637/strapi/Frame_101090_795f846b1c.svg?auto=format&fit=max&w=256')}
        />
        <h3>Registration email</h3>
        <p className="caption-custom">280% increase in webinar signups</p>
      </div>
      
      <div>
        <Image
                  alt="slide image"

          layout="fixed"
          height="165"
          width="212"
          src={('https://res.cloudinary.com/mailmodo/image/upload/v1636963705/strapi/Frame_101091_7dd07f389d.svg?auto=format&fit=max&w=256')}
        />
        <h3>Newsletters</h3>
        <p className="caption-custom">56% open rate on feature updates</p>
      </div>

      <div>
        <Image
                  alt="slide image"

          layout="fixed"
          height="165"
          width="212"
          src={('https://res.cloudinary.com/mailmodo/image/upload/v1636963507/strapi/Frame_101089_1ed2c13a09.svg?auto=format&fit=max&w=256')}
        />
        <h3>Cart abandonment email</h3>
        <p className="caption-custom">15% cart recovery rate</p>
      </div>
      
      <div>
        <Image
                  alt="slide image"
          layout="fixed"
          height="165"
          width="212"
          src={('https://res.cloudinary.com/mailmodo/image/upload/v1636963750/strapi/Frame_101092_3d7a4dc4e0.svg?auto=format&fit=max&w=256')}
        />
        <h3>Demo booking</h3>
        <p className="caption-custom">20% conversion for demos</p>
      </div>

          
      <div>
        <Image
          alt="slide image"
          layout="fixed"
          height="165"
          width="212"
          src={('https://res.cloudinary.com/mailmodo/image/upload/v1636963883/strapi/Frame_101093_d5c266f269.svg?auto=format&fit=max&w=256')}
        />
        <h3>NPS surveys</h3>
        <p className="caption-custom">45% response rate</p>
      </div>
    </Carousel>
  );
};

export default BannerCarousel;
