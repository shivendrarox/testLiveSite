import React from 'react'
import styles from '../../components/email-stash/styles.module.scss';
import Image from 'next/image'
import Link from 'next/link'
const SideNavBar = (props) => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <div>
            {console.log(props)}
            <div className={styles.sidebar}>
                {
                    props.categories.map((item)=>{
                        return(
                            <>
                            <Link passHref href={item.midSlug??" "} >
                            <a>
                            <p><div className={styles.back , styles.active}>
                            <div>{item.Category}</div>
                            <div className={styles.cta_img}>
                                <Image
                                    loader={myLoader}
                                    src="/email-stash/chevron-down.png"
                                    alt="Picture of the Hero"
                                    width={8}
                                    height={12}
                                />
                            </div>
                        </div>
                    </p>
                    </a>
                            </Link>
                         
                    
                            </>
                        )
                    })
                }
                
            
                </div>
                
        </div>
    )
}

export default SideNavBar
