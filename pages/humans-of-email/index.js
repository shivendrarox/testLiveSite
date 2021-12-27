// import Breadcrumb from '../../components/commonComponent/Breadcrumb/Breadcrumb';
import Head from 'next/head';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import Image from 'next/image';
import styles from '../../assets/humans-of-email/styles-index.module.scss'
import Cards from '../../components/strapi-humans-of-email-pages/indexPage/Cards'
import Link from 'next/link';

const Page = ({totalNewsletters,totalPages,allCardsData}) =>{
return (
    <>
            <Head>
                <style>{'body{background-color:#ffffff !important;font-family:Inter !important;}'}</style>
            </Head>

            <NextSeo
                title={`Humans of Emails - Stories and Experiences of Email Folks | Mailmodo`}
                description= {`Welcome to the Humans of Email project by Mailmodo. In this project, we are collecting all the email-related life and career experiences from all over the globe.`}
                canonical={`https://www.mailmodo.com/humans-of-email/`}
                keywords={" "}
                openGraph={{
                    url: `https://www.mailmodo.com/humans-of-email/`,
                    title: `Humans of Emails - Stories and Experiences of Email Folks | Mailmodo`,
                    description: `Welcome to the Humans of Email project by Mailmodo. In this project, we are collecting all the email-related life and career experiences from all over the globe.`,
                    //type: 'Article',
                    locale: 'en_US',
                    //article: {
                        //authors: ['Mailmodo'],
                        // publishedTime: blocks.seo?.createdAt??" ",
                        // modifiedTime: blocks.seo?.updatedAt??" "
                    //},
                    images: [{ url: `https://res.cloudinary.com/mailmodo/image/upload/v1637064200/strapi/Mask_Group_3_6f6e710d2e.png` }],
                }}
                twitter={{
                    handle: '@mailmodo',
                    site: 'twitter.com/mailmodo',
                    cardType: 'summary_large_image',
                  }}
            />  

<div className={styles.hero} >
    {/* <div className="container px-0">
    <div className={styles.breadcrumb_container} >
                <Breadcrumb/>
            </div>
    </div> */}
         
    <div style={{display:'flex',width:"100%",justifyContent:"center"}} >
        <div className={styles.hero_img_container}>
            <h1>HUMANS OF EMAIL</h1>
            <div className={styles.hero_matter} style={{textAlign:'center',position:"absolute",zIndex:"5"}}>
                <h2>Stories. Emails. Life.</h2>
                <p>Real-life stories of email marketers, developers, and email geeks from around the globe.</p>
            </div>
        <Image
                height="611"
                width="1368"
                src="https://res.cloudinary.com/mailmodo/image/upload/f_webp/v1636807761/strapi/Group_101734_3c6c672235.png"
                />
        </div>
    </div>
                
            </div>
       
       <div className={styles.cards_fold}>
        <Cards allCardsData={allCardsData}  totalNewsletters={totalNewsletters} totalPages={totalPages} />
       </div>

       <div className={styles.cta}>
                    <div className={styles.flex_container}>
                        <div className={styles.flex_item_left}>
                        Hey human, got an email story to tell?
                        </div>
                        <div className={styles.flex_item_right + " "}>
                            <Link passHref href={ "https://docs.google.com/forms/d/e/1FAIpQLSeVBFVWqtvM_rY9wE_rKAYfx4Iz8rIpBKugObjyHPzHfr8Gxg/formrestricted"}>
                               <a>
                                <button className={styles.cta_btn}>{"Share it"}</button>
                                </a>
                            </Link>
                        </div>
                    </div>
         </div>
    </>
)
}

export async function getStaticProps(context) {

    let response = await fetch("https://mm-strapi-4.azurewebsites.net/humans-of-emails/"); 
    let data = await response.json();
    const allCardsData = data;
    const totalNewsletters = data.length
    const pageSize = 12
    const totalPages =  pageSize * (Math.ceil(totalNewsletters/pageSize)) // Logic for total no of pagination pages
  
    return {
        props: { totalNewsletters,totalPages,allCardsData }
    };
  }
  
export default Page