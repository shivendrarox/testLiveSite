import React from 'react'
import styles from './styles.module.scss';
import Image from 'next/image'

const SideNavBar = () => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <div>
        <div className={styles.sidebar}>
                <p><div className={styles.back , styles.active}>
                        <div>Newsletter</div>
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
                <p><div className={styles.back}>
                <div>Podcasts</div>
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
                <p><div className={styles.back}>
                    <div>Courses</div>
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
                <p><div className={styles.back}>
                    <div>Blogs</div>
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
                <p><div className={styles.back}>
                    <div>Communities</div>
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
                <p><div className={styles.back}>
                <div>Videos</div>
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
                <p><div className={styles.back}>
                <div>Ebooks</div>
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
                <p><div className={styles.back}>
                <div>Best Articles</div>
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
                <p><div className={styles.back}>
                <div>Directories</div>
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
                <p><div className={styles.back}>
                <div>Report</div>
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
                <p><div className={styles.back}>
                <div>Tools</div>
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
                <p><div className={styles.back}>
                <div>Checklist</div>
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
            </div>
            
    </div>
    )
}

export default SideNavBar
