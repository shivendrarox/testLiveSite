import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image'
import { getImageUrl } from "../../../lib/strapiApi";
const Footer = (props) => {
  const router = useRouter()?.asPath;
  // console.log("router", router);
  return (
    <footer className={`footer-dark `}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                {/* <img
                  class="footer-logo"
                  src="/static/images/footer-logo.svg"
                  alt="maidmodo logo"
                /> */}
                <div className="footer-logo">
                <Image
                src={getImageUrl("/static/images/footer-logo.svg",'svg',100)}
                layout="intrinsic"
                alt="maidmodo logo"
                width={177}
                height={32}
                className="footer-logo"
                />
                </div>
                <address>
                  <p>Mailmodo Technologies Inc.</p>
                  <p>
                  355 Bryant Street, Unit 403
                    <br />
                    San Francisco, CA 94107
                    <br /> USA
                  </p>
                  {/* <a className="d-block" href="tel:+12626002002">
                    +1 262 600 2002
                  </a> */}
                  <a className="d-block" href="mailto: support@mailmodo.com">
                  help@mailmodo.com
                  </a>
                </address>
              </div>
              <div className="col-md-6">
                <h4 className="footer-heading"> <Link passHref prefetch={false}  href="/">Home</Link></h4>
                <ul className="list-unstyled about-links">
                  <li className="links">
                     <Link passHref prefetch={false}  href="/pricing/">
                      <a>Pricing</a>
                    </Link>
                  </li>

                  <li className="links">
                    <a href="https://help.mailmodo.com/en/" target="_blank">
                      <a>Help</a>
                    </a>
                  </li>
                  
                  <li className="links">
                     <Link passHref prefetch={false}  href="/affiliate/">
                      <a>Affiliate</a>
                    </Link>
                  </li>
                  {/* <li className="links">
                     <Link passHref prefetch={false}  href="/privacy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li> */}

                  <li className="links">
                     <Link passHref prefetch={false}  href="/gdpr/gdprcompliance/">
                      <a>GDPR Compliance</a>
                    </Link>
                  </li> 
                  <li className="links">
                     <Link passHref prefetch={false}  href="/guides/">
                      <a>Guides</a>
                    </Link>
                  </li>
                  {/* <li className="links">
                     <Link passHref prefetch={false}  href="/cookies">
                      <a>Cookies</a>
                    </Link>
                  </li> */}


                  <li className="links">
                     <Link passHref prefetch={false}  href="/gdpr/privacypolicy/">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  {/* <li className="links">
                                        <a href="https://mailmodo.com/guides">Guides</a>
                                    </li> */}
                  {/* <li className="links">
                     <Link passHref prefetch={false}  href="/terms">
                      <a>Terms & conditions</a>
                    </Link>
                  </li> */}
 
                  <li className="links">
                     <Link passHref prefetch={false}  href="/email-templates/">
                      <a>Email Templates</a>
                    </Link>
                  </li>

                  <li className="links">
                     <Link passHref prefetch={false}  href="/gdpr/cookiepolicy">
                      <a>Cookie Policy</a>
                    </Link>
                  </li>

                  <li className="links">
                     <Link passHref prefetch={false}  href="/features/">
                      <a>Features</a>
                    </Link>
                  </li>

                  <li className="links">
                     <Link passHref prefetch={false}  href="/gdpr/termsandconditions/">
                      <a>Terms of Service</a>
                    </Link>
                  </li>
                  {/* <li className="links">
                    <a href="javascript:void(0)">About</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className={`col-md-6 ${router == "/" ? "mb-5" : ""}`}>
            <div className="row">
              <div className="col-md-7">
                <h4 className="footer-heading">Products</h4>
                <ul className="list-unstyled about-links">
                  <li className="links">
                    <a href="/features/email-marketing-platform/">
                    Email Marketing
                    </a>
                  </li>
                 
                  <li className="links">
                    <a href="/features/customer-engagement-platform/">
                    Customer Engagement
                    </a>
                  </li>
                  <li className="links">
                    <a href="/features/send-amp-emails/">
                    AMP Emails
                    </a>
                  </li>
                  <li className="links">
                    <a href="/features/online-survey-tool/">
                    Surveys
                    </a>
                  </li>
                  <li className="links">
                    <a href="/features/shopify-email-marketing/">
                    Shopify Email Marketing
                    </a>
                  </li>

                  <li className="links">
                    <a href="/features/email-template-builder/">
                    Email Builder
                    </a>
                  </li>

                  <li className="links">
                    <a href="/features/transactional-email-service/">
                    Transactional Email
                    </a>
                  </li>
                  <li className="links">
                    <a href="/features/bulk-email-service/">
                    Bulk Email
                    </a>
                  </li>
                  <li className="links">
                    <a href="/features/email-automation-software/">
                    Email Automation
                    </a>
                  </li>
                  <li className="links">
                    <a href="/features/newsletter-software/">
                    Newsletter Software
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-5 mb-5 mb-md-0">
                <h4 className="footer-heading">Resources</h4>
                <ul className="list-unstyled about-links">
                <li className="links">
                    <a href="/guides/amp-for-email/">
                    AMP Email Guide
                    </a>
                  </li>
                  <li className="links">
                     <Link passHref prefetch={false}  href="/use-case/">
                      <a>Use cases</a>
                    </Link>
                  </li>
                  <li className="links">
                     <Link passHref prefetch={false}  href="/case-studies/">
                      <a>Case Studies</a>
                    </Link>
                  </li>
                  <li className="links">
                     <Link passHref prefetch={false}  href="/podcast/">
                      <a>Podcasts</a>
                    </Link>
                  </li>
                  <li className="links">
                     <Link passHref prefetch={false}  href="/videos/">
                      <a>Videos</a>
                    </Link>
                  </li>
                  <li className="links">
                     <Link passHref prefetch={false}  href="/newsletter/">
                      <a>Newsletters</a>
                    </Link>
                  </li>
                  <li className="links">
                     <Link passHref prefetch={false}  href="/humans-of-email/">
                      <a>Humans of Email</a>
                    </Link>
                  </li>
                  <li className="links">
                     <Link passHref prefetch={false}  href="/checklist/">
                      <a>Email Checklist</a>
                    </Link>
                  </li>
                  <li className="links">
                     <Link passHref prefetch={false}  href="/ebook/">
                      <a>Ebooks</a>
                    </Link>
                  </li>
                  <li className="links">
                     <Link passHref prefetch={false}  href="/comparison/">
                      <a>How We Compare</a>
                    </Link>
                  </li>
                  <li className="links">
                     <Link passHref prefetch={false}  href="/partner/">
                      <a>Partner</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{padding:"2rem"}}></div>
      {true && <div className="copyright-section " ><p>© 2021, Mailmodo Technologies Inc. All rights reserved</p></div>}
    </footer>
  );
};

export default Footer;
