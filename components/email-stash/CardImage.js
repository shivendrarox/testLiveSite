import React from 'react'
import Image from 'next/image';

import styles from '../../components/email-stash/styles.module.scss';
const CardImage = (props) => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      } 
    return (
        <div>
            <div className={styles.cardImage}>
            
            <div className={styles.labeltop}>
                <Image
                    loader={myLoader}
                    src={props.image}
                    alt="Picture of Avatar"
                    width={307}
                    height={146}
                    layout="responsive"
                />
                <span className={styles.label}><font className='mm-overline' style={{ letterSpacing : '1px' }}>VIDEO</font></span>
            </div>
            <div className={styles.para}>
                <h5 className='mm-h5' style={{ color : '#101043' }}>Ecommerce Email Marketing with Chase Dimond</h5>
            </div>
            </div>
        </div>
    )
}

export default CardImage
