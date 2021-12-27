import { NextSeo, ArticleJsonLd } from 'next-seo'
import { getFeaturePagesBySlug , getImageUrl,getAllFeaturePageSlugs,  } from '../../lib/strapiApi'
//Page Components
import Hero from "../../components/strapi-features/Hero/Hero";
import Brands from "../../components/strapi-features/Brands/Brands";
import Features from "../../components/strapi-features/Features/Features";
import Section from '../../components/strapi-features/Section/Section';
//import GenericBlock from '../../components/strapi-features/GenericBlock/GenericBlock';
import GenericMarkdownBlock from '../../components/strapi-features/GenericMarkdownBlock/GenericMarkdownBlock';

import CarouselBlock from '../../components/strapi-features/CarouselBlock/CarouselBlock';
import TabBlock from '../../components/strapi-features/TabBlock/TabBlock';
import TabBlockHorizontal from '../../components/strapi-features/TabBlock/TabBlockHorizontal';

import Testimonial from '../../components/strapi-features/Testimonial/Testimonial';
import Faq from '../../components/strapi-features/Faq/Faq';
import EndBlock from '../../components/strapi-features/EndBlock/EndBlock';
import CtaBlock from '../../components/strapi-features/CtaBox/CtaBox';
import CardsBlock from '../../components/strapi-features/CardsBox/CardsBox.js';
import { useRouter } from 'next/router'
//import styles from '../../components/strapi-features/features.module.scss';


const Page = ({ slug, blocks }) => {
    const router = useRouter()


    let componentsArr=[];
    blocks.boxes.forEach(element => {
        let componentType = element.__component.split('.')[1];
        switch (componentType) {
            case 'cards-box': 
                componentsArr.push(<CardsBlock content={element}/>)
                break;
            case 'cta-box':
                componentsArr.push(<CtaBlock content={element}/>)
                break;
            case 'logo-box':
                componentsArr.push(<Brands content={element}/>)
                break;
            case 'feature-box':
              componentsArr.push(<Features content={element}/>)
              break;
            case 'feature-list-box':
              componentsArr.push(<Section content={element}/>);
              break;
            // To be deprecated:
            // case 'generic-box':
            //     componentsArr.push(<GenericBlock content={element}/>);
            // break;
            case 'generic-markdown-box':
                componentsArr.push(<GenericMarkdownBlock content={element}/>);
            break;
            case 'tab-box':
                (element.Layout==="horizontal")?
                componentsArr.push(<TabBlockHorizontal content={element}/>)
                :
                componentsArr.push(<TabBlock content={element}/>);
              break;
            case 'carousel-box':
                componentsArr.push(<CarouselBlock content={element}/>);
            break;
            case 'testimonial-box':
                componentsArr.push(<Testimonial content={element} />)
             break;
             case 'faq-box':
                componentsArr.push(<Faq content={element}/>);
             break;
          }
    });
    return(
        <>
         <ArticleJsonLd
                url={`https://www.mailmodo.com${router.pathname.replace("[slug]","")}${slug}/`}
                title={blocks.seo?.title??" "}
                images={[(blocks.seo?.shareImage?.image?.url)?getImageUrl(blocks.seo?.shareImage?.image.url):`https://www.mailmodo.com/static/images/og-image.png` ]}
                datePublished={blocks.seo?.createdAt??" "}
                dateModified={blocks.seo?.updatedAt??" "}
                authorName={ "Mailmodo"}
                publisherName="Mailmodo"
                publisherLogo="https://www.mailmodo.com/static/images/logo/logo-full.svg"
                description={blocks.seo?.description??` `}/> 

            <NextSeo
                title={blocks.seo?.title??` `}
                description= {blocks.seo?.description??` `}
                canonical={`https://www.mailmodo.com${router.pathname.replace("[slug]","")}${slug}/`}
                keywords={blocks.seo?.keywords??" "}
                openGraph={{
                    url: `https://www.mailmodo.com${router.pathname.replace("[slug]","")}${slug}/`,
                    title: blocks.seo?.title??` `,
                    description: blocks.seo?.description??` `,
                    type: 'Article',
                    locale: 'en_US',
                    article: {
                        authors: ['Mailmodo'],
                        publishedTime: blocks.seo?.createdAt??" ",
                        modifiedTime: blocks.seo?.updatedAt??" "
                    },
                    images: [{ url: (blocks.seo?.shareImage?.image?.url)?getImageUrl(blocks.seo?.shareImage?.image.url):`https://www.mailmodo.com/static/images/og-image.png` }],
                }}
                twitter={{
                    handle: '@mailmodo',
                    site: 'twitter.com/mailmodo',
                    cardType: 'summary_large_image',
                  }}
            />  
        <Hero slug={slug} content={blocks.header}/>
        {componentsArr.map(element=>{
          return element
        })}
      { blocks.footer && <EndBlock content={blocks.footer}/>}
        </>
    )
}

// pass props to Page component
export async function getStaticProps(context) {


    const slug = context.params.slug // get slug from params
    const blocks = await getFeaturePagesBySlug(slug)

    return {
        props: { slug, blocks }
    };
}

// generate HTML paths at build time
export async function getStaticPaths(context) {

    const slugs = await getAllFeaturePageSlugs();
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