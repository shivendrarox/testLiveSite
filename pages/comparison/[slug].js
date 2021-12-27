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


import { getCompetitionPagesBySlug , getImageUrl, getAllCompetitionPageSlugs,  } from '../../lib/strapiApi'
import GoogleSignupButton from "../../components/commonComponent/GoogleButton";
import SignupButton from "../../components/commonComponent/SignupButton";

//Page Components
import Hero from "../../components/strapi-comparison/reusable/Hero/Hero";
import Brands from "../../components/strapi-comparison/reusable/Brands/Brands";
import Features from "../../components/strapi-comparison/reusable/Features/Features";
import Section from '../../components/strapi-comparison/reusable/Section/Section';
import CarouselBlock from '../../components/strapi-comparison/reusable/CarouselBlock/CarouselBlock';
import TabBlock from '../../components/strapi-comparison/reusable/TabBlock/TabBlock';
import Testimonial from '../../components/strapi-comparison/reusable/Testimonial/Testimonial';
import Faq from '../../components/strapi-comparison/reusable/Faq/Faq';
import EndBlock from '../../components/strapi-comparison/reusable/EndBlock/EndBlock';
import Compare from '../../components/strapi-comparison/reusable/Compare/Compare';
import Verdict from '../../components/strapi-comparison/reusable/Verdict/Verdict';
import Advantage from '../../components/strapi-comparison/reusable/Advantage/Advantage';
import ListBox from '../../components/strapi-comparison/reusable/ListBox/ListBox';
import Ratings from '../../components/strapi-comparison/reusable/Ratings/Ratings';



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
    blocks.boxes.forEach(element => {
        let componentType = element.__component.split('.')[1];
        switch (componentType) {
            case 'summary-box':
                componentsArr.push(<ListBox CompetitorLogo={blocks.CompetitorLogo} content={element}/>)
                break;
            case 'get-box':
                componentsArr.push(<Advantage CompetitorLogo={blocks.CompetitorLogo} content={element}/>)
                break;
            case 'choose-box':
                componentsArr.push(<Verdict CompetitorLogo={blocks.CompetitorLogo} content={element}/>)
                break;
            case 'feature-compare-box':
                componentsArr.push(<Compare CompetitorLogo={blocks.CompetitorLogo} content={element}/>)
                break;
            case 'feature-box':
              componentsArr.push(<Features content={element}/>)
              break;
            case 'feature-list-box':
              componentsArr.push(<Section content={element}/>);
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

    let header = {
        title:blocks.title,
        description:blocks.description,
        CompetitorName:blocks.CompetitorName,
        cta:blocks.cta,
        CompetitorLogo:blocks.CompetitorLogo
    } 

    blocks.boxes.map((element)=>{
        (element.__component=="pages.compare-box")?header.cards=element:0;
    })
    return(
        <>
        <Head>
            <style>{'body{background-color:#ffff !important;}'}</style>
        </Head>
        {console.log(blocks.seo)}
          <ArticleJsonLd
                url={`https://www.mailmodo.com/comparison/${slug}/`}
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
                canonical={`https://www.mailmodo.com/comparison/${slug}/`}
                keywords={blocks.seo?.keywords??" "}
                openGraph={{
                    url: `https://www.mailmodo.com/comparison/${slug}/`,
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
        <Hero slug={slug} content={header}/>
        {componentsArr.map(element=>{
          return element
        })}
          {/*   <Compare/>
                <Verdict/>
        <       Advantage/>
                <ListBox/>
        <CarouselBlock/> 
                <Features/>
        <Ratings/>
        <Testimonial/> */}
        <Ratings/>
        <Testimonial/>
      { true && <EndBlock content={blocks.footer}/>}
        </>
    )
}

// pass props to Page component
export async function getStaticProps(context) {


    const slug = context.params.slug // get slug from params
    const blocks = await getCompetitionPagesBySlug(slug)

    return {
        props: { slug, blocks }
    };
}

// generate HTML paths at build time
export async function getStaticPaths(context) {

    const slugs = await getAllCompetitionPageSlugs();
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