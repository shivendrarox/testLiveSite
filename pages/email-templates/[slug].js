import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Breadcrumb from '../../components/email-template-pages/Breadcrumb/Breadcrumb';
import { NextSeo } from 'next-seo'
import Head from 'next/head';

import Iframe from 'react-iframe'
import { getTemplateBySlug, getNextAndPrevTemplates, getAllTemplates, getRelatedTemplates, getImageUrl } from '../../lib/strapiApi'

//md packages
import v from 'voca';
import Markdown from 'markdown-to-jsx';
//
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Image from "next/image";

const myLoader = ({ src, width, quality="50" }) => {// default quality 50%
  let newSrc= src.replace('.jpg','.webp')
      newSrc= newSrc.replace('.png','.webp')

  return `https://res.cloudinary.com/mailmodo/image/upload/q_${quality}/v1628497684/strapi/${newSrc}`
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}



const TemplateDetail = ({ template , related, prevAndNext}) => {
  const { height, width } = useWindowDimensions();


  function makePageSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": template.title+" - Free AMP Email & HTML Email Template | Mailmodo",
      "image": "https://res.cloudinary.com/mailmodo/image/upload/v1632463966/strapi/"+template.thumbnail?.url??" ",
      "description": template.description,
      "brand": "Mailmodo",
      "mainEntity":{
        "@type": "ItemPage",
        "author": "Mailmodo",
        "dateCreated":  template.createdAt,
        "dateModified":  template.updatedAt,
        "image":"https://res.cloudinary.com/mailmodo/image/upload/v1632463966/strapi/"+template.thumbnail?.url??" ",
        "publisher": "Mailmodo"
      },
      "aggregateRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": Number.parseFloat( getRandomArbitrary(4.3,4.8)).toFixed(1),
        "ratingCount": getRandomIntInclusive(100,200)
      },
      "creator": {
        "@type":"Organization",
        "url":"https://www.mailmodo.com",
        "name":"Mailmodo",
        "logo":{
        "@type":"ImageObject",
        "url":"https://www.mailmodo.com/static/images/logo/logo-full.svg",}
      }
    }
  }

  let result//
  //console.log(template.id);
  var remark = require('remark')
  var recommended = require('remark-preset-lint-recommended')
  var html = require('remark-html')

  if (template.details) {
    remark()
      .use(recommended)
      .use(html)
      .process(template.details, function (err, file) {
        result = String(file)
      })
    result = v.replaceAll(result, '&#x26;', '&');//hotfix for &#x26; to &
    //console.log(result);
  }

  const router = useRouter();
  const path = useRouter()?.asPath;

  useEffect(() => {
    if (path.includes('/email-templates/')) {
      //document.body.style.backgroundColor = "#353535";
    }
  }, []);//empty array param [] is required to know what has changed, if we don't pass it then it will keep executing.

  return (
    <>
    <Head>
        <style>{'body{background-color:#353535 !important;}'}</style>
        {/* JSON LD data */}
        <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(makePageSchema()) }}
        />
        {/* JSON LD data end */}
      </Head>
      {/* <ArticleJsonLd
        url={`https://www.mailmodo.com/email-templates/${template.slug}/`}
        title={template.title+" - Free AMP Email & HTML Email Template | Mailmodo"}
        //images={[getImageUrl(template.thumbnail?.url)]}
        images={['https://www.mailmodo.com/static/images/og-image.png']}
        publisherName="Mailmodo"
        authorName={ (template.author != undefined)?template.author.name:"Mailmodo"}
        datePublished={template.createdAt}
        dateModified={template.updatedAt}
        publisherLogo="https://www.mailmodo.com/static/images/logo/logo-full.svg"
        description={template.description ?? template.description}
      /> */}


      <NextSeo
        description={template.description}
        title={template.title+" - Free AMP Email & HTML Email Template | Mailmodo"}
        canonical={`https://www.mailmodo.com/email-templates/${template.slug}/`}
        openGraph={{
          url: `https://www.mailmodo.com/email-templates/${template.slug}/`,
          title: template.title+" - Free AMP Email & HTML Email Template | Mailmodo",
          description: template.description ?? template.description,
          locale: 'en_US',
          type: 'Article',
          article: {
            authors: (template.author != undefined)?[template.author.name ]:['Mailmodo'],
            publishedTime: template.createdAt,
            modifiedTime: template.updatedAt
        },
          //images: [{ url: getImageUrl(template.thumbnail?.url)}],
          images: [{ url: 'https://www.mailmodo.com/static/images/og-image.png'}],
        }}
        twitter={{
          handle: '@mailmodo',
          site: 'twitter.com/mailmodo',
          cardType: 'summary_large_image',
        }}
      />


      <div className={`template-detail mb-5`}>
        <div className="d-flex align-items-center justify-content-center flex-column">
          {/* <span className="back-to-template mr-auto" onClick={props.onClick}>
          <img src="/static/images/chevron-left-white.svg" alt="back" />
          Back to Templates
        </span> */}

           <div className="inner-wrapper ">
            <div className="row">

              <div className="col-md-6 color-right ">
                {/* <div className="button-wrap">
                  <Link href={'/email-templates'} >
                    <button type="button" className="back-button"><img title="arrow icon" alt="arrow" className="left-arrow" height={'18px;'} width={'18px;'} src="/static/images/icon/chevron-left.svg"></img>Back</button>
                  </Link>
                </div> */}

                <div className="template-content ">
                  {/* data comming from editor */}
                  {/*<span>
                <img src="/static/images/icon/keyboard_arrow_right-24px.svg"/> 
                Back To Template
                </span>*/}
                      <Breadcrumb slug={template.slug} pageTitle={template.title} />

                  <p className="template-tags"><span>{template.template_category && <a href={`/email-templates/categories/${template.template_category.slug}`}>{`#${template.template_category.slug}`}</a>}</span></p>
                  <h1 className="title" >{template.title} Template</h1>
                  {true && (width<600)&&<div className="template-wrapper">
                  <div className="right-button-wrap">
                    <div className="row">

                        <div className="col-md-6">
                          <Link href={`/email-templates/${prevAndNext[0]}`}><button className="prev-btn">{"<"}</button></Link>&nbsp;
                          <Link href={`/email-templates/${prevAndNext[2]}`}><button className="next-btn">{">"}</button></Link>
                        </div>

                        <div className="col-md-6">
                        <div className="share-div">
                  <p className="share-text"><span className="share-green">Share</span> this template on</p>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.mailmodo.com/email-templates/${template.slug}/`} className="share-link"><img title="Facbook logo" alt="Facebook" src="/static/images/template/Facebook.svg"></img></a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.mailmodo.com/email-templates/${template.slug}/`} className="share-link"><img title="Linkedin logo" alt="Linkedin" src="/static/images/template/Linkedin.svg"></img></a>
                  <a href={`https://pinterest.com/pin/create/button/?url=https://www.mailmodo.com/email-templates/${template.slug}/&media=&description=`} className="share-link"><img title="Pinterest logo" alt="Pinterest" src="/static/images/template/Pinterest.svg"></img></a>
                  <a href={`https://twitter.com/intent/tweet?url=https://www.mailmodo.com/email-templates/${template.slug}/&text=`} className="share-link"><img title="Twitter logo" alt="Twitter" src="/static/images/template/Twitter.svg"></img></a>
                </div>
                          {/* <button  className="share-btn" onClick={(e) => { e.preventDefault(); window.location.href = 'mailto:'; }} ><img title="share icon" alt="share" src="/static/images/icon/Share-template.svg"></img></button>  */}
                        </div>

                    </div>
                  </div>
                    {/* <img
                    src="/static/images/template.jpg"
                    alt="tempalte"
                    className="w-100"
                    /> */}
                    <Iframe url={template.renderUrl}
                      height="800px"
                      width="100%"
                      id="myId"
                      className="template-frame"
                      display="initial"
                      position="relative"
                      sandbox="allow-scripts" />
                  </div>}
                  <p className="template-description">
                    {template.description}
                  </p>
                  {template.author && <div className="author-section">
                    <div className=""><img title="author" alt="author image" className="author-image" src={getImageUrl(template.author.picture.url)}></img></div>
                    <div className=""><p className="from-text ">From</p><Link href="/"><p style={{cursor:"pointer"}} className="author-name ">{template.author.name}</p></Link></div>
                  </div>}
                  <button onClick={(e) => {
                          analytics.track('Use this Template Clicked', {
                          location:path
                          });
                    e.preventDefault();
                    window.location.href = 'https://manage.mailmodo.com/';
                  }} className="button-template" >+ Use this Template</button>

                  {result &&
                    <div className="template-md">
                      <Markdown >{result}</Markdown>
                    </div>
                  }

                  {/* <button class="create-template btn btn-theme text-md">Create your first template</button>*/}
                </div>
                <div className="share-div">
                  <p className="share-text"><span className="share-green">Share</span> this template on</p>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.mailmodo.com/email-templates/${template.slug}/`} className="share-link"><img title="Facbook logo" alt="Facebook" src="/static/images/template/Facebook.svg"></img></a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.mailmodo.com/email-templates/${template.slug}/`} className="share-link"><img title="Linkedin logo" alt="Linkedin" src="/static/images/template/Linkedin.svg"></img></a>
                  <a href={`https://pinterest.com/pin/create/button/?url=https://www.mailmodo.com/email-templates/${template.slug}/&media=&description=`} className="share-link"><img title="Pinterest logo" alt="Pinterest" src="/static/images/template/Pinterest.svg"></img></a>
                  <a href={`https://twitter.com/intent/tweet?url=https://www.mailmodo.com/email-templates/${template.slug}/&text=`} className="share-link"><img title="Twitter logo" alt="Twitter" src="/static/images/template/Twitter.svg"></img></a>
                </div>
                <div className="custom-card" >
                <h3>Want to create interactive AMP email templates?</h3>
                  <div className="row">
                    <div className={(width<600)?"col-6 mt-3":"col-8 mt-3"}>
                    <p>Use our drag-and-drop editor to create the right template</p>
                    <button  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'https://manage.mailmodo.com/';
                  }}>Get Started</button>
                    </div>
                    <div className={(width<600)?"col-6 mt-3":"col-4 mt-3"}>
                    <img title="custom template" alt="custom_template.svg" className="" src="/static/images/custom_template.svg"></img>
                    </div>

                  </div>

                </div>
              </div>
              {(width>600) && <div className="col-md-6 ">
                <div className="template-wrapper">

                  <div className="right-button-wrap">
                    <div className="row">

                        <div className="col-6">
                         <Link href={`/email-templates/${prevAndNext[0]}`}><button className="prev-btn">{"<"}</button></Link>&nbsp;
                         <Link href={`/email-templates/${prevAndNext[2]}`}><button className="next-btn">{">"}</button></Link>
                        </div>

                        <div className="col-6">
                        <div style={{marginTop:"0px",display:"flex",justifyContent:"flex-end"}} className="share-div">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.mailmodo.com/email-templates/${template.slug}/`} className="share-link"><img title="Facbook logo" alt="Facebook" src="/static/images/template/Facebook.svg"></img></a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.mailmodo.com/email-templates/${template.slug}/`} className="share-link"><img title="Linkedin logo" alt="Linkedin" src="/static/images/template/Linkedin.svg"></img></a>
                  <a href={`https://pinterest.com/pin/create/button/?url=https://www.mailmodo.com/email-templates/${template.slug}/&media=&description=`} className="share-link"><img title="Pinterest logo" alt="Pinterest" src="/static/images/template/Pinterest.svg"></img></a>
                  <a href={`https://twitter.com/intent/tweet?url=https://www.mailmodo.com/email-templates/${template.slug}/&text=`} className="share-link"><img title="Twitter logo" alt="Twitter" src="/static/images/template/Twitter.svg"></img></a>
                </div>
                          {/* <button  className="share-btn" onClick={(e) => { e.preventDefault(); window.location.href = 'mailto:'; }} ><img title="share icon" alt="share" src="/static/images/icon/Share-template.svg"></img></button>  */}
                        </div>

                    </div>
                  </div>
                  {/* <img
                  src="/static/images/template.jpg"
                  alt="tempalte"
                  className="w-100"
                /> */}
                  <Iframe url={template.renderUrl}
                    height="800px"
                    width="100%"
                    id="myId"
                    className="template-frame"
                    display="initial"
                    position="relative"
                    sandbox="allow-scripts" />
                </div>
              </div>}
            </div>
          </div>
          {true && related.length > 0 && 
          <div className="related-templates ml-5 mr-5 mt-5">
           <div className="row">
            <div className="col-md-12 ">
              <h2 className="heading mb-5">Explore more</h2>
            </div>
            {related.map((r) =>
             <div className="col-md-3 mb-3" key={r.id}>

                <a title={r.title} className="related-img" href={`/email-templates/${r.slug}`}>
                {/* <img title="related icon" alt="related" className="related-img" src={r.thumbnail==undefined?'':getImageUrl(r.thumbnail.url)}>
                </img> */}
                              
                              <div style={{cursor:"pointer",width:"100%"}} className="related-img card min-card-height">
           <div  className="card-body">
                 <Image
                   src={  (r.thumbnail?.url)  }
                   className="w-100 avtar"
                   alt={r.title}
                   height={r.thumbnail.height}
                   width={r.thumbnail.width}
                   loader={myLoader}
                 />
 
             <div className="overlay">
                <div className="title"><a href={`/email-templates/${r.slug}`} ><h5 className="">{r.title}</h5></a></div>
                <div className="description" > <p >{r.description.slice(0, 80) + '...'}</p></div>
                 <div className="btn-group">
                   <button className=" button-preview"  onClick={(e) => {e.preventDefault();window.location.href=`/email-templates/${r.slug}`;}}>Preview</button>
                   {/* <button className=" button-share" onClick={(e) => {e.preventDefault();window.location.href='mailto:support@mailmodo.com';}}><img src="/static/images/icon/Share-template.svg"></img> </button> */}
                 </div>  
             </div>
 
           </div>
       </div>
                </a>
              </div>
              )}
          </div> 
          </div>}
          {/* CTA 
          <div className="free-access home-page mb-0 mt-5 w-100">
                <div className="container text-center">
                    <h2 className="heading">Get free access by signing up now</h2>
                    <p>(No credit card required for signing up)</p>

                    <div className="form-wrap text-center">
                        <div className="text-center d-flex justify-content-center">
                            <GoogleSignupButton extraClass="extra-class mr-3" />
                            <SignupButton extraClass="extra-class" />
                        </div>
                    </div>
                </div>
            </div>
            */}
        </div>
      </div>
    </>
  );
};

export default TemplateDetail;

export async function getStaticProps(context) {

  //const templateId = context.params.tID;// get id from params
  const templateSlug = context.params.slug;// get slug from params

  const template = await getTemplateBySlug(templateSlug);
  const related = await getRelatedTemplates(template.template_category?.slug,template.id)
  const prevAndNext = await getNextAndPrevTemplates(template.id)

  return {
    props: { template, related, prevAndNext}
  };
}

export async function getStaticPaths(context) {

  let templates = await getAllTemplates();

  for(let x=0;x<templates.length;x++){
    //templates[x]['title']=v.replaceAll(templates[x]['title']," ","-")
  }


  return {
    paths: templates.map((r) => {
      return {
        params: {
          slug: r.slug,
          tID:r.id,
        },
      };
    }),
    fallback: false,
  };
}
