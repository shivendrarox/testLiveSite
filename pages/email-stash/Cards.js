import React from 'react'
import styles from '../../components/email-stash/styles.module.scss'
import SideNavBar from '../../components/email-stash/Cards/SideNavBar'
import Image from 'next/image'
//import { Pagination } from 'antd';
import  Breadcrumb  from '../../components/commonComponent/Breadcrumb/Breadcrumb';
import 'antd/lib/pagination/style/index.css'
import cardstyles from '../../components/email-stash/Cards/styles.module.scss'
import Link from 'next/link'


const Cards = () => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <>
            <div className={cardstyles.component}>
                <div><SideNavBar /></div>
                <div className={cardstyles.boxprops}>
                <div className={cardstyles.maindiv}>
                    <div>
                        <Breadcrumb />
                    </div>
                    <div><h3 className='mm-h3' className={cardstyles.mainheading}>Campaign Monitor Newsletter</h3></div>
                    <div><p className='mm-markdown-standard'>Newsletter about marketing events, marketing materials, product announcements</p></div>
                   
                   <div className={cardstyles.subdiv}>
                        <div className={cardstyles.submaindiv}>    
                            <div className={cardstyles.inneritems1}>
                                <div className={cardstyles.items}>
                                    <Image
                                        loader={myLoader}
                                        src="/email-stash/calendar.png"
                                        alt="Picture of the Hero"
                                        width={20}
                                        height={20}
                                    />
                                    <span><p className='mm-markdown-standard'>Frequency</p></span>
                                </div>
                                <div className={cardstyles.flextext}>
                                    <div className={cardstyles.items}><p className='mm-markdown-standard'>Weekly</p></div>
                                </div>
                            </div>
                            
                            
                            <div className={cardstyles.inneritems1}>
                                <div className={cardstyles.items}>
                                    <Image
                                        loader={myLoader}
                                        src="/email-stash/user.png"
                                        alt="Picture of the Hero"
                                        width={20}
                                        height={20}
                                    />
                                    <span><p className='mm-markdown-standard'>Author</p></span>
                                </div>
                                <div className={cardstyles.flextext}>
                                    <div className={cardstyles.items}><p className='mm-markdown-standard'>Campaign Monitor</p></div>
                                </div>
                            </div>
                            <div className={cardstyles.inneritems1}>
                                <div className={cardstyles.items}>
                                    <Image
                                        loader={myLoader}
                                        src="/email-stash/globe.png"
                                        alt="Picture of the Hero"
                                        width={20}
                                        height={20}
                                    />
                                    <span><p className='mm-markdown-standard'>Organization</p></span>
                                </div>
                                <div className={cardstyles.flextext}>
                                    <div className={cardstyles.items}><p className='mm-markdown-standard'>Campaign Monitor</p></div>
                                </div>
                            </div>
                            <div className={cardstyles.inneritems1}>
                                <div className={cardstyles.items}>
                                    <Image
                                        loader={myLoader}
                                        src="/email-stash/link.png"
                                        alt="Picture of the Hero"
                                        width={20}
                                        height={20}
                                    />
                                    <span><p className='mm-markdown-standard'>Website URL</p></span>
                                </div>
                                <div className={cardstyles.flextext}>
                                    <div className={cardstyles.items}><p className={cardstyles.link}><Link passHref href='https://www.letstalkstrategy.co.uk'><a>www.letstalkstrategy.co.uk</a></Link></p></div>
                                </div>
                            </div>
                            <div className={cardstyles.inneritems1}>
                                <div className={cardstyles.items}>
                                    <Image
                                        loader={myLoader}
                                        src="/email-stash/bookmark.png"
                                        alt="Picture of the Hero"
                                        width={20}
                                        height={20}
                                    />
                                    <span><p className='mm-markdown-standard'>Flair</p></span>
                                </div>
                                <div className={cardstyles.flextext}>
                                    <div className={cardstyles.items1}>
                                        <div><button className={cardstyles.button}>Email Marketing</button></div>
                                        <span><div><button className={cardstyles.button}>Growth</button></div></span>
                                    </div>
                                </div>
                            </div>
                            <div className={cardstyles.inneritems1}>
                                <div className={cardstyles.items}>
                                    <Image
                                        loader={myLoader}
                                        src="/email-stash/helpcircle.png"
                                        alt="Picture of the Hero"
                                        width={20}
                                        height={20}
                                    />  
                                    <span><p className='mm-markdown-standard'>Why On This List</p></span>
                                </div>
                                <div className={cardstyles.flextext}>
                                    <ol>
                                        <li><div className={cardstyles.items1}><p className={cardstyles.para}>Roundup of all email events, guides, and trends</p></div></li>
                                        <li><div className={cardstyles.items1}><p className={cardstyles.para}>Informative</p></div></li>
                                        <li><div className={cardstyles.items1}><p className={cardstyles.para}>Mainly content on digital marketing strategies</p></div></li>
                                    </ol>
                                    
                                </div>
                            </div>    
                        </div>
                   </div>
                   
                   

    
                </div>
                <div className={cardstyles.twocards}>
            <div className={cardstyles.ratingCard}>
                            <div className={cardstyles.innercard1}>
                                <div className={cardstyles.maintext}>Rate</div>
                                <div className={cardstyles.stars}>
                                    <div className={cardstyles.clipstar}></div>
                                    <div className={cardstyles.clipstar}></div>
                                    <div className={cardstyles.clipstar}></div>
                                    <div className={cardstyles.clipstar}></div>
                                    <div className={cardstyles.clipstar1}></div>
                                </div>
                            </div>
                            <div className={cardstyles.innercard}>
                                <div className={cardstyles.maintext}>Share</div>
                                <div className={cardstyles.icons}>
                                    <div className={cardstyles.icon}>
                                        <Image
                                            loader={myLoader}
                                            src="/email-stash/linkedin.png"
                                            alt="Picture of the Hero"
                                            width={22}
                                            height={22}
                                        />
                                    </div>
                                    <div className={cardstyles.icon}>
                                        <Image
                                            loader={myLoader}
                                            src="/email-stash/twitter.png"
                                            alt="Picture of the Hero"
                                            width={22}
                                            height={22}
                                        />
                                    </div>
                                    <div className={cardstyles.icon}>
                                        <Image
                                            loader={myLoader}
                                            src="/email-stash/fb.png"
                                            alt="Picture of the Hero"
                                            width={22}
                                            height={22}
                                        />
                                    </div>
                                    <div className={cardstyles.icon}>
                                    <button  className={cardstyles.spans}>
                                            <span><div className={cardstyles.spansdiv}></div></span>
                                            <span><div className={cardstyles.spansdiv}></div></span>
                                            <span><div className={cardstyles.spansdiv}></div></span>
                                    </button>
                                    </div>
                                </div>
                            </div>
            </div>
                <div className={cardstyles.ad}>
                    <div className={cardstyles.flexbox}>
                        <div className={cardstyles.subdiv}><p className={cardstyles.heading}>Bring life to your emails</p></div>
                        <div className={cardstyles.subdiv}><p className={cardstyles.subheading}>Convert your emails into experiences with <b>interactive AMP elements</b></p></div>
                        <div><center><button className={cardstyles.button}>Sign up on Mailmodo</button></center></div>
                    </div>
                    <div className={cardstyles.image}>
                        <Image
                            loader={myLoader}
                            src="/email-stash/cardbg.png"
                            alt="Picture of the Hero"
                            width={197}
                            height={158}
                        />
                    </div>
                </div>
                </div>
            </div>
           
        </div>
        <div className={cardstyles.submitcard}>
                        <div className={cardstyles.flexbox}>
                            <div className={cardstyles.subdiv}><p className={cardstyles.heading}>Submit your Newsletter!</p></div>
                            <div className={cardstyles.subdiv}><p className={cardstyles.subheading}>We would love to be your messenger. Tell us all about it here.</p></div>
                            <div className={cardstyles.subdiv}><button className={cardstyles.button}>Submit</button></div>
                        </div>
                        <div className={cardstyles.image}>
                            <Image
                                loader={myLoader}
                                src="/email-stash/newsletter.png"
                                alt="Picture of the Hero"
                                width={303}
                                height={142}
                            />
                        </div>
            </div>
        </>
    )
}

export default Cards
