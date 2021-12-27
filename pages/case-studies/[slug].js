import { StylesContext } from '@material-ui/styles';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import Head from 'next/head'
import Breadcrumb from '../../components/customerStories/Breadcrumb/Breadcrumb';
import styles from '../../assets/customerStories/styles-slug.module.scss'
import marked from 'marked'
import Link from 'next/link'
import { useRouter } from 'next/router'
//Page Components
import Cards from '../../components/customerStories/Cards/Cards';
import 'antd/dist/antd.css';
import {getImageUrl,getAllCustomerStoryPageSlugs,getRecentCustomerStoryPages,getCustomerStoryPagesBySlug} from '../../lib/strapiApi';

const Page = ({PageData,totalCards, totalPages}) => {
    const router = useRouter()

    return(
        <>
         <ArticleJsonLd
                url={`https://www.mailmodo.com${router.asPath}`}
                title={PageData.seo?.title??" "}
                images={[`https://mm-strapi-4.azurewebsites.net//uploads/ogg_1_09aba6b667.jpg`]}
                // datePublished={PageData.seo?.createdAt??" "}
                // dateModified={PageData.seo?.updatedAt??" "}
                authorName={ "Mailmodo"}
                publisherName="Mailmodo"
                publisherLogo="https://www.mailmodo.com/static/images/logo/logo-full.svg"
                description={PageData.seo?.description??" "}
                />

            <NextSeo
                title={PageData.seo?.title??` `}
                description= {PageData.seo?.description??` `}
                canonical={`https://www.mailmodo.com${router.asPath}`}
                keywords={PageData.seo?.keywords??" "}
                openGraph={{
                    url: `https://www.mailmodo.com${router.asPath}`,
                    title: PageData.seo?.title??` `,
                    description: PageData.seo?.description??` `,
                    type: 'Article',
                    locale: 'en_US',
                    article: {
                        authors: ['Mailmodo'],
                        publishedTime: PageData.seo?.createdAt??" ",
                        modifiedTime: PageData.seo?.updatedAt??" "
                    },
                    images: [{ url: (PageData.seo?.shareImage?.image?.url)?getImageUrl(PageData.seo?.shareImage?.image?.url):`https://www.mailmodo.com/static/images/og-image.png` }],
                }}
                twitter={{
                    handle: '@mailmodo',
                    site: 'twitter.com/mailmodo',
                    cardType: 'summary_large_image',
                  }}
            />

            <Head>
                <style>{'body{font-family: Inter !important;font-family: Inter;}'}</style>
            </Head>
            <NextSeo
                title={``}
                description= {`.`}
                canonical={``}
                keywords={" "}
                // openGraph={{
                //     url: `https://www.mailmodo.com/ebook/subject-line/`,
                //     title: `Subject Line Free Ebook for Higher Email Conversions - Framework, Tips and Best Practices | Mailmodo `,
                //     description: `Subject line crafting for getting high email conversions is difficult. This guide provides the framework to craft winning subject lines, tips from experts and copywriters and more`,
                //     type: 'Article',
                //     locale: 'en_US',
                //     article: {
                //         authors: ['Mailmodo'],
                //         // publishedTime: PageData.seo?.createdAt??" ",
                //         // modifiedTime: PageData.seo?.updatedAt??" "
                //     },
                //     images: [{ url: `https://mm-strapi-4.azurewebsites.net//uploads/ogg_1_09aba6b667.jpg` }],
                // }}
                // twitter={{
                //     handle: '@mailmodo',
                //     site: 'twitter.com/mailmodo',
                //     cardType: 'summary_large_image',
                //   }}
            />  

        <div className={styles.hero_fold}>
            <div className="container" >
                <div className={styles.hero_content_container} >
                        <div className="layout-gap"></div>
                        <Breadcrumb />
                        <div className="layout-padding"></div>
                        <div dangerouslySetInnerHTML={{__html:marked(PageData.content??" ")}} ></div>

                    </div>
            </div>
            <div className="layout-gap"></div>
        </div>

            
        <div className={styles.content_fold}>
            <div className="container" >
                <div className="row">
                    <div className="col-md-8">
                        <div className={styles.matter_block} >
                            <div dangerouslySetInnerHTML={{__html:marked(PageData.GenericContentBlock?.content??" ")}} className={styles.content}>
                                {/* <p>Razorpay is a full-stack financial solutions provider. It offers core financial products like payment methods, business banking solutions, vendor payouts, payroll, and fraud prevention software.</p>
                                <h2>The problem statement</h2>
                                <p>Razorpay’s mission is to make transactions frictionless for SME and enterprise businesses.
As Razorpay’s product suite grew steadily, the team needed to understand their audience and their needs better. They wanted to build and bring new offerings to the market and get them into the hands of customers. They needed genuine feedback from their customers at different time intervals.
Normally, Razorpay usually collected  feedback during their customer service call via a form on the Razorpay dashboard, or from the monthly feedback emails sent out by Razorpay. </p>
<p><strong>customer</strong></p>
<p>
The marketing team was inclined 
<ul>

  <li>2 large eggs</li>

  <li>Sea salt and black pepper</li>

  <li>A small knob of butter</li>

  <li>A handful of cheese</li>

</ul> towards survey-based email campaigns as it was a well-performing and the most scalable way to get feedback. However, due to the multiple steps and redirections in their current emails, customers would often drop off before completing the survey process.
As is the case with a typical email survey, the numbers they saw were not impressive. They needed more, they needed a better approach.</p>
                            <blockquote>
                                <p> was inclined towards survey-based email</p>
                            </blockquote> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" >
                        <div className={styles.author_block} >
                            <div dangerouslySetInnerHTML={{__html:marked(PageData.GenericContentBlock?.summary??" ")}} className={styles.author_content}>
                                {/* <h2><strong>200%</strong></h2>
                                <p>Increase in lead conversion rate</p>
                                <h2>200%</h2>
                                <p>Increase in lead conversion rate</p>
                                <hr/>
                                <p>We saw a massive 250% increase in responses to our NPS survey emails. Our merchants loved the email as it enabled them to share their thoughts with us without even getting redirected once.</p>
                                <img src="https://res.cloudinary.com/mailmodo/image/upload/v1633949831/strapi/Picture_c8692a95e6.png" ></img>
                                <p><strong>Subhash Dash</strong></p>
                                <p>Growth Marketing</p>
                                <img src="https://res.cloudinary.com/mailmodo/image/upload/v1634015961/strapi/image_1_02227385cb.png" ></img>

                                <a href="https://www.mailmodo.com">
                                    <button>Sign Up</button>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="layout-gap"></div>
                <div className="layout-gap"></div>
                {PageData.GenericContentBlock?.ctaMatter && <div className={styles.cta}>
                        <div className={styles.flex_container}>

                            <div dangerouslySetInnerHTML={{__html:marked(PageData.GenericContentBlock.ctaMatter??" ")}} className={styles.flex_item_left}>
                            </div>
                            <div className={styles.flex_item_right+" "}>
                            <Link href={PageData.GenericContentBlock.button.link??" "}>
                                <button className={styles.cta_btn}>{PageData.GenericContentBlock.button.text??" "}</button>
                            </Link>
                            </div>
                        </div>


                </div>}

            </div>
            <div className="layout-gap"></div>
        </div>

        {/* TO DO, Temporarily commented */}
        {/* <Cards totalCards={totalCards} totalPages={totalPages} /> */}


        </>

        
    )
}

export default Page;



  // pass props to Page component
export async function getStaticProps(context) {


    const slug = context.params.slug // get slug from params
    const PageData = await getCustomerStoryPagesBySlug(slug)
    const latest = await getRecentCustomerStoryPages();
    const slugs = await getAllCustomerStoryPageSlugs();
    const totalCards = slugs.length
    const pageSize = 12
    const totalPages =  pageSize * (Math.ceil(totalCards/pageSize)) // Logic for total no of pagination pages
  
  
    return {
        props: { slug, latest, PageData , totalCards, totalPages}
    };
  }
  
  // generate HTML paths at build time
  export async function getStaticPaths(context) {
  
    const slugs = await getAllCustomerStoryPageSlugs();
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
  