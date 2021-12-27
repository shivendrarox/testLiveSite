import React, { useState, } from 'react';
import LetterToSubscribe from '../../components/commonComponent/LetterToSubscribe/LetterToSubscribe';
import {getAllBlogs, getFeatured, getRecentGuidesBlogs, getImageUrl, getCategories } from '../../lib/strapiApi'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './../../assets/guides.module.scss'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import TabsMaterial from '@material-ui/core/Tabs';
import TabMaterial from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';
import ScrollToTop from 'react-scroll-up'
import Image from 'next/image'
import { NextSeo, ArticleJsonLd } from 'next-seo'

const myLoader = ({ src, width, quality="q_50" }) => {// default quality 50%
  let newSrc= src.replace('.jpg','.webp')
      newSrc= newSrc.replace('.png','.webp')

  return `https://res.cloudinary.com/mailmodo/image/upload/${quality}/v1628497684/strapi/${newSrc}`
}
const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 0,
      width: '0%',
      backgroundColor: '#ffff',
    },
  },
})((props) => <TabsMaterial {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    // textTransform: 'none',
    // color: '#707070',
    // fontSize: "1.3rem",
    // marginRight: theme.spacing(1),
    // '&:focus': {
    //   opacity: 1,
    //   color:"#20C58B"
    // },
  },
}))((props) => <TabMaterial disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(1),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#ffff',
    textTransform: "none",
  },
}));

//custom ellipsis, allows 2 words else forces ellipsis
function myCustomEllipsis(str) {
  if (str.split(" ").length > 2) {
    return (str.split(" ")[0] + " " + str.split(" ")[1] + "...")
  }
  return str
}

const test = ({ all,featured, latest, categories }) => {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [key, setKey] = useState('all');

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Tab heads <> buttons logic, for later
  //   let tabHeads=[];
  //   featured.map((category, index) => {
  //       tabHeads.push({category:category.Title,id:index},{category:category.Title,id:index});

  //   })
  //   function chunkArray(myArray, chunk_size){
  //     var index = 0;
  //     var arrayLength = myArray.length;
  //     var tempArray = [];

  //     for (index = 0; index < arrayLength; index += chunk_size) {
  //         var myChunk = myArray.slice(index, index+chunk_size);
  //         // Do something if you want with the group
  //         tempArray.push(myChunk);
  //     }

  //     return tempArray;
  //   }
  // const [setTabSeq,tabSeq]=useState(chunkArray(tabHeads,3));
  // const [setTabSeqInd,tabSeqInd]=useState(0);
  return (
    <>
                <ArticleJsonLd
                url={`https://www.mailmodo.com/guides/`}
                title={"Email Marketing Blog - Guides on How tos, AMP Emails, Best Practices, Deliverability, and Latest Trends"}
                images={["https://www.mailmodo.com/static/images/og-image.png"]}
                // datePublished={blog.createdAt}
                // dateModified={blog.updatedAt}
                authorName={"Mailmodo"}
                publisherName="Mailmodo"
                publisherLogo="https://www.mailmodo.com/static/images/logo/logo-full.svg"
                description={"Read Mailmodo's email marketing blog to learn about email marketing, email infrastructure, deliverability, tools and software, best practices and AMP emails, list building, email deliverability, email marketing metrics, and more."}
            />

            <NextSeo
                title={"Email Marketing Blog - Guides on How tos, AMP Emails, Best Practices, Deliverability, and Latest Trends"}
                description={"Read Mailmodo's email marketing blog to learn about email marketing, email infrastructure, deliverability, tools and software, best practices and AMP emails, list building, email deliverability, email marketing metrics, and more."}
                canonical={`https://www.mailmodo.com/guides/`}
                keywords=""
                openGraph={{
                    url: `https://www.mailmodo.com/guides/`,
                    title: "Email Marketing Blog - Guides on How tos, AMP Emails, Best Practices, Deliverability, and Latest Trends",
                    description: "Read Mailmodo's email marketing blog to learn about email marketing, email infrastructure, deliverability, tools and software, best practices and AMP emails, list building, email deliverability, email marketing metrics, and more.",
                    type: 'Article',
                    locale: 'en_US',
                    images: ["https://www.mailmodo.com/static/images/og-image.png"],
                }}
                twitter={{
                    handle: '@mailmodo',
                    site: 'twitter.com/mailmodo',
                    cardType: 'summary_large_image',
                }}
            />

      <ScrollToTop className={styles.scroll_overide} style={{ zIndex: "50", width: "fit-content", bottom: "100px", right: "40px" }} showUnder={250}>
        <img style={{ width: "20px" }} src="/static/images/icon/chevron-up.svg" ></img>
      </ScrollToTop>
      {/* banner*/}
      <div className={styles.banner + " "}>
        <div className="container px-0">
          <div className="row mx-0">

            <div className="col-md-9 px-0">
              <h1 className={styles.heading}>A guide to everything about Email Marketing</h1>
              <p className={styles.description}>Want to get more email conversions? <br /> Subscribe to our newsletter today.</p>
              <div className={styles.input_container}>
                <LetterToSubscribe messageClass={"successMessage_guides_hero"} trackingIdArr={['subscribe_top_guides']} />
              </div>
            </div>
            <div className="col-md-3 px-0 d-none d-md-block">
              <img
                className={styles.illustration_right}
                src={("/static/images/guides/hero.svg")}>
              </img>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.article_section}>
        <div className={styles.flex_container}>

          <div style={{ width: "100%" }} className={" "}>
            <h2 className={styles.heading}>Recent Articles</h2>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className=" mx-0">
                <Col className="px-0" sm={12}>
                  <Tab.Content>
                    <Tabs defaultActiveKey={"first"}>

                      <Tab.Pane eventKey="first">
                        <div className={styles.recent_cards_cont}>


                            {latest.map((blog,index) => {
                              return (
                                <>
                                  <Link href={`/guides/${blog.slug}`}>

                                      {/* <div className={styles.card + " row"}>
                                      <div className="col-md-6 p-0 m-0">
                                         <img src={blog.featuredImage?.url ? getImageUrl(blog.featuredImage?.url) : "/static/images/article.png"} className={styles.card_img}></img> 
                                        <Image
                                          loader={myLoader}
                                          src={blog.featuredImage?.url ? (blog.featuredImage?.url) : "/uploads/article_799730348e.png"}
                                          layout={"responsive"}
                                          width={399}
                                          height={222}
                                        ></Image>
                                      </div>
                                      <div className="col-md-6  p-0 m-0 pr-5 pl-1">
                                        <p className={styles.card_tag}>#RECENT</p>
                                        <h4 className={styles.card_title}>
                                          {blog.title}
                                        </h4>
                                      </div>
                                    </div> */}
                                      <div className={styles.card}>
                                        <div className={styles.img_left}>
                                          {/* <img src={blog.featuredImage?.url ? getImageUrl(blog.featuredImage?.url) : "/static/images/article.png"} className={styles.card_img}></img> */}
                                          <Image
                                            src={getImageUrl(blog.featuredImage?.url ? (blog.featuredImage?.url) : "https://res.cloudinary.com/mailmodo/image/upload/v1631275106/strapi/Default_Image_a1d16f8d39.png","webp","20")}
                                            layout={"responsive"}
                                            width={399}
                                            height={222}
                                            priority={(index==0)?true:false}
                                          ></Image>
                                        </div>
                                        <div className={styles.text_right}>
                                        <p className={styles.card_tag}>#RECENT</p>
                                        <h4 className={styles.card_title}>
                                          {blog.title}
                                        </h4>
                                        </div>

                                      </div>

                                  </Link>

                                </>
                              )
                            })}
                        </div>
                      </Tab.Pane>


                    </Tabs>

                  </Tab.Content>

                </Col>
              </Row>
            </Tab.Container>


            <div className={styles.explore}>
              <div className={styles.scroll_menu}>

                <h2 className={styles.heading} style={{ display: "inline" }} >Explore</h2>
                <div className={styles.tab_head}>
                  <StylesProvider >
                    <StyledTabs style={{ minHeight: "auto" }} variant="scrollable"
                      scrollButtons="auto" value={value} onChange={handleChange} aria-label="styled tabs example">
                      <StyledTab className={styles.MuiTab_wrapper} style={{ color: `${(key === `all` ? "#20C58B" : "")}` }} onClick={(e) => { setKey("all") }} label="All" />
                      {categories.map((category, index) => {
                        return (
                          <StyledTab id={`${index}`} className={styles.MuiTab_wrapper} style={{ color: `${(key === `${index}` ? "#20C58B" : "")}` }} onClick={(e) => { setKey(`${index}`) }} label={category.name} />
                        )
                      })}

                    </StyledTabs>
                  </StylesProvider>
                </div>


                {/*                   
                  <a className={(key===`${0}`?styles.active_a:"")} onClick={(e) => { setKey("" + 0) }}>Email Marketing Basics</a>
                  <a className={(key===`${1}`?styles.active_a:"")} onClick={(e) => { setKey("" + 1) }}>AMP Emails</a>
                  <a className={(key===`${2}`?styles.active_a:"")} onClick={(e) => { setKey("" + 2) }}>Email Deliverability & Security</a> */}

              </div>
              <nav className="nav nav-tabs " role="tablist"></nav>
              <Tab.Container id="custom-tabs-example"
                defaultActiveKey="all"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <Tab.Content>
                  <Tab.Pane eventKey="all">
                    {all.map((blog) => {
                        return (
                          <>
                            <Link href={`/guides/${blog.slug}`}>
                              <div className={styles.card}>
                                <div className={styles.img_left}>
                                  {/* <img src={blog.featuredImage?.url ? getImageUrl(blog.featuredImage?.url) : "/static/images/article.png"} className={styles.card_img}></img> */}
                                  <Image
                                    src={getImageUrl(blog.featuredImage?.url ? (blog.featuredImage?.url) : "https://res.cloudinary.com/mailmodo/image/upload/v1631275106/strapi/Default_Image_a1d16f8d39.png","webp","10")}
                                    layout={"responsive"}
                                    width={399}
                                    height={222}
                                  ></Image>
                                </div>

                                <div className={styles.text_right}>
                                  <h4 className={styles.card_title}>
                                    {blog.title ?? ""}
                                  </h4>
                                  <p className={styles.card_tag}>
                                    {blog.seoDescription ?? ""}
                                  </p>
                                </div>

                              </div>
                            </Link>

                          </>
                        )

                    })}
                  </Tab.Pane>

                  {categories.map((category, index) => {
                    return (<>
                      <Tab.Pane eventKey={"" + index}>

                        {category.blogs.map((blog) => {
                          return (<>
                            <Link href={`/guides/${blog.slug}`}>
                              <div className={styles.card}>
                                <div className={styles.img_left}>
                                  {/* <img src={blog.featuredImage?.url ? getImageUrl(blog.featuredImage?.url) : "/static/images/article.png"} className={styles.card_img}></img> */}
                                  <Image
                                    loader={myLoader}
                                    src={blog.featuredImage?.url ? (blog.featuredImage?.url) : "/uploads/article_799730348e.png"}
                                    layout={"responsive"}
                                    width={399}
                                    height={222}
                                  ></Image>
                                </div>
                                <div className={styles.text_right}>
                                  <h4 className={styles.card_title}>
                                    {blog.title ?? ""}
                                  </h4>
                                  <p className={styles.card_tag}>
                                    {blog.seoDescription ?? ""}
                                  </p>
                                </div>

                              </div>
                            </Link>
                          </>)
                        })}
                      </Tab.Pane>
                    </>)
                  })}

                </Tab.Content>
              </Tab.Container>

            </div>

          </div>



          {/* <div style={{ width: "15%" }} className={" ml-3 d-md-block d-none "}>
            <div className={styles.nav_container}>
              <Col className=" pl-0" sm={12}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link className={(key === "all") ? styles.nav_link_active : styles.nav_link} onClick={(k) => { setKey("all") }} >All</Nav.Link>
                  </Nav.Item>
                  {featured.map((category, index) => {
                    return (
                      <>
                        <Nav.Item>
                          <Nav.Link className={(key === ("" + index)) ? styles.nav_link_active : styles.nav_link} onClick={(k) => { setKey("" + index) }} >{category.Title ?? ""}</Nav.Link>
                        </Nav.Item>
                      </>
                    )
                  })}
                </Nav>
              </Col>
            </div>
          </div> */}


        </div>
      </div>

      <div className={styles.footer_section}>
        <div className="container px-0">
          <div className="row">
            <div className="col-md-6 ">
              <h2 className={styles.heading}>Featured Articles</h2>

              {featured[0].Articles.map((blog) => {
                return (
                  <>
                    <Link href={`/guides/${blog.slug}`}>
                      <div className={styles.card}>
                        <div className={styles.img_left}>
                          {/* <img src={blog.featuredImage?.url ? getImageUrl(blog.featuredImage?.url) : "/static/images/article.png"} className={styles.card_img}></img> */}
                          <Image
                            loader={myLoader}
                            src={blog.featuredImage?.url ? (blog.featuredImage?.url) : "/uploads/article_799730348e.png"}
                            layout={"responsive"}
                            width={187}
                            height={98}
                            className={styles.card_img}
                          ></Image>
                        </div>
                        <div className={styles.text_right}>
                          <h4 className={styles.card_title}>
                            {blog.title ?? ""}
                          </h4>
                          <p className={styles.card_tag}>{`${months[parseInt(blog.updatedAt?.split("-")[1] ?? 0)]} ${parseInt(blog.updatedAt?.split("-")[2].substring(0, 2) ?? 1)}, ${parseInt(blog.updatedAt?.split("-")[0])}`}</p>

                        </div>

                      </div>
                    </Link>

                  </>
                )
              })}
            </div>
            <div className={"col-md-6 " + styles.right}>
              <h2 className={styles.heading}>Tags</h2>

              <div className={styles.tag_container}>
                {categories.map((category, index) => {
                  return (
                    <>
                      <a onClick={() => { setKey(`${index}`) }} href={`#${index}`}><label>{myCustomEllipsis(category.name)}</label></a>
                    </>
                  )
                })}

              </div>

              <div className={styles.input_container}>
                <p className={styles.right_heading}>Subscribe to our newsletter 'The Mailmodo Bulletin' to receive the latest news, updates and tips from the world of email marketing!</p>
                <LetterToSubscribe messageClass={"successMessage_guides_footer"} trackingIdArr={['subscribe_bottom_guides']} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// pass props to BlogPostPage component
export async function getStaticProps(context) {
  const featured = await getFeatured();
  const latest = await getRecentGuidesBlogs();
  const categories = await getCategories()
  const all = await getAllBlogs();

  return {
    props: { all, featured, latest, categories },
  };
}

export default test;