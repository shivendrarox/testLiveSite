import React from 'react';
import styles from '../features.module.scss';
import Image from 'next/image'

const myLoader = ({ src, width, quality="50" }) => {// default quality 50%
  let newSrc= src.replace('.jpg','.webp')
      newSrc= newSrc.replace('.png','.webp')

  return `https://res.cloudinary.com/mailmodo/image/upload/q_${quality}/v1628497684/strapi/${newSrc}`
}
const Brands = (props) => {
    return (
      <>
      <div style={{backgroundColor:"#ffffff"}} className={styles.brands+" "}>
          <h2 className={styles.brands_heading+" "}>TRUSTED BY TEAMS WORLDWIDE</h2>
          
          <div className="container">
            <div className={styles.img_row+" row mt-5 "}>

                    {props.content.logoImage.map((ImageItem,index)=>{
                        return(
                            <>
                                <div className="col-md-2 mr-md-5 align-self-center">
                                    {/* <img src="/static/images/fund.png" className={styles.image}> </img> */}
                                    <Image
                                        loader={myLoader}
                                        className={styles.image + " "}
                                        layout="responsive"
                                        height={ImageItem.image?.height}
                                        width={ImageItem.image?.width}
                                        src={ImageItem.image?.url ?? " "}
                                    />

                                    {(props.content.logoImage.length > index+1)?<div className={styles.mobile_space}></div>:<></>}
                                </div>
                            </>
                        )

                    })}
  

                    {/* <div className="col-md-2">
                        <img src="/static/images/insta.png" className={styles.image}>
                        </img>
                    </div>

                    <div className="col-md-2">
                        <img src="/static/images/fund.png" className={styles.image}>
                        </img>
                    </div>

                    <div className="col-md-2">
                        <img src="/static/images/rupeek.png" className={styles.image}>
                        </img>
                    </div>

                    <div className="col-md-2">
                        <img src="/static/images/foyr.png" className={styles.image}>
                        </img>
                    </div>

                    <div className="col-md-2">
                        <img src="/static/images/click.svg" className={styles.image}>
                        </img>
                    </div> */}

            </div>
          </div>

      </div>
      </>
    );
}
export default Brands;