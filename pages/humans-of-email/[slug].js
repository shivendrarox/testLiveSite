import { NextSeo, ArticleJsonLd } from 'next-seo';
import Head from 'next/head'
import Breadcrumb from '../../components/strapi-humans-of-email-pages/Breadcrumb/Breadcrumb';
import styles from '../../assets/humans-of-email/styles-slug.module.scss'
import marked from 'marked'
import Link from 'next/link'
//Page Components
import Cards from '../../components/strapi-humans-of-email-pages/Cards/Cards';
import 'antd/dist/antd.css';
import { getImageUrl, getAllhumansOfEmailPageSlugs, getRecenthumansOfEmailPages, gethumansOfEmailPagesBySlug } from '../../lib/strapiApi';
import Image from 'next/image'

const Page = ({ PageData, totalCards, totalPages }) => {


    return (
        <>

            <ArticleJsonLd
                url={`https://www.mailmodo.com/humans-of-email/${PageData.seo?.title ?? " "}/`}
                title={PageData.seo?.title ?? " "}
                images={[PageData.seo?.shareImage?.image?.url ?? `https://www.mailmodo.com/static/images/og-image.png`]}
                // datePublished={PageData.seo?.createdAt??" "}
                // dateModified={PageData.seo?.updatedAt??" "}
                authorName={"Mailmodo"}
                publisherName="Mailmodo"
                publisherLogo="https://www.mailmodo.com/static/images/logo/logo-full.svg"
                description={PageData.seo?.description ?? " "}
            />

            <NextSeo
                title={PageData.seo?.title ?? ` `}
                description={PageData.seo?.description ?? ` `}
                canonical={`https://www.mailmodo.com/humans-of-email/${PageData.slug}/`}
                keywords={PageData.seo?.keywords ?? " "}
                openGraph={{
                    url: `https://www.mailmodo.com/humans-of-email/${PageData.slug}/`,
                    title: PageData.seo?.title ?? ` `,
                    description: PageData.seo?.description ?? ` `,
                    type: 'Article',
                    locale: 'en_US',
                    article: {
                        authors: ['Mailmodo'],
                        publishedTime: PageData.seo?.createdAt ?? " ",
                        modifiedTime: PageData.seo?.updatedAt ?? " "
                    },
                    images: [{ url: (PageData.seo?.shareImage?.image?.url) ? getImageUrl(PageData.seo?.shareImage?.image?.url) : `https://www.mailmodo.com/static/images/og-image.png` }],
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

            <div className={styles.hero_fold}>
                <div className="container px-0" >
                    <div className={styles.hero_content_container} >
                        <Breadcrumb />
                        <div className="row" >
                            <div className="col-md-6" >
                                <div className={styles.matter_block}>
                                    {PageData.Person?.Name && <h1> {PageData.Person.Name} </h1>}
                                    {PageData.Person?.title && <h2> <del>&nbsp;&nbsp;&nbsp;</del> {PageData.Person.title} </h2>}
                                    {PageData.Person?.about && <p> {PageData.Person.about} </p>}
                                    {true && <ul className={styles.desktop_only} >
                                        <li>CONNECT </li>
                                        {PageData.Person?.instagram && <li><a href={PageData.Person?.instagram}><img style={{ height: '20px', width: '20px' }} src="https://res.cloudinary.com/mailmodo/image/upload/v1636553329/strapi/001_instagram_1_cea4c729c5.png" ></img></a></li>}
                                        {PageData.Person?.facebook && <li><a href={PageData.Person?.facebook}><img style={{ height: '20px', width: '20px' }} src="https://res.cloudinary.com/mailmodo/image/upload/v1636700096/strapi/003_facebook_efbe948b9c.png" ></img></a></li>}
                                        {PageData.Person?.twitter && <li><a href={PageData.Person?.twitter}><img style={{ height: '20px', width: '20px' }} src="https://res.cloudinary.com/mailmodo/image/upload/v1636700110/strapi/002_twitter_2_4308593262.png" ></img></a></li>}
                                        {PageData.Person?.website && <li><a href={PageData.Person?.website}><img style={{ height: '20px', width: '20px' }} src="https://res.cloudinary.com/mailmodo/image/upload/v1636813180/strapi/world_wide_web_c354309655.png" ></img></a></li>}
                                        {PageData.Person?.linkedIn && <li><a href={PageData.Person?.linkedIn}><img style={{ height: '20px', width: '20px' }} src="                                        https://res.cloudinary.com/mailmodo/image/upload/v1636813483/strapi/linkedin_logo_a90de56bd9.png" ></img></a></li>}

                                    </ul>}
                                </div>

                            </div>

                            <div className="col-md-6" >
                                <Image
                                    height="407px"
                                    width="498px"
                                    src={PageData.Person?.image?.url ?? " https://www.google.com"}
                                />
                                <div className={styles.mobile_only_social} style={{ display: "none", textAlign: 'left' }} >
                                    {true && <ul style={{ paddingTop: '35px' }}>
                                        <li>CONNECT </li>
                                        {PageData.Person?.instagram && <li><a href={PageData.Person?.instagram}><img style={{ height: '20px', width: '20px' }} src="https://res.cloudinary.com/mailmodo/image/upload/v1636553329/strapi/001_instagram_1_cea4c729c5.png" ></img></a></li>}
                                        {PageData.Person?.facebook && <li><a href={PageData.Person?.facebook}><img style={{ height: '20px', width: '20px' }} src="https://res.cloudinary.com/mailmodo/image/upload/v1636700096/strapi/003_facebook_efbe948b9c.png" ></img></a></li>}
                                        {PageData.Person?.twitter && <li><a href={PageData.Person?.twitter}><img style={{ height: '20px', width: '20px' }} src="https://res.cloudinary.com/mailmodo/image/upload/v1636700110/strapi/002_twitter_2_4308593262.png" ></img></a></li>}

                                    </ul>}
                                </div>

                            </div>
                        </div>
                    </div>
                    < hr className={styles.hr_class} />
                </div>
            </div>


            <div className={styles.content_fold}>
                {/* <div className="container" > */}
                <div className="row mx-0">
                    <div className="col-md-12 justify-content-center ">
                        <div className={styles.matter_block} >
                            <div dangerouslySetInnerHTML={{ __html: marked(PageData.content ?? " ") }} className={styles.content}>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-4" >
                            <div className={styles.author_block} >
                                <div dangerouslySetInnerHTML={{ __html: marked(PageData.GenericContentBlock?.summary ?? " ") }} className={styles.author_content}>
                                </div>
                            </div>
                        </div> */}
                </div>
                {/* <div className="layout-gap"></div> */}
                {PageData.button?.description && <div className={styles.cta}>
                    <div className={styles.flex_container}>

                        <div dangerouslySetInnerHTML={{ __html: marked(PageData.button.description ?? " ") }} className={styles.flex_item_left}>
                        </div>
                        <div className={styles.flex_item_right + " "}>
                            <Link href={PageData.button?.link ?? "/"}>
                                <button className={styles.cta_btn}>{PageData.button?.text ?? " "}</button>
                            </Link>
                        </div>
                    </div>


                </div>}

                {/* </div> */}
            </div>
            <div className="container px-0">
                < hr className={styles.hr_class} />
            </div>

            {(totalCards >= 3) && <Cards totalCards={totalCards} totalPages={totalPages} />}


        </>


    )
}

export default Page;



// pass props to Page component
export async function getStaticProps(context) {

    const slug = context.params.slug // get slug from params
    const PageData = await gethumansOfEmailPagesBySlug(slug)
    const latest = await getRecenthumansOfEmailPages();
    const slugs = await getAllhumansOfEmailPageSlugs();
    const totalCards = slugs.length
    const pageSize = 3//same value as in the card component being used
    const totalPages = pageSize * (Math.ceil(totalCards / pageSize)) // Logic for total no of pagination pages


    return {
        props: { latest, PageData, totalCards, totalPages }
    };
}

// generate HTML paths at build time
export async function getStaticPaths(context) {

    const slugs = await getAllhumansOfEmailPageSlugs();
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
