import React from "react";
// import Swiper from 'react-id-swiper';
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image';
const BannerCarousel = () => {

    return (
        <div style={{marginBottom:"80px"}}>
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
                    alt="tab 1 image"

                    height="562"
                    width="947"
                    src={('https://res.cloudinary.com/mailmodo/image/upload/v1637247216/strapi/1_1_85737e0d22.png')}
                />
                <h3 style={{paddingTop:"24px",paddingBottom:'24px'}}>Create both AMP & HTML emails with a no-code drag-and-drop editor</h3>

            </div>

            <div>
            <Image
                                alt="tab 2 image"
                                    height="562"
                                    width="947"
                                    src={('https://res.cloudinary.com/mailmodo/image/upload/v1637247355/strapi/2_2_bc7f005ae2.png')}
                                />
                <h3 style={{paddingTop:"24px",paddingBottom:'24px'}} >Unlimited contacts at no extra cost, advanced segmentation and filtering</h3>
            </div>

            <div>
            <Image
                                                                alt="tab 3 image"
                                    height="562"
                                    width="947"
                                    src={('https://res.cloudinary.com/mailmodo/image/upload/v1637247414/strapi/3_2_4282ddf575.png')}
                                />
                <h3 style={{paddingTop:"24px",paddingBottom:'24px'}} >Intuitive email journey builder with a range of triggers and automations.</h3>
            </div>

            <div>
            <Image
                                                                alt="tab 4 image"
                                   height="562"
                                   width="947"
                                    src={('https://res.cloudinary.com/mailmodo/image/upload/v1637247462/strapi/4_1_fe3754d38d.png')}
                                />
                <h3 style={{paddingTop:"24px",paddingBottom:'24px'}} >Build and customize email campaigns for all your business requirements.</h3>
            </div>

        </Carousel>
        </div>
    );
};

export default BannerCarousel;
