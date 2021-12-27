import React from 'react';
import styles from '../features.module.scss';
import Image from 'next/image'

const Brands = (props) => {
    return (
      <>
      <div style={{backgroundColor:"#ffffff"}} className={styles.brands+" "}>
            {props.content.Title && <h2 className={styles.heading+" mm-h2"}>{props.content.Title}</h2>}
            <p className={styles.desc+" mm-h6"}>{props.content.Description??" "}</p>

          <div className="container">
            <div className={styles.img_row+" row mt-5 "}>

                    {props.content.logoImage.map((ImageItem,index)=>{
                        return(
                            <>
                                <div className="col-md-2 mr-md-5 align-self-center">
                                    {/* <img src="/static/images/fund.png" className={styles.image}> </img> */}
                                    <Image
                                        className={styles.image + " "}
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