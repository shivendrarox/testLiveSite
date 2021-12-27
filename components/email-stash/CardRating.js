import React from 'react'
import styles from '../../components/email-stash/styles.module.scss';
import Image from 'next/image'

const CardRating = (props) => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      } 
    return (
        <div>
             <div className={styles.cardItem}>
            <div className={styles.labeltop}>
                {props.cardData.seoOgImage && <Image
                    loader={myLoader}
                    src={props.cardData.seoOgImage}
                    alt="Picture of Avatar"
                    width={305}
                    height={161}
                    layout="responsive"
                />}
                <span className={styles.label}>NEWSLETTER</span>
            </div>

            <div className={styles.contents}>
                <h4 className='mm-h4' style={{ color : '#101043' }}>{props.cardData.H1}</h4>
                {props.cardData.Description && <p  className='mm-markdown-standard'>{props.cardData.Description}</p>}
                <div className={styles.clipstar}></div>
                <div className={styles.clipstar}></div>
                <div className={styles.clipstar}></div>
                <div className={styles.clipstar}></div>
                <div className={styles.clipstar1}></div>
            </div>

            <div className={styles.cardFooter}>
               <div className={styles.hrtag}><hr/></div>
                <div className={styles.Itemfooter}>
                    <div className={styles.Itemfooter}>
                        <div className={styles.imgicon}>
                        <Image
                            loader={myLoader}
                            src='/email-stash/mailmodo.png'
                            alt="Picture of Avatar"
                            width={14}
                            height={14}
                        />
                        </div>
                        <div> Mailmodo</div>
                    </div>
                    <div  className={styles.Itemfooter}>
                        <div className={styles.cta_image} >
                        <Image
                            loader={myLoader}
                            src='/email-stash/levelicon.png'
                            alt="Picture of Avatar"
                            width={14}
                            height={14}
                        />
                        </div>
                        <div className={styles.label2}> 24 subscribers</div>
                    </div>

                </div>
                </div>
                
                <center><div className={styles.buttoncontainer}><button className={styles.hoverbutton}>View Details</button></div></center>
            </div>
        </div>
    )
}

export default CardRating
