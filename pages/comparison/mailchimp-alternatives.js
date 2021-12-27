import { NextSeo, ArticleJsonLd } from 'next-seo'
import Router from 'next/router'
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../components/strapi-comparison/comparison.module.scss';
import Markdown from 'markdown-to-jsx';//New Markdown Renderer
import markdownIt from 'markdown-it'//New Markdown Parser
    // import remark from 'remark'
    // import toc from 'remark-toc'
    // import recommended  from 'remark-preset-lint-recommended'
    // import html from 'remark-html'
    // import slug from 'remark-slug'
import v from 'voca'


import { getFeaturePagesBySlug , getImageUrl,getAllFeaturePageSlugs,  } from '../../lib/strapiApi'
import GoogleSignupButton from "../../components/commonComponent/GoogleButton";
import SignupButton from "../../components/commonComponent/SignupButton";

//Page Components
import Hero from "../../components/strapi-comparison/Hero/Hero";
import Brands from "../../components/strapi-comparison/Brands/Brands";
import Features from "../../components/strapi-comparison/Features/Features";
import Section from '../../components/strapi-comparison/Section/Section';
import CarouselBlock from '../../components/strapi-comparison/CarouselBlock/CarouselBlock';
import TabBlock from '../../components/strapi-comparison/TabBlock/TabBlock';
import Testimonial from '../../components/strapi-comparison/Testimonial/Testimonial';
import Faq from '../../components/strapi-comparison/Faq/Faq';
import EndBlock from '../../components/strapi-comparison/EndBlock/EndBlock';
import Compare from '../../components/strapi-comparison/Compare/Compare';
import Verdict from '../../components/strapi-comparison/Verdict/Verdict';
import Advantage from '../../components/strapi-comparison/Advantage/Advantage';
import ListBox from '../../components/strapi-comparison/ListBox/ListBox';
import Ratings from '../../components/strapi-comparison/Ratings/Ratings';



const Page = ({ slug, blocks }) => {
    // let result// = md.render(blog.content);
    // //console.log(blog);
    // var remark = require('remark')
    // var recommended = require('remark-preset-lint-recommended')
    // var html = require('remark-html')

    // remark()
    // .use(recommended)
    // .use(html)
    // .process(blog.content, function (err, file) {
    //     result = String(file)
    // })
    // result = v.replaceAll(result,'&#x26;','&');

    //        console.log(result)
    //console.log(getImageUrl(blog.featuredImage.url));
    let componentsArr=[];
    // blocks.boxes.forEach(element => {
    //     let componentType = element.__component.split('.')[1];
    //     //console.log(componentType)
    //     switch (componentType) {
    //         case 'feature-box':
    //           componentsArr.push(<Features content={element}/>)
    //           break;
    //         case 'feature-list-box':
    //           componentsArr.push(<Section content={element}/>);
    //           break;
    //         case 'tab-box':
    //             componentsArr.push(<TabBlock content={element}/>);
    //           break;
    //         case 'carousel-box':
    //             componentsArr.push(<CarouselBlock content={element}/>);
    //         break;
    //         case 'faq-box':
    //             componentsArr.push(<Testimonial/>)
    //             componentsArr.push(<Faq content={element}/>);
    //          break;
    //       }
    // });
//console.log(blocks.seo)
    return(
        <>
        <Head>
            <style>{'body{background-color:#ffff !important;}'}</style>
        </Head>
         <ArticleJsonLd
                url={`https://www.mailmodo.com/comparison/mailchimp-alternatives/`}
                title={" "}
                images={[`https://www.mailmodo.com/static/images/og-image.png` ]}
                // datePublished={blocks.seo?.createdAt??" "}
                // dateModified={blocks.seo?.updatedAt??" "}
                authorName={ "Mailmodo"}
                publisherName="Mailmodo"
                publisherLogo="https://www.mailmodo.com/static/images/logo/logo-full.svg"
                description={` `}/>  

             <NextSeo
                title={` `}
                description= {` `}
                canonical={`https://www.mailmodo.com/comparison/mailchimp-alternatives/`}
                //keywords={blocks.seo?.keywords??" "}
                openGraph={{
                    url: `https://www.mailmodo.com/comparison/mailchimp-alternatives/`,
                    title: ` `,
                    description: ` `,
                    type: 'Article',
                    locale: 'en_US',
                    article: {
                        authors: ['Mailmodo'],
                        // publishedTime: blocks.seo?.createdAt??" ",
                        // modifiedTime: blocks.seo?.updatedAt??" "
                    },
                    images: [{ url: `https://www.mailmodo.com/static/images/og-image.png` }],
                }}
                twitter={{
                    handle: '@mailmodo',
                    site: 'twitter.com/mailmodo',
                    cardType: 'summary_large_image',
                  }}
            />   
        <Hero slug={"slug"} content={"blocks.header"}/>
        {componentsArr.map(element=>{
          return element
        })}
        <Compare/>
        <Verdict/>
        <Advantage/>
        <ListBox/>
        {/* <CarouselBlock/> */}
        <Features/>
        <Ratings/>
        <Testimonial/>

      { true && <EndBlock content={"blocks.footer"}/>}
        </>
    )
}

// pass props to Page component
// export async function getStaticProps(context) {


//     const slug = context.params.slug // get slug from params
//     const blocks = await getFeaturePagesBySlug(slug)

//     return {
//         props: { slug, blocks }
//     };
// }

// generate HTML paths at build time
// export async function getStaticPaths(context) {

//     const slugs = await getAllFeaturePageSlugs();
//     return {
//         paths: slugs.map((slug) => {
//             return {
//                 params: {
//                     slug: slug
//                 },
//             };
//         }),
//         fallback: false,
//     };
// }
export default Page;