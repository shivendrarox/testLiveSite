import Head from 'next/head';
import React, { useEffect, useState } from "react";
import { NextSeo, ArticleJsonLd } from 'next-seo'
//md packages
import v from 'voca';
import Markdown from 'markdown-to-jsx';
//
import Hero from "../../components/type1/Hero/Hero";
import Brands from "../../components/type1/Brands/Brands";
import Features from "../../components/type1/Features/Features";
import Features2 from "../../components/type1/Features2/Features2";
import Section from '../../components/type1/Section/Section';
import Section2 from '../../components/type1/Section2/Section2';
import Section3 from '../../components/type1/Section3/Section3';
import CarouselBlock from '../../components/type1/CarouselBlock/CarouselBlock';
import TabBlock from '../../components/type1/TabBlock/TabBlock';
import Testimonial from '../../components/type1/Testimonial/Testimonial';
import Faq from '../../components/type1/Faq/Faq';
import EndBlock from '../../components/type1/EndBlock/EndBlock';
import Link from 'next/link';
import styles from '../../components/type1/type1.module.scss';

export default function test() {
    let result
    var remark = require('remark')
    var recommended = require('remark-preset-lint-recommended')
    var html = require('remark-html')

    // remark()
    // .use(recommended)
    // .use(html)
    // .process(, function (err, file) {
    //   result = String(file)
    // })
    //result = v.replaceAll(result, '&#x26;', '&');//hotfix for &#x26; to &

    return(
        <>
              <ArticleJsonLd
        url={`https://www.mailmodo.com/features/send-amp-emails/`}
        title={"Send AMP Emails using Mailmodo without Coding to Improve Email Conversions"}
        //images={[getImageUrl(template.thumbnail?.url)]}
        publisherName="Mailmodo"
        authorName={ "Mailmodo"}
        //datePublished={template.createdAt}
       // dateModified={template.updatedAt}
        publisherLogo="https://www.mailmodo.com/static/images/logo/logo-full.svg"
        description={`Create and send AMP emails using Mailmodo's email marketing platform for interactive email experience`}
      />

      <NextSeo
        description={`Create and send AMP emails using Mailmodo's email marketing platform for interactive email experience`}
        title={"Send AMP Emails using Mailmodo without Coding to Improve Email Conversions"}
        canonical={`https://www.mailmodo.com/features/send-amp-emails/`}
        openGraph={{
          url: `https://www.mailmodo.com/features/send-amp-emails/`,
          title:"Send AMP Emails using Mailmodo without Coding to Improve Email Conversions",
          description:`Create and send AMP emails using Mailmodo's email marketing platform for interactive email experience`,
          locale: 'en_US',
          type: 'Article',
          article: {
            authors:['Mailmodo'],
            //publishedTime: template.createdAt,
            //modifiedTime: template.updatedAt
        },
          images: [{ url: "https://www.mailmodo.com/static/images/og-image.png"}],
        }}
        twitter={{
          handle: '@mailmodo',
          site: 'twitter.com/mailmodo',
          cardType: 'summary_large_image',
        }}
      />
            <Hero/>
            <Brands/>
            <Features/>
            <Section/>
            <Section2/>
            <Section3/>
            <Features2/>
            <CarouselBlock/>
            <TabBlock/>
            <Testimonial/>
            <Faq/>
            <EndBlock/>
        </>
    )
}
