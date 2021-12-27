// pages/_app.js
import { DefaultSeo } from "next-seo";
import App from "next/app";
import { withRouter } from "next/router";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cookie from "js-cookie";
import "../assets/styles.scss";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header.js";
import SEO from "../next-seo.config";
import Script from 'next/script'

const firstpromotertracking = `(function(w){w.fpr=w.fpr||function(){w.fpr.q = w.fpr.q||[];w.fpr.q[arguments[0]=='set'?'unshift':'push'](arguments);};})(window);
fpr("init", {cid:"kv7usm29"}); 
fpr("click");`;

// const clearbit = `(function (d, u, h, s) {
//   h = d.getElementsByTagName('head')[0];
//   s = d.createElement('script');
//   s.async = 1;
//   s.src = u + new Date().getTime();
//   h.appendChild(s);
// })(document, 'https://grow.clearbitjs.com/api/pixel.js?v=');`

let prevPath = "";
class MyApp extends App {
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {}

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }

  //   return { pageProps }
  // }

  componentDidMount() {
    if (!Cookie.get("landingPath")) {
      setTimeout(() => {
        Cookie.set("landingPath", this.props.router.route, {
          expires: 3,
          domain: "mailmodo.com",
        });
        Cookie.set("queryMailmodo", JSON.stringify(this.props.router.query), {
          expires: 3,
          domain: "mailmodo.com",
        });
        Cookie.set("referrerMailmodo", document.referrer, {
          expires: 3,
          domain: "mailmodo.com",
        });
      }, 200);
    }
  }

  componentDidUpdate() {
    if (prevPath !== this.props.router.asPath) {
      prevPath = this.props.router.asPath;
      setTimeout(() => {
        analytics.page();
      }, 100);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
      {/* <Head>
        <script type="text/javascript" src="/static/segment.js"></script>
      </Head> */}
      {/* REMOVE: Volument,Clearbit, customfit */}

          <Script  strategy="beforeInteractive" src="/static/segment.js"></Script>
          {/* <Script
            id="customfitinit"
            src="https://sdk.customfit.ai/af707780-353e-11eb-8b57-e5d53eb75caf/cf-js-sdk-min.js"
          ></Script> */}
          {/* firstpromoter tracking */}
          <script src="https://cdn.firstpromoter.com/fpr.js" async></script>
          <script dangerouslySetInnerHTML={{ __html: firstpromotertracking }} />

          <link rel="shortcut icon" href="/favicon.ico" />

          {/**<!-- Analytics by volument.com --> **/}
          {/* <Script
            src="https://cdn.volument.com/v1/volument.js"
            onLoad={()=>{
              this.setState({volument:volument('bc6bda504e')})
            }}
          ></Script> */}
     <Script id="hs-script-loader" src="https://js.hs-scripts.com/20097878.js"></Script>
     {/* <Script strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: clearbit }}></Script>  */}


        <DefaultSeo {...SEO} />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

export default withRouter(MyApp);
