import React from 'react'
import styles from '../../components/email-stash/styles.module.scss';
import Image from 'next/image'

const CardItem = () => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }
    return (
        <div>
            <div className={styles.cardItem2}>
                <div className={styles.contents}>
                           <div className={styles.labelfix}><span className={styles.label}><font className='mm-overline' style={{ letterSpacing : '1px' }}>NEWSLETTER</font></span></div>
                            <h4 className='mm-h4' style={{ color : '#101043' }}>The Mailmodo Bulletin</h4><br/>
                            <p className='mm-markdown-standard'>The Mailmodo Bulletin. Subscribe to receive our biweekly newsletter on a..</p>
                </div>
                        <div className={styles.cardFooter}>
                           <div className={styles.hrtag}><hr/></div>
                            <div className={styles.Itemfooter}>
                                <div className={styles.Itemfooter}>
                                    <div className={styles.dot}></div>
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
                        </div>
        </div>
    )
}

export default CardItem
