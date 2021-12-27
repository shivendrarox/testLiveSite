import { NextSeo, ArticleJsonLd } from 'next-seo'
import Head from 'next/head'
import { getEventPagesBySlug , getImageUrl,getAllEventPageSlugs,  } from '../../lib/strapiApi'
//Page Components
import Hero from "../../components/strapi-event-pages/Hero/Hero";
import Brands from "../../components/strapi-event-pages/Brands/Brands";
import Features from "../../components/strapi-event-pages/Features/Features";
import Section from '../../components/strapi-event-pages/Section/Section';
import GenericBlock from '../../components/strapi-event-pages/GenericBlock/GenericBlock';
import GenericMarkdownBlock from '../../components/strapi-event-pages/GenericMarkdownBlock/GenericMarkdownBlock';
import CarouselBlock from '../../components/strapi-event-pages/CarouselBlock/CarouselBlock';
import TabBlock from '../../components/strapi-event-pages/TabBlock/TabBlock';
import Testimonial from '../../components/strapi-event-pages/Testimonial/Testimonial';
import Faq from '../../components/strapi-event-pages/Faq/Faq';
import EndBlock from '../../components/strapi-event-pages/EndBlock/EndBlock';
import Link from 'next/link';
import styles from '../../components/strapi-event-pages/features.module.scss';


const Page = ({ slug, blocks }) => {

    let componentsArr=[];
    blocks.boxes.forEach(element => {
        let componentType = element.__component.split('.')[1];
        // console.log(componentType)
        switch (componentType) {
            case 'logo-box':
                componentsArr.push(<Brands content={element}/>)
                break;
            case 'feature-box':
              componentsArr.push(<Features content={element}/>)
              break;
            case 'feature-list-box':
              componentsArr.push(<Section content={element}/>);
              break;
            case 'generic-box':
                componentsArr.push(<GenericBlock content={element}/>);
            break;
            case 'generic-markdown-box':
                componentsArr.push(<GenericMarkdownBlock content={element}/>);
            break;
            case 'tab-box':
                componentsArr.push(<TabBlock content={element}/>);
              break;
            case 'carousel-box':
                componentsArr.push(<CarouselBlock content={element}/>);
            break;
            case 'faq-box':
                componentsArr.push(<Testimonial/>)
                componentsArr.push(<Faq content={element}/>);
             break;
          }
    });
//console.log(blocks.seo)
    return(
        <>
      <Head>
        <style>{'body{font-family:Inter !important;}'}</style>
      </Head>
         <ArticleJsonLd
                url={`https://www.mailmodo.com/events/${slug}/`}
                title={blocks.seo?.title??" "}
                images={[(blocks.seo?.shareImage?.image?.url)?(blocks.seo?.shareImage?.image.url):`https://www.mailmodo.com/static/images/og-image.png` ]}
                datePublished={blocks.seo?.createdAt??" "}
                dateModified={blocks.seo?.updatedAt??" "}
                authorName={ "Mailmodo"}
                publisherName="Mailmodo"
                publisherLogo="https://www.mailmodo.com/static/images/logo/logo-full.svg"
                description={blocks.seo?.description??` `}/> 

            <NextSeo
                title={blocks.seo?.title??` `}
                description= {blocks.seo?.description??` `}
                canonical={`https://www.mailmodo.com/events/${slug}/`}
                keywords={blocks.seo?.keywords??" "}
                openGraph={{
                    url: `https://www.mailmodo.com/events/${slug}/`,
                    title: blocks.seo?.title??` `,
                    description: blocks.seo?.description??` `,
                    type: 'Article',
                    locale: 'en_US',
                    article: {
                        authors: ['Mailmodo'],
                        publishedTime: blocks.seo?.createdAt??" ",
                        modifiedTime: blocks.seo?.updatedAt??" "
                    },
                    images: [{ url: (blocks.seo?.shareImage?.image?.url)?(blocks.seo?.shareImage?.image.url):`https://www.mailmodo.com/static/images/og-image.png` }],
                }}
                twitter={{
                    handle: '@mailmodo',
                    site: 'twitter.com/mailmodo',
                    cardType: 'summary_large_image',
                  }}
            />  
        <Hero seoTitle={blocks.seo?.title??" "} slug={slug} content={blocks.header}/>
        {componentsArr.map(element=>{
          return element
        })}
      { blocks.footer && <EndBlock seoTitle={blocks.seo?.title??" "} content={blocks.footer}/>}
        </>
    )
}

// pass props to Page component
export async function getStaticProps(context) {


    const slug = context.params.slug // get slug from params
    const blocks = await getEventPagesBySlug(slug)

    return {
        props: { slug, blocks }
    };
}

// generate HTML paths at build time
export async function getStaticPaths(context) {

    const slugs = await getAllEventPageSlugs();
    return {
        paths: slugs.map((slug) => {
            return {
                params: {
                    slug: slug
                },
            };
        }),
        fallback: false,
    };
}
export default Page;