import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import TemplateFilter from "../../../components/commonComponent/TemplateFilter/TemplateFilter";
import { getAllTemplateCategories, getAllTemplates, getTemplatesForCategory,  } from '../../../lib/strapiApi'
import Head from 'next/head';

import GoogleSignupButton from "../../../components/commonComponent/GoogleButton";
import SignupButton from "../../../components/commonComponent/SignupButton";

import SearchBar from "../../../components/commonComponent/SearchBar/SearchBar";

import Masonry from 'react-masonry-css'
import Image from 'next/image'
import { NextSeo, ArticleJsonLd } from 'next-seo'

const myLoader = ({ src, width, quality="50" }) => {// default quality 50%
  let newSrc= src.replace('.jpg','.webp')
      newSrc= newSrc.replace('.png','.webp')

  return `https://res.cloudinary.com/mailmodo/image/upload/q_${quality}/v1628497684/strapi/${newSrc}`
}

//TODO: neeed seo description
const template = ({ filteredData, allCategories, currentCategory }) => {
// console.log(filteredData,"filteredData")
// console.log(allCategories,"allCategory")
// console.log(currentCategory,"currentCategory")

   const [showFilter, setShowFilter] = useState(false);
   const router = useRouter();
   const path = useRouter()?.asPath;
   //console.log("router", path);

   const [input, setInput] = useState('');
   const [cardListDefault, setCardListDefault] = useState(filteredData);
   const [cardList, setCardList] = useState(filteredData);


   const updateInput = async (input) => {
     const filtered = cardListDefault.filter(country => {
       return (country.description.toLowerCase().includes(input.toLowerCase()) || country.title.toLowerCase().includes(input.toLowerCase()))
     })
     setInput(input);
     setCardList(filtered);
   }

  
   //configs for masonry layout.
   const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  // Masonry individual card, can't be made into component as it gives
  // weird sideffect
  let jsxVar=cardList?.map((template,index) => {
    return (<>
             <Link passHref className="item-detail" href={`/email-templates/${template.slug}`}>
             <a title={template.title}>
         <div style={{height:(template.thumbnail.height*0.3),cursor:"pointer",backgroundColor:"transparent"}} className="card min-card-height">
           <div  className="card-body">
                 <Image
                   src={  (template.thumbnail?.url)  }
                   className="w-100 avtar"
                   alt={template.title}
                   layout={"fill"}
                   loader={myLoader}
                   priority={(index===0)?true:false}
                   quality={10}
                 />
 
             <div className="overlay">
                <div className="title"><a href={`/email-templates/${template.slug}`} ><h5 className="">{template.title}</h5></a></div>
                <div className="description" > <p >{template.description.slice(0, 80) + '...'}</p></div>
                 <div className="btn-group">
                   <button className=" button-preview"  onClick={(e) => {e.preventDefault();window.location.href=`/email-templates/${template.slug}`;}}>Preview</button>
                   {/* <button className=" button-share" onClick={(e) => {e.preventDefault();window.location.href='mailto:support@mailmodo.com';}}><img src="/static/images/icon/Share-template.svg"></img> </button> */}
                 </div>  
             </div>
 
           </div>
       </div>
       </a>
       </Link>
     </>)
   });
  // Masonry individual card END
  return (
    <>
      <Head>
        <style>{'body{background-color:#353535 !important;}'}</style>
        {/* <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
          rel="stylesheet"
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap'
          rel="stylesheet"
        /> */}
      </Head>

  <ArticleJsonLd
        url={`https://www.mailmodo.com/email-templates/${currentCategory==undefined?'':`categories/${currentCategory.slug}/`}`}
        title={currentCategory == undefined ? "All email Templates | Mailmodo" : currentCategory.title+' Templates | Mailmodo'}
        images={['https://www.mailmodo.com/static/images/og-image.png']}
        publisherName="Mailmodo"
        authorName={"Mailmodo"}
        // datePublished={}
        // dateModified={}
        publisherLogo="https://www.mailmodo.com/static/images/logo/logo-full.svg"
        description={currentCategory==undefined?" ":currentCategory.seo?.description??" "}
      />

<NextSeo
        description={currentCategory==undefined?" ":currentCategory?.seo?.description??" "}
        title={currentCategory == undefined ? "All email Templates | Mailmodo" : currentCategory.title+' Templates | Mailmodo'}
        canonical={`https://www.mailmodo.com/email-templates/${currentCategory==null?'':`categories/${currentCategory.slug}/`}`}
        openGraph={{
          url:`https://www.mailmodo.com/email-templates/${currentCategory==null?'':`categories/${currentCategory.slug}/`}`,
          title: (currentCategory == undefined ? "All email Templates | Mailmodo" : currentCategory.title+" Templates | Mailmodo"),
          description: currentCategory==undefined?" ":currentCategory.seo?.description??" ",
          locale: 'en_US',
          type: 'Article',
          article: {
            authors: ['Mailmodo'],
            // publishedTime: template.createdAt,
            // modifiedTime: template.updatedAt
        },
          images: [{ url:currentCategory==undefined?'https://www.mailmodo.com/static/images/og-image.png':currentCategory.seo?.shareImage?.image?.url??'https://www.mailmodo.com/static/images/og-image.png'}],
        }}
        twitter={{
          handle: '@mailmodo',
          site: 'twitter.com/mailmodo',
          cardType: 'summary_large_image',
        }}
      />

      <div className="template">

        <div className="container">
          <h1 className="heading my-5">
            {/* {currentCategory == undefined ? "Email templates for higher conversions" : currentCategory.title + " Email Templates"} */}
            {currentCategory == undefined ? "Email templates for higher conversions" : currentCategory.title}
          </h1>
          {currentCategory && <p className={"heading-description my-5"}>
            {currentCategory.description}
          </p>}
          <SearchBar
            input={input}
            onChange={updateInput}
          />
          <img className="leftImg" src="/static/images/template_asset_left.svg" ></img>
          <img className="rightImg" src="/static/images/template_asset_right.svg"  ></img>
          <div className="tags" ><p> <b>Popular : </b> <span><a href={`/email-templates/categories/ecommerce`} >Ecommerce</a></span> <span><a href={"/email-templates/categories/lead"}>Lead Generation</a></span> <span><a href={"/email-templates/categories/engagement"}>Customer Engagement</a></span> <span><a href="/email-templates/categories/forms">Surveys and Forms</a></span> <span><a href="/email-templates/">AMP Email</a></span> </p></div>

          <button
            className="template-filter"
            onClick={() => setShowFilter(true)}
          >
            {currentCategory == undefined ? "All Templates" : currentCategory.title}&nbsp; &nbsp;
            <img src="/static/images/filter.svg" alt="filter" />
          </button>

          <div className=" mt-5 mb-5">
              
              {/**Masonry Layout**/}
              {/**Done using: https://github.com/paulcollett/react-masonry-css */}
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {jsxVar}
                  </Masonry>
              {/**Masonry Layout END */}

            {/**filteredData.map((template) => {
            return (
              <>
              {template.thumbnail && <div>
                <div className="card min-card-height">
                  <div className="card-body">
                    <Link className="item-detail" href={`/template/${template.id}`}>
                      <a title={template.title}>
                        <img
                          src={getImageUrl((template.thumbnail.url))}
                          className="w-100 avtar"
                          alt={template.title}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>}
              </>
            );
          })**/}
          </div>
        </div>
        {false && <div className="creating-template">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="mb-5 mb-md-0">
                  <h2 className="heading">Free email templates</h2>
                  <p className="tag-line">
                    <p>Access beautiful email templates for all your emailing needs.
                    Each of these templates were built by our in-house team of designers and email experts.
                  A number of design and UI/UX testing are done to ensure that each template is responsive and engaging.</p>
                    <p>We've also covered a wide range of industry verticals, occasions and events to help you send emails without any delay.</p>
                  </p>
                  {/*<button className="create-template btn btn-theme">
                  Create your first template
                </button>*/}
                </div>
              </div>
              <div className="col-md-6 mb-5 mb-md-0">
                <img
                  src="/static/images/create-template-preview.png"
                  alt="preview"
                  className="preview"
                />
              </div>
            </div>

            <div className="free-access home-page">
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

          </div>
        </div>}
        {/* filter */}
        <TemplateFilter
          showFilter={showFilter}
          clickFilter={() => setShowFilter(false)}
          clickFilterAll={() => router.push('/email-templates/')}
          data={allCategories}
          onClick={() => setShowFilter(false)}
        />
      </div>
    </>);
};

export default template;

// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/albums");
//   const templates = await res.json();
//   return {
//     props: {
//       templates,
//     },
//   };
// }
//const normalizeCategory = (category) => category.split(" ").join("_").toLowerCase()
export async function getStaticProps(context) {

  const category = context.params.category; // get slug from params
  const allCategories = await getAllTemplateCategories();
  let filteredData = null, currentCategory = null;
  if (category && category.toLowerCase() !== 'all') {
    filteredData = await getTemplatesForCategory(category);
    currentCategory = allCategories.find(c => c.slug === category);
  }
  else {
    filteredData = await getAllTemplates()
  }

  // sort by oreder weight
  filteredData.sort(function (a, b) {
    return( a.OrderWeight??filteredData.length+1) - (b.OrderWeight??filteredData.length+1)
  });

  //json shortening for better page speeds
  // for(let i = 0;i<filteredData.length;i++){ commented due to hotfix, pending
  //  delete filteredData[i]._id;
  //  delete filteredData[i].id;
  //  delete filteredData[i].created_by;
  //  delete filteredData[i].createdAt;
  //  delete filteredData[i].author;
  //  delete filteredData[i].details;
  //  delete filteredData[i].updatedAt;
  //  delete filteredData[i].updated_by;
  //  delete filteredData[i].renderUrl;
  //  delete filteredData[i].template_category;
  //  delete filteredData[i].OrderWeight;
  //  delete filteredData[i]._v;
  // }

  return {
    props: { filteredData, allCategories, currentCategory }
  };
}

export async function getStaticPaths(context) {

  //  const slugs = await getAllBlogSlugs();
  const categories = await getAllTemplateCategories();
  categories.push({ slug: 'all' })

  return {
    paths: categories.map((r) => {
      return {
        params: {
          category: r.slug
        },
      };
    }),
    fallback: false,
  };
}