import React from 'react'
import SideNavBar from '../../../components/email-stash/Cards/SideNavBar'
import Image from 'next/image'
//import { Pagination } from 'antd';
import  Breadcrumb  from '../../../components/commonComponent/Breadcrumb/Breadcrumb';
import 'antd/lib/pagination/style/index.css'
import cardstyles from '../../../components/email-stash/Cards/styles.module.scss'
import marked from 'marked'
import Link from 'next/link'

const CardItem = (props) => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <>
        {console.log(props.PageProps)}
        <div className={cardstyles.component}>
                <div><SideNavBar /></div>
                <div className={cardstyles.boxprops}>
                <div className={cardstyles.maindiv}>
                    <div>
                        <Breadcrumb />
                    </div>
                    {props.PageProps.H1&&<div><h1 className='mm-h3' dangerouslySetInnerHTML={{__html:marked(props.PageProps?.H1)}} className={cardstyles.mainheading}></h1></div>}
                    {props.PageProps.Description&&<div dangerouslySetInnerHTML={{__html:marked(props.PageProps.Description)}} className='mm-markdown-standard' ></div>}
                   
                   <div className={cardstyles.subdiv}>
                        <div className={cardstyles.submaindiv}>    
                            {props.PageProps.Frequency&&<div className={cardstyles.inneritems1}>
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
                                    <div dangerouslySetInnerHTML={{__html:marked(props.PageProps.Frequency)}}  className={cardstyles.items+" mm-markdown-standard "}></div>
                                </div>
                            </div>}
                            
                            
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
                            {props.PageProps.Website&&<div className={cardstyles.inneritems1}>
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
                                    <div dangerouslySetInnerHTML={{__html:marked(props.PageProps.Website)}}  className='mm-markdown-standard'></div>
                                </div>
                            </div>}
                            {props.PageProps.Flair&&<div className={cardstyles.inneritems1}>
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
                                        {
                                            props.PageProps.Flair.split(',').map(item=>{
                                                return(
                                                    <>
                                                    <div><button className={cardstyles.button}>{item}</button></div>
                                                    </>)
                                            })
                                        }
                                    </div>
                                </div>
                            </div>}
                            {props.PageProps.WhyOnThisList&&<div className={cardstyles.inneritems1}>
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
                                <div className='mm-markdown-standard' dangerouslySetInnerHTML={{__html:marked(props.PageProps.WhyOnThisList)}}>
                                    
                                </div>
                            </div>}    
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

// pass props to Page component
export async function getStaticProps(context) {
    const categorySlug = context.params.category; // get  category slug from params

    const PageData = await fetch(
      `https://opensheet.vercel.app/1FMcVR2j9Ph9ovKzwwtrwO10uLduRSEVkxyjosPHtDR0/pages`
    ).then((res) => res.json());

    const PageProps = PageData.filter(
      (item) => item.slug1 === categorySlug && item.slug2 === context.params.categoryItem
    )[0];
  
    return {
      props: { PageProps },
    };
  }
  
  export async function getStaticPaths(context) {
    let allSlugs = await fetch(
      'https://opensheet.vercel.app/1FMcVR2j9Ph9ovKzwwtrwO10uLduRSEVkxyjosPHtDR0/pages'
    ).then((res) => res.json());
  
    return {
      paths: allSlugs.map((item) => {
        return {
          params: {
            category: item.slug1,
            categoryItem: item.slug2,
          },
        };
      }),
      fallback: false,
    };
  }
  

export default CardItem
