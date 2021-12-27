import styles from '../features.module.scss'
import React, { useState } from 'react';
import { getImageUrl } from '../../../lib/strapiApi';
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import Link from 'next/link'

const CarouselBlock = (props) => {
  let jsxVar=props.content.carousels.map((template,index) => {
    return (<>
    <div style={{marginRight:"48px"}} >
    <Link passHref className="item-detail" href={template.readMoreLink??" "}>
             <a title={template.title}>
                 <Image
                   src={  (template.logo?.url)  }
                   className="w-100 avtar"
                   alt={template.title}
                   height={template.logo?.height}
                   width={template.logo?.width}
                 />
       </a>
       </Link>
    </div>
     
     </>)
   });
  return (
    <>
      <div style={{ backgroundColor: "#ffff" }} className={styles.carousel_block + " "}>
          <Marquee
          speed={100}>
              {jsxVar}
          </Marquee>
      </div>
    </>
  )
}

export default CarouselBlock