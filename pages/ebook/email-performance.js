import { NextSeo, ArticleJsonLd } from 'next-seo'
//import Link from 'next/link'
//Page Components
import Hero from "../../components/ebookPages/ebook2/Hero/Hero";
//import Features from "../../components/ebookPages/ebook2/Features/Features";
import Section from '../../components/ebookPages/ebook2/Section/Section';
import EndBlock from '../../components/ebookPages/ebook2/EndBlock/EndBlock';
import Faq from '../../components/ebookPages/ebook2/Faq/Faq';
//import styles from '../../components/ebookPages/ebook2/features.module.scss';


const Page = ({}) => {
    
    return(
        <>
         <ArticleJsonLd
                url={`https://www.mailmodo.com/ebook/email-performance/`}
                title={"How to Improve Email Performance - E-book - Best Practices, Framework, Tips | Mailmodo"}
                images={[`https://res.cloudinary.com/mailmodo/image/upload/v1632462792/strapi/ogg_0cdf4621c5.png`]}
                // datePublished={blocks.seo?.createdAt??" "}
                // dateModified={blocks.seo?.updatedAt??" "}
                authorName={ "Mailmodo"}
                publisherName="Mailmodo"
                publisherLogo="https://www.mailmodo.com/static/images/logo/logo-full.svg"
                description={`Email performance can be monitored and improved by analyzing common email metrics. This e-book contains best practices and guides to help you fix lagging email conversions.`}/> 

            <NextSeo
                title={`How to Improve Email Performance - E-book - Best Practices, Framework, Tips | Mailmodo`}
                description= {`Email performance can be monitored and improved by analyzing common email metrics. This e-book contains best practices and guides to help you fix lagging email conversions.`}
                canonical={`https://www.mailmodo.com/ebook/email-performance/`}
                keywords={" "}
                openGraph={{
                    url: `https://www.mailmodo.com/ebook/email-performance/`,
                    title: `How to Improve Email Performance - E-book - Best Practices, Framework, Tips | Mailmodo`,
                    description: `Email performance can be monitored and improved by analyzing common email metrics. This e-book contains best practices and guides to help you fix lagging email conversions.`,
                    type: 'Article',
                    locale: 'en_US',
                    article: {
                        authors: ['Mailmodo'],
                        // publishedTime: blocks.seo?.createdAt??" ",
                        // modifiedTime: blocks.seo?.updatedAt??" "
                    },
                    images: [{ url: `https://res.cloudinary.com/mailmodo/image/upload/v1632462792/strapi/ogg_0cdf4621c5.png` }],
                }}
                twitter={{
                    handle: '@mailmodo',
                    site: 'twitter.com/mailmodo',
                    cardType: 'summary_large_image',
                  }}
            />  


            <Hero/>
            {/* <Features/> */}
            <Section/>
            <Faq/>
            <EndBlock/>
        </>

        
    )
}

export default Page;