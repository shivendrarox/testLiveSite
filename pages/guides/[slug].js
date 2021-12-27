import { NextSeo, ArticleJsonLd } from 'next-seo'
// import ReactMarkdown from 'react-markdown'
import Moment from "react-moment";
import Link from 'next/link';
import Router from 'next/router'
// import gfm from 'remark-gfm'
import Markdown from 'markdown-to-jsx';//New Markdown Renderer

// import remark from 'remark'
// import toc from 'remark-toc'
// import recommended  from 'remark-preset-lint-recommended'
// import html from 'remark-html'
// import slug from 'remark-slug'
import v from 'voca'
import LatestArticleCard from '../../components/commonComponent/LatestArticleCard/LatestArticleCard';
// import RecentArticleCard from '../../components/guides/Cards/Cards'
import Facebook from './../../static/images/icon/facebook-colored.svg'
// import Instagram from './../../static/images/icon/instagram-colored.svg'
import Linkedin from './../../static/images/icon/linkedin-colored.svg'
import Twitter from './../../static/images/icon/twitter-colored.svg'
import Whatsapp from './../../static/images/icon/whatsapp-colored.svg'
//import author_placeholder from './../../static/images/icon/author_placeholder.svg'
// import BlogImage from './../../static/images/blog-image-sample.jpg'
// import BannerImage from './../../static/images/banner-illustration.png'
import CtaRight from './../../static/images/icon/cta-right.svg'
import CategoryCard from '../../components/commonComponent/CategoryCard/CategoryCard';
import RelatedArticle from '../../components/commonComponent/RelatedArticle/RelatedArticle';
import Button from '../../components/commonComponent/Button/Button';
import Breadcrumb from '../../components/commonComponent/Breadcrumb/Breadcrumb';
// import ResourceBar from '../../components/guides/resourceBar/resourceBar';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
import Subscribe from '../../components/commonComponent/SubscribeGuides/index';
import { getAllBlogSlugs, getBlogBySlug, getImageUrl, getRandomBlogs, getLatestBlogs } from '../../lib/strapiApi'
// import GoogleSignupButton from "../../components/commonComponent/GoogleButton";
// import SignupButton from "../../components/commonComponent/SignupButton";
import Head from 'next/head'
import { useRouter } from "next/router";
import styles from '../../assets/guides-slug.module.scss'
import { remarkSlug } from 'remark-slug'

//Code for inserting strapi urls in the src of images comming from strapi
const MyImg = ({ children, ...props }) => {
    if (props.src.indexOf('/uploads/') == 0) {
        props.src = 'https://mm-strapi-4.azurewebsites.net' + props.src;
    }
    return <img {...props}></img>
}

const H3ListItem = ({ children, ...props }) => {    //HOTFIX: h3 has li, which has a glitched marker value, on first render.

    if (children[0].type === "ol") {
        //console.log(children)
        return <h3 {...props}>{children[0].props.start + ". " + children[0].props.children[0].props.children[0]}</h3>
    }
    return <h3 {...props}>{children}</h3>
}


const CustomBlockquote = ({ children, ...props }) => {
    return <div className={styles.custom_blockquote} ><blockquote {...props}>{children}</blockquote></div>
}

const PostDetail = ({ blog, related, latest, slug, result }) => {
    const router = useRouter()?.asPath;

    //console.log(result)
    //console.log(getImageUrl(blog.featuredImage.url));
    return (
        <>
            <Head>
                <style>{'body{background-color:#f4f4f4 !important;font-family:Inter !important;}'}</style>
            </Head>

            <ArticleJsonLd
                url={`https://www.mailmodo.com/guides/${blog.slug}/`}
                title={blog.title ?? `${blog.title} | Guides | Mailmodo`}
                images={[blog.featuredImage && getImageUrl(blog.featuredImage.url)]}
                datePublished={blog.createdAt}
                dateModified={blog.updatedAt}
                authorName={(blog.author != undefined) ? blog.author.name : "Mailmodo"}
                publisherName="Mailmodo"
                publisherLogo="https://www.mailmodo.com/static/images/logo/logo-full.svg"
                description={blog.description ?? blog.description}
            />

            <NextSeo
                title={blog.seoTitle ?? `${blog.title} | Guides | Mailmodo`}
                description={blog.seoDescription ?? blog.description}
                canonical={`https://www.mailmodo.com/guides/${blog.slug}/`}
                keywords="cake for a party, coffee"
                openGraph={{
                    url: `https://www.mailmodo.com/guides/${blog.slug}/`,
                    title: blog.seoTitle ?? `${blog.title} | Guides | Mailmodo`,
                    description: blog.seoDescription ?? blog.description,
                    type: 'Article',
                    locale: 'en_US',
                    article: {
                        authors: (blog.author != undefined) ? [blog.author.name] : ['Mailmodo'],
                        publishedTime: blog.createdAt,
                        modifiedTime: blog.updatedAt
                    },
                    images: [{ url: blog.featuredImage && getImageUrl(blog.featuredImage.url) }],
                }}
                twitter={{
                    handle: '@mailmodo',
                    site: 'twitter.com/mailmodo',
                    cardType: 'summary_large_image',
                }}
            />
            {/* {false && blog.banner && <div className="banner-detailed">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 d-flex justify-content-center">
                            <div className="banner-image">
                                <img src={BannerImage} className="w-100" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h2>{blog.banner.heading}</h2>
                            <p>{blog.banner.subHeading}</p>
                            <Button
                                // type
                                className="btn mailmodo-secondary-btn"
                                text={blog.banner.buttonText}
                            />
                        </div>
                    </div>
                </div>
            </div>} */}
            {/* <ResourceBar pageTitle={""}/> */}
            <div className={styles.detailPage}>
                 
                <div className={styles.guides_top_gap}></div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 px-0">
                            <div className={styles.blog_detail}>
                                <div className="row m-auto">
                                    <div className="col-md-12 px-0">
                                        <Breadcrumb pageTitle={blog.title} />
                                    </div>
                                    {/* <div className="col-md-5 px-0">
                                    <ul className={styles.blog_detail_header+" d-flex align-items-center list-unstyled justify-content-between"}>
                                    <li className={styles.date}>
                                    </li>
                                    <li className={styles.social}>

                                        <LinkedinShareButton url={`https://www.mailmodo.com/guides/${blog.slug}`} quote={blog.title}>
                                            <img src={Linkedin} />
                                        </LinkedinShareButton>
                                        <FacebookShareButton
                                            url={`https://www.mailmodo.com/guides/${blog.slug}`}
                                            quote={blog.title}
                                        >
                                            <img src={Facebook} />
                                        </FacebookShareButton>
            
                                        <WhatsappShareButton
                                            url={`https://www.mailmodo.com/guides/${blog.slug}`}
                                            quote={blog.title}
                                            separator=":: "
                                        >
                                            <img src={Whatsapp} />
                                        </WhatsappShareButton>
                                        <TwitterShareButton
                                            url={`https://www.mailmodo.com/guides/${blog.slug}`}
                                            quote={blog.title}
                                        >
                                            <img src={Twitter} />
                                        </TwitterShareButton>
                                    </li>
                                </ul>
  
                                    </div>
                                 */}
                                </div>

                                <h1 className={styles.title}>{blog.title}</h1>
                                <div className="row m-auto">
                                    {/* <div className="col-md-7 px-0">
                                        <Breadcrumb pageTitle={blog.title} />
                                    </div> */}
                                    <div className="col-6 px-0">
                                        <div className={styles.custom_date}>
                                            <img title="clock icon" alt="clock" style={{ height: '14px', width: '14px' }} src="/static/images/guides/clock-icon.svg"></img>
                                            <Moment format="DD MMMM, YYYY" parse="YYYY-MM-DD"> {blog.date}</Moment>
                                        </div>
                                    </div>
                                    <div className="col-6 px-0">

                                        <ul className={styles.blog_detail_header + " d-flex align-items-center list-unstyled justify-content-between"}>
                                            <li className={styles.social}>
                                                {/* <a href="https://www.linkedin.com/company/mailmodo/">
                                        </a> */}
                                                {/* <a href="https://www.facebook.com/mailmodo/">
                                            <img src={Facebook} />
                                        </a> */}
                                                <LinkedinShareButton url={`https://www.mailmodo.com/guides/${blog.slug}`} quote={blog.title}>
                                                    <img title="Linkedin icon" alt="Linkedin" src={Linkedin} />
                                                </LinkedinShareButton>
                                                <FacebookShareButton
                                                    url={`https://www.mailmodo.com/guides/${blog.slug}`}
                                                    quote={blog.title}
                                                >
                                                    <img title="Facebook icon" alt="Facebook" src={Facebook} />
                                                </FacebookShareButton>
                                                {/* <a href="https://wa.me/9997608521">
                                            <img src={Whatsapp} />
                                        </a> */}
                                                <WhatsappShareButton
                                                    url={`https://www.mailmodo.com/guides/${blog.slug}`}
                                                    quote={blog.title}
                                                    separator=":: "
                                                >
                                                    {/* <WhatsappIcon size={32} round /> */}
                                                    <img title="Whatsapp icon" alt="Whatsapp" src={Whatsapp} />
                                                </WhatsappShareButton>
                                                {/* TODO */}
                                                {/* <a href="#">
                                            <img src={Instagram} />
                                        </a> */}
                                                {/* <a href="https://twitter.com/mailmodo">
                                            <img src={Twitter} />
                                        </a> */}
                                                <TwitterShareButton
                                                    url={`https://www.mailmodo.com/guides/${blog.slug}`}
                                                    quote={blog.title}
                                                >
                                                    <img title="Twitter icon" alt="Twitter" src={Twitter} />
                                                </TwitterShareButton>
                                            </li>
                                        </ul>

                                    </div>

                                </div>

                                <div className={styles.content}>
                                    {/*<ReactMarkdown source={blog.description} />*/}
                                    {blog.featuredImage && <img title="Featured Image" src={getImageUrl(blog.featuredImage.url)} className={styles.featured_image} alt={blog.featuredImage.alternativeText} />}


                                    {/* //Old Markdown renderer: <ReactMarkdown plugins={[gfm]} linkTarget="_blank" transformImageUri={getImageUrl} escapeHtml={false} source={blog.content} />*/}
                                    <Markdown options={{
                                        overrides: {
                                            img: {
                                                component: MyImg,
                                                props: {
                                                    className: 'foo',
                                                },
                                            },
                                            h3: {
                                                component: H3ListItem,
                                            },
                                            blockquote: {
                                                component: CustomBlockquote
                                            }
                                        },
                                    }} >{result}</Markdown>

                                </div>
                                {/* Author Section BEGIN*/}
                                {/*console.log(blog.author)*/}
                                {blog.author &&
                                    <div className={styles.author_section}>
                                        <div className="layout-padding"></div>
                                        <h3 className=" ">✍️ Author - <strong>{blog.author.name}</strong></h3>
                                        <div className={styles.author_container}>
                                            <div className={styles.author_left}>
                                                <p>
                                                    {blog.author.about}
                                                </p>
                                                {blog.author && <ul className={styles.blog_detail_footer + " d-flex align-items-center list-unstyled justify-content-between "}>

                                                    <li className={styles.social}>

                                                        <LinkedinShareButton url={`https://www.mailmodo.com/guides/${blog.slug}`} quote={blog.title}>
                                                            <img title="Linked Logo" alt="Linkedin" src={Linkedin} />
                                                        </LinkedinShareButton>
                                                        <FacebookShareButton
                                                            url={`https://www.mailmodo.com/guides/${blog.slug}`}
                                                            quote={blog.title}
                                                        >
                                                            <img title="Facebook Logo" alt="Facebook" src={Facebook} />
                                                        </FacebookShareButton>

                                                        <WhatsappShareButton
                                                            url={`https://www.mailmodo.com/guides/${blog.slug}`}
                                                            quote={blog.title}
                                                            separator=":: "
                                                        >

                                                            <img title="Whatsapp Logo" alt="Whatsapp" src={Whatsapp} />
                                                        </WhatsappShareButton>

                                                        <TwitterShareButton
                                                            url={`https://www.mailmodo.com/guides/${blog.slug}`}
                                                            quote={blog.title}
                                                        >
                                                            <img title="Twitter Logo" alt="Twitter" src={Twitter} />
                                                        </TwitterShareButton>
                                                    </li>
                                                </ul>}

                                            </div>
                                            <div className={styles.author_right}>
                                                {(blog.author?.picture?.url) ? <img title="avtar image" src={getImageUrl(blog.author.picture.url)} alt="Avatar" class={styles.avatar}></img> :

                                                    <div style={{ position: "relative" }}>
                                                        <h2 className={styles.placeholder_text}>{blog.author.name[0]}</h2>
                                                        <img title="placeholder title" alt="placeholder.svg" src={'./../../static/images/icon/author_placeholder.svg'}></img>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>}

                                {/* Author Section END */}

                                {/* Prev and next article nav */}
                                <div className={styles.preview_next + " d-flex justify-content-between"}>
                                    {blog.previous && <Link href={`/guides/${encodeURIComponent(blog.previous.slug)}`}>
                                        <a className={styles.previous}>
                                            <span className={styles.icon}></span>
                                            <span className={styles.text}>Previous</span>
                                        </a>
                                    </Link>}
                                    {blog.next && <Link href={`/guides/${encodeURIComponent(blog.next.slug)}`}>
                                        <a className={styles.next}>
                                            <span className={styles.text}>Next article</span>
                                            <span className={styles.icon}></span>
                                        </a>
                                    </Link>}
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 px-0">


                            <div className={styles.sticky_container}>

                                {/* cta subscribe */}
                                <Subscribe trackingIdArr={['guides_slug_subscribe']} messageClass={"successMessage_guides_hero"} />

                                {/* Related articles */}
                                {(blog.featured.length == 0) ? <CategoryCard related={related} /> : <></>}

                                {/* Featured Article */}
                                <RelatedArticle featured={blog.featured} />

                                {/* cta signup */}
                                <div className={styles.cta_signup}>
                                    <h3>Want to improve
                                        your <span>email marketing conversions?</span>
                                    </h3>
                                    <Button
                                        text="Signup Now"
                                        id="guides_slug_signup"
                                        className=" mailmodo-secondary-btn"
                                        onClick={() => Router.push("https://manage.mailmodo.com/auth/signup")}
                                    />
                                    <img title="cta image" alt="cta image" src={CtaRight} className={styles.cta_img} />
                                </div>

                            </div>


                        </div>
                    </div>
                </div>

                {/* blog */}

                {/* <div className="layout-gap"></div> */}

                {/* latest article */}
                <div className="container pb-0 latest_article w-90-center mt-0">
                    <h2 className="heading">Latest Articles</h2>
                    <div className="row px-0 py-0">
                        {/* <RecentArticleCard/> */}
                        {latest.map(blog => {
                            return <div className="col-md-4 py-3">
                                <LatestArticleCard
                                    date={blog.date}
                                    title={blog.title}
                                    image={blog.featuredImage && getImageUrl(blog.featuredImage.url)}
                                    href={`/guides/${encodeURIComponent(blog.slug)}`}
                                />
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className="layout-gap"></div>

            {/* <div className="free-access home-page hompage-footer-cta mb-0">
                <div className="container px-1 text-center">
                    <h2 className="heading heading_mobile">Get free access by signing up now</h2>
                    <p>(No credit card required for signing up)</p>

                    <div className="form-wrap text-center">
                        <div className="text-center d-flex justify-content-center">
                            <GoogleSignupButton extraClass="extra-class mr-3" />
                            <SignupButton extraClass="extra-class" />
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

// pass props to BlogPostPage component
export async function getStaticProps(context) {


    const slug = context.params.slug; // get slug from params
    const blog = await getBlogBySlug(slug)

    const related = await getRandomBlogs();
    const latest = await getLatestBlogs();

    //.md Processing logic
    let result// = md.render(blog.content);
    var remark = require('remark')
    var toc = require('remark-toc')
    var recommended = require('remark-preset-lint-recommended')
    //var html = require('remark-html')
    //var slug = require('remark-slug')

    remark()
        .use(recommended)
        .use(toc, { 'maxDepth': 2 })
        //.use(html)
        .use(remarkSlug)
        .process(blog.content, function (err, file) {
            result = String(file)
        })

    result = v.replaceAll(result, '&#x26;', '&');//Hotfix for escaping symbols in HTML

    return {
        props: { blog, related, latest, slug, result }
    };
}

// generate HTML paths at build time
export async function getStaticPaths(context) {

    const slugs = await getAllBlogSlugs();
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
export default PostDetail;