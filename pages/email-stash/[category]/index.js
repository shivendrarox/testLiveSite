import styles from '../../../components/email-stash/styles.module.scss';
import CardItem from '../../../components/email-stash/CardItem'
import CardImage from '../../../components/email-stash/CardImage';
import ExpertCard from '../../../components/email-stash/ExpertCard';
import CardRating from '../../../components/email-stash/CardRating'
import SideNavBar from '../../../components/email-stash/SideNavBar'
import Image from 'next/image'
import { Pagination } from 'antd';
import  Breadcrumb  from '../../../components/commonComponent/Breadcrumb/Breadcrumb';
import 'antd/lib/pagination/style/index.css'
import Link from 'next/link'

const Page = (props) => {
    const pageSize = 12;

    const handleChange = (page) => {
        setData({
            current: page,
            current: page,
            minIndex: (page - 1) * pageSize,
            maxIndex: page * pageSize,
            yo:"ef"
          })
      };
        const myLoader = ({ src, width, quality }) => {
            return `${src}?w=${width}&q=${quality || 75}`
        }
    return(
        <div className={styles.maincontainer}>

            <div className={styles.openingcard}>
                        <h2 className='mm-h2'>We want to give back to our beloved community!</h2>
                        <div className={styles.card} >
                        <Image
                            loader={myLoader}
                            src="/email-stash/mainbg.png"
                            alt="Picture of the Hero"
                            width={641}
                            height={222}
                        />
                        </div>
            </div>

        <div className={styles.breadcrumb}>
            <Breadcrumb />
        </div>
            
            <div className={styles.component}>
                <SideNavBar categories={props.allCategories} />
                <div className={styles.mainpage}>
                <div className={styles.breadcrumb}>
        
        </div>
       
                         <input name="search" type="search" className={styles.searchbar} placeholder="Search" aria-label="" aria-describedby="basic-addon1" />
                        <h3 className='mm-h3'>Newsletter</h3>
                        <p className='mm-markdown-standard' style={{ color : 'rgba(43, 44, 44, 0.6)' }}>Get quick links for everyday email marketting things Get quick links for everyday email marketting things</p>
                        <button className={styles.buttons}>All</button>
                        <button className={styles.buttons}>Saas</button>
                        <button className={styles.buttons}>Growth</button>
                        <button className={styles.buttons}>Growth</button>
                        <button className={styles.buttons}>Growth</button>
                        <button className={styles.buttons}>Growth</button>
                        <button className={styles.buttons}>Growth</button>
                        <button  className={styles.spans}>
                                <span><div className={styles.spansdiv}></div></span>
                                <span><div className={styles.spansdiv}></div></span>
                                <span><div className={styles.spansdiv}></div></span>
                        </button>
                    
                    {/* <div className={styles.cardContainer}>
                        <CardRating image='/email-stash/card1.png'/>
                        <CardRating image='/email-stash/card2.png' />
                        <ExpertCard image='/email-stash/expert.png' />
                    </div> */}

                    <div className={styles.cardContainer}>
                      {
                        props.allCardsProps.map((item)=>{
                          return(
                            <>
                            <Link passHref href={`${item.slug1}/${item.slug2}/`}>
                            <a>
                            <CardRating cardData={item}/>
                            </a>
                            </Link>

                         

                            </>
                          )
                        })
                      }
                    </div>
                   
                   
                    <div className={styles.cardContainer}>
                        <CardImage image='/email-stash/1.png' />
                        <CardImage image='/email-stash/2.png' />
                        <CardImage image='/email-stash/3.png' />
                    </div>

                    <div className={styles.cardContainer}>
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </div>

                    <center>

                    <div style={{textAlign:"center"}} className={styles.pagination}>
                        <Pagination pageSize={pageSize}
                        onChange={handleChange} defaultCurrent={1} />
                    </div>

                    </center>

                    <div className={styles.footerCard}>
                        <div className={styles.cta_img}>
                            <Image
                                loader={myLoader}
                                src="/email-stash/footerCard.png"
                                alt="Picture of the Hero"
                                width={783}
                                height={246}
                            />
                        </div>
                        <div>
                            <p className={styles.heading}>Drive more demo bookings like HobSpace</p>
                            <p className={styles.para}>Start your free trial today and send your first interactive email within minutes.</p>
                        </div>
                        <div><button className={styles.buttons}>Get Started</button></div>
                    </div>

                </div>
            </div>


        </div>

        
    )
}

// pass props to Page component
export async function getStaticProps(context) {
    const categoryName = context.params.category; // get category slug from params

    const PageData = await fetch(
      `https://opensheet.vercel.app/1FMcVR2j9Ph9ovKzwwtrwO10uLduRSEVkxyjosPHtDR0/Sheet1`
    ).then((res) => res.json());
    const PageProps = PageData.filter(
      (item) => item.midSlug === categoryName
    )[0];

    const cardsData = await fetch(
      `https://opensheet.vercel.app/1FMcVR2j9Ph9ovKzwwtrwO10uLduRSEVkxyjosPHtDR0/pages`
    ).then((res) => res.json());
    const allCardsProps = cardsData.filter(
      (item) => item.slug1 === categoryName
    );


    const categoryData = await fetch(
      `https://opensheet.vercel.app/1FMcVR2j9Ph9ovKzwwtrwO10uLduRSEVkxyjosPHtDR0/Sheet1`
    ).then((res) => res.json());
    const allCategories = categoryData.filter(
      value => Object.keys(value).length !== 0
    );
  
    return {
      props: { PageProps, allCardsProps, allCategories },
    };
  }
  
  export async function getStaticPaths(context) {
    let allMidSlugs = await fetch(
      'https://opensheet.vercel.app/1FMcVR2j9Ph9ovKzwwtrwO10uLduRSEVkxyjosPHtDR0/Sheet1'
    ).then((res) => res.json());
  

    return {
      paths: allMidSlugs.map((slug) => {
        return {
          params: {
            category: slug.midSlug,
          },
        };
      }),
      fallback: false,
    };
  }
  

export default Page;