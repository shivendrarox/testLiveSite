import { NextSeo, ArticleJsonLd } from 'next-seo'

//Page Components
import Hero from "../../components/ebook/Hero/Hero";
//import Features from "../../components/ebook/Features/Features";
import Section from '../../components/ebook/Section/Section';
import EndBlock from '../../components/ebook/EndBlock/EndBlock';
import Faq from '../../components/ebook/Faq/Faq';
//import styles from '../../components/ebook/features.module.scss';


const Page = ({}) => {

    
    return(
        <>
         <ArticleJsonLd
                url={`https://www.mailmodo.com/ebook/subject-line/`}
                title={"Subject Line Free E-book for Higher Email Conversions - Framework, Tips and Best Practices | Mailmodo"}
                images={[`https://mm-strapi-4.azurewebsites.net//uploads/ogg_1_09aba6b667.jpg`]}
                // datePublished={blocks.seo?.createdAt??" "}
                // dateModified={blocks.seo?.updatedAt??" "}
                authorName={ "Mailmodo"}
                publisherName="Mailmodo"
                publisherLogo="https://www.mailmodo.com/static/images/logo/logo-full.svg"
                description={`Subject line crafting for getting high email conversions is difficult. This guide provides the framework to craft winning subject lines, tips from experts and copywriters and more`}/> 

            <NextSeo
                title={`Subject Line Free E-book for Higher Email Conversions - Framework, Tips and Best Practices | Mailmodo`}
                description= {`Subject line crafting for getting high email conversions is difficult. This guide provides the framework to craft winning subject lines, tips from experts and copywriters and more`}
                canonical={`https://www.mailmodo.com/ebook/subject-line/`}
                keywords={" "}
                openGraph={{
                    url: `https://www.mailmodo.com/ebook/subject-line/`,
                    title: `Subject Line Free E-book for Higher Email Conversions - Framework, Tips and Best Practices | Mailmodo `,
                    description: `Subject line crafting for getting high email conversions is difficult. This guide provides the framework to craft winning subject lines, tips from experts and copywriters and more`,
                    type: 'Article',
                    locale: 'en_US',
                    article: {
                        authors: ['Mailmodo'],
                        // publishedTime: blocks.seo?.createdAt??" ",
                        // modifiedTime: blocks.seo?.updatedAt??" "
                    },
                    images: [{ url: `https://mm-strapi-4.azurewebsites.net//uploads/ogg_1_09aba6b667.jpg` }],
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