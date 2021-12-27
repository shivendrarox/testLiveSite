import { NextSeo, ArticleJsonLd } from 'next-seo'
import Hero from "../../components/checklist/Hero/Hero";
import EndBlock from '../../components/checklist/EndBlock/EndBlock';
import Cards from '../../components/checklist/Cards/Cards';
import Head from 'next/head'
import React, { useEffect, useState } from "react";
import SignupButton from "../../components/commonComponent/SignupButton";
//Note: This page is made using exiting ebooks page.

const Page = ({allCardsData , totalNewsletters,totalPages}) => {
        //Floating CTA Logics
        const [floatingCTA, setFloatingCTA] = useState(false);
        useEffect(() => {
            window.addEventListener("scroll", handleScroll);
          });
          const handleScroll = (e) => {
            let box = document.getElementById("homepage-banner");
            // let width = box.offsetWidth;
            let height = box?.offsetHeight;
            if (window.scrollY > 400) setFloatingCTA(true);
            else setFloatingCTA(false);
          };
        //Floating CTA Logics END


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
    
    return(
        <>
         {/* <ArticleJsonLd
                url={`https://www.mailmodo.com/ebook/subject-line/`}
                title={"Subject Line Free Ebook for Higher Email Conversions - Framework, Tips and Best Practices | Mailmodo"}
                images={[`https://mm-strapi-4.azurewebsites.net//uploads/ogg_1_09aba6b667.jpg`]}
                // datePublished={blocks.seo?.createdAt??" "}
                // dateModified={blocks.seo?.updatedAt??" "}
                authorName={ "Mailmodo"}
                publisherName="Mailmodo"
                publisherLogo="https://www.mailmodo.com/static/images/logo/logo-full.svg"
                description={`Subject line crafting for getting high email conversions is difficult. This guide provides the framework to craft winning subject lines, tips from experts and copywriters and more`}/>  */}
            <Head>
                <style>{'body{font-family: Inter !important;}'}</style>
            </Head>
            <NextSeo
                title={`Email Marketing Checklists for Improved Campaigns - Audit, Campaign QA & Deliverability Checklist | Mailmodo`}
                description= {`Access our collection of email marketing QA checklists and audit your email marketing process to ensure better email campaign performance, deliverability, and conversions`}
                canonical={`https://www.mailmodo.com/checklist/`}
                keywords={" "}
                openGraph={{
                    url: `https://www.mailmodo.com/checklist/`,
                    title:`Email Marketing Checklists for Improved Campaigns - Audit, Campaign QA & Deliverability Checklist | Mailmodo`,
                    description: `Access our collection of email marketing QA checklists and audit your email marketing process to ensure better email campaign performance, deliverability, and conversions`,
                   // type: 'Article',
                    locale: 'en_US',
                   // article: {
                   //     authors: ['Mailmodo'],
                        // publishedTime: blocks.seo?.createdAt??" ",
                        // modifiedTime: blocks.seo?.updatedAt??" "
                   // },
                   images: [{ url: `https://www.mailmodo.com/static/images/og-image.png` }],
                }}
                twitter={{
                    handle: '@mailmodo',
                    site: 'twitter.com/mailmodo',
                    cardType: 'summary_large_image',
                  }}
            />  

         {/* Floating CTA */}
         {/* <div className="home-page">
                <div className={`cta-email ${floatingCTA && "floating-cta"}`}>
        <div className="col-8 mx-auto d-md-flex align-items-center justify-content-center px-0 px-md-3 d-none d-md-flex">
          <div className="logo-cta d-none d-md-block">
            <img title="mm logo" alt="mailmodo" src="/static/images/logo.svg" />
          </div>
          <p className="cta-text text-center text-left">
            Create & Send Actionable Emails
          </p>
          <div className=" d-flex align-items-center justify-content-center">

            <SignupButton btn_text={"Sign Up"} trackingId={'email_sticky_home'} />
          </div>
        </div>
        <div className="justify-content-end d-md-flex align-items-center mobile-sticky-footer d-md-none d-md-flex">
          <div className="logo-cta d-none d-md-block">
            <img title="mm logo" alt="mailmodo" src="/static/images/logo.svg" />
          </div>
          <p className="cta-text text-center text-left pr-3 pb-0">
            Create & Send Actionable Emails
          </p>
          <div className=" d-flex align-items-center justify-content-center">
          </div>
        </div>
      </div>
     
                </div> */}
             {/* Floating CTA  END*/}
              
            <Hero/>
            {/* <Features heading={`Why you should subscribe?`} content={[
                                {
                                    img:`/uploads/f1_25aa0043bc.svg`,
                                    title:`Do the diagnostics`,
                                    subTitle:`A 3-step framework to turn generic best practice tips into subject line ideas that deliver higher CTRs.`
                                },
                                {
                                    img:"/uploads/f2_13754b5c6b.svg",
                                    title:"Troubleshoot your emails",
                                    subTitle:"Tips from email marketers and copywriters on developing a process for optimizing your subject line testing processes."
                                },
                                {
                                    img:"/uploads/f3_22ab8038a2.svg",
                                    title:"Industry insights",
                                    subTitle:"Discussions on how to craft email subject lines that are irresistibly clickable supported by findings from our subject line experiment."
                                }
                                ]}/> */}
            {/* <Section/> */}
            <Cards allCardsData={allCardsData} totalNewsletters={totalNewsletters} totalPages={totalPages} />
            {/* <Faq/> */}
            <EndBlock/>
        </>

        
    )
}

export async function getStaticProps(context) {
  let response = await fetch("https://mm-strapi-4.azurewebsites.net/newsletters/");
  let data = await response.json();
  const allCardsData = data;
  const totalNewsletters = data.length
  const pageSize = 12
  const totalPages =  pageSize * (Math.ceil(totalNewsletters/pageSize)) // Logic for total no of pagination pages

  data = null
  response = null

  return {
      props: { allCardsData , totalNewsletters,totalPages }
  }; 
}

export default Page;