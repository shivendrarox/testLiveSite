import { NextSeo, ArticleJsonLd } from 'next-seo'
//import Link from 'next/link'
//Page Components
import Hero from "../../components/emailChecklist/Hero/Hero";
//import Features from "../../components/emailChecklist/Features/Features";
import Section from '../../components/emailChecklist/Section/Section';
import EndBlock from '../../components/emailChecklist/EndBlock/EndBlock';
import Faq from '../../components/emailChecklist/Faq/Faq';
//import styles from '../../components/emailChecklist/features.module.scss';


const Page = ({}) => {
    
    return(
        <>
         <ArticleJsonLd
                url={`https://www.mailmodo.com/checklist/get/`}
                title={"The Ultimate Email Campaign QA Checklist | Mailmodo"}
                images={[`https://res.cloudinary.com/mailmodo/image/upload/v1634572839/strapi/Og_image_f06ab67f3d.png`]}
                // datePublished={blocks.seo?.createdAt??" "}
                // dateModified={blocks.seo?.updatedAt??" "}
                authorName={ "Mailmodo"}
                publisherName="Mailmodo"
                publisherLogo="https://www.mailmodo.com/static/images/logo/logo-full.svg"
                // description={`Email performance can be monitored and improved by analyzing common email metrics. This e-book contains best practices and guides to help you fix lagging email conversions.`}
                /> 

            <NextSeo
                title={`The Ultimate Email Campaign QA Checklist | Mailmodo`}
                // description= {`Email performance can be monitored and improved by analyzing common email metrics. This e-book contains best practices and guides to help you fix lagging email conversions.`}
                canonical={`https://www.mailmodo.com/checklist/get/`}
                keywords={" "}
                openGraph={{
                    url: `https://www.mailmodo.com/checklist/get/`,
                    title: `The Ultimate Email Campaign QA Checklist | Mailmodo`,
                    // description: `Email performance can be monitored and improved by analyzing common email metrics. This e-book contains best practices and guides to help you fix lagging email conversions.`,
                    // type: 'Article',
                    locale: 'en_US',
                    // article: {
                        // authors: ['Mailmodo'],
                        // publishedTime: blocks.seo?.createdAt??" ",
                        // modifiedTime: blocks.seo?.updatedAt??" "
                    //},
                    images: [{ url: `https://res.cloudinary.com/mailmodo/image/upload/v1634572839/strapi/Og_image_f06ab67f3d.png` }],
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
            <EndBlock/>
        </>

        
    )
}

export default Page;