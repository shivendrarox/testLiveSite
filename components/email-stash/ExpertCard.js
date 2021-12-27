import React from 'react'
import styles from '../../components/email-stash/styles.module.scss';
import Image from 'next/image'

const ExpertCard = (props) => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      } 
    return (
        <div>
            <div className={styles.cardItem}>
                <div className={styles.labeltop}>
                    <Image
                        loader={myLoader}
                        src={props.image}
                        alt="Picture of Avatar"
                        width={305}
                        height={161}
                        layout="responsive"
                    />
                    <span className={styles.label}><font className='mm-overline' style={{ letterSpacing : '1px' }}>EXPERTS</font></span>
                 </div>

                <div className={styles.contents}>
                    <h4 className='mm-h4' style={{ color : '#101043' }}>Adam Connell</h4>
                    <p className={styles.caption} className='mm-markdown-standard'>Content Strategist and Founder</p>   
                    <hr/> 
                    <p  className='mm-markdown-standard'>Adam Connell is a content strategist with a background in SEO and email marketing...</p>
                </div>
                <center><div className={styles.buttoncontainer}><button className={styles.hoverbutton}>View Details</button></div></center>
            </div>
        </div>
    )
}

export default ExpertCard
