import Link from "next/link";
import React, { useState} from "react";
import Burger from "./../../../static/images/icon/hamburger.svg";
import DarkBurger from "./../../../static/images/icon/hamburger-dark.svg";

import { useRouter } from "next/router";
// import Image from "next/image"
const Header = (props) => {
  const router = String(useRouter()?.asPath);
  const idAppend = router.split('/').join('_');

  const [open, setOpen] = useState(false);
  return (
    <header className={`${router.includes('/email-templates/') ? 'dark-header' : 'header'} d-flex`}>
      <div className="container d-flex align-items-center">
        <div className="logo">
           <Link prefetch={false}  href="/">
            <a title="Home Page">
              <img
                style={{maxWidth:"211px",maxHeight:"39px"}}
                src={`${router.includes('/email-templates/') ? ('/static/images/footer-logo.svg') :('/static/images/logo/logo-full.svg')}`}
                alt="mailmodo-logo-full"
              />
            </a>
          </Link>
        </div>
        <img
          className="hamburger"
          alt="mailmodo-hamburger"
          src={router.includes('/email-templates/') ? DarkBurger : Burger}
          onClick={() => setOpen(!open)}
        />
        <ul
          className={`${open ? "show" : null
            } menu list-unstyled d-md-flex w-100 align-items-center justify-content-center mobile-hide`}
        >
          {/* <li className="menuitem">
             <Link prefetch={false}  href="/features" onClick={() => setOpen(!open)}>
              <a title="Home Page">Features</a>
            </Link>
          </li> */}
          {/* <li className="menuitem">
             <Link prefetch={false}  href="/use-case">
              <a title="Home Page" onClick={() => setOpen(!open)}>
                Use Cases
              </a>
            </Link>
          </li> */}
          {/* <li className="menuitem">
             <Link prefetch={false}  href="/case-studies">
              <a title="Home Page" onClick={() => setOpen(!open)}>
                Case Studies
              </a>
            </Link>
          </li> */}
          <li className="menuitem">
             <Link prefetch={false}  href="/guides">
              <a title="Guides" onClick={() => setOpen(!open)}>
                Guides
              </a>
            </Link>
          </li>
          <li className="menuitem">
             <Link prefetch={false}  href="/pricing">
              <a title="Pricing" onClick={() => setOpen(!open)}>
                Pricing
              </a>
            </Link>
          </li>

          {/* <li className="menuitem">
            <a
              href="http://help.mailmodo.com/en/"
              title="Home Page"
              onClick={() => setOpen(!open)}
            >
              Help
            </a>
          </li> */}

          <li className="menuitem">
             <Link prefetch={false}  href="/email-templates">
              <a title="Templates" onClick={() => setOpen(!open)}>
                Templates
              </a>
            </Link>
          </li>

          <li className="menuitem">

            <a href="https://www.mailmodo.com/developers/" title="For Developers"  target="_blank" rel="noopener" >
              For Developers
            </a>

          </li>

          <li className="menuitem dropdown">
            <a style={{ cursor: "pointer" }} title="Product">

              <div className={"list_container"}>
                <span className={""}>Product</span>
                <img alt="downward chevron" className={"icon_img"} src="/static/images/down-arrow.svg"></img>
              </div>
            </a>
              <div className="dropdown-content">
                       <Link prefetch={false}  href="/features" onClick={() => setOpen(!open)}>
                        <a title="Features">Features</a>
                      </Link>
                       <Link prefetch={false}  href="/use-case">
                        <a title="Use Cases" onClick={() => setOpen(!open)}>
                          Use Cases
                        </a>
                      </Link>
                       <Link prefetch={false}  href="/case-studies">
                        <a title="Home Page" onClick={() => setOpen(!open)}>
                          Case Studies
                        </a>
                      </Link>
                      {/*  <Link prefetch={false}  href="/email-templates">
            <div class="dropdown-content">
               <Link prefetch={false}  href="/features" onClick={() => setOpen(!open)}>
                <a title="Features">Features</a>
              </Link>
               <Link prefetch={false}  href="/use-case">
                <a title="Use Cases" onClick={() => setOpen(!open)}>
                  Use Cases
                </a>
              </Link>
               <Link prefetch={false}  href="/case-studies">
                <a title="Home Page" onClick={() => setOpen(!open)}>
                  Case Studies
                </a>
              </Link>
              {/*  <Link prefetch={false}  href="/email-templates">
                        <a title="Templates" onClick={() => setOpen(!open)}>
                          Templates
                        </a>
                      </Link> */}
               <Link prefetch={false}  href="https://help.mailmodo.com/en/">
                <a title="Help" onClick={() => setOpen(!open)}>
                  Help
                </a>
              </Link>
            </div>
          </li>

          {/* <div class=" dropdown">
          <li className="menuitem">
            <a 
              style={{cursor:"pointer"}}
              title="Product"
            >
              Product
            </a>
          </li>
          <div class="dropdown-content">
                     <Link prefetch={false}  href="/features" onClick={() => setOpen(!open)}>
                      <a title="Home Page">Features</a>
                    </Link>
                    <li className="menuitem">
            <a
              href="http://help.mailmodo.com/en/"
              title="Home Page"
              onClick={() => setOpen(!open)}
            >
              Help
            </a>
          </li>
          </div>
</div> */}
          {/* <li className="menuitem call ml-auto">
          <li className="menuitem">
             <Link prefetch={false}  href="http://help.mailmodo.com/en/">
              <a title="Help" onClick={() => setOpen(!open)}  target="_blank" rel="noopener" >Help</a>
            </Link>
          </li>
          <li className="menuitem call ml-auto">
             <Link prefetch={false}  href="/" onClick={() => setOpen(!open)}>
              <a title="Home Page" href="tel:+12626002002<">
                <img
                  src="/static/images/icon/call-icon.svg"
                  alt="mailmodo-call-icon"
                />
                <span className="call-no">+1 262 600 2002</span>
              </a>
            </Link>
          </li> */}

        </ul>
        <ul className={`${open ? "show" : null
          } menu list-unstyled d-md-flex w-25 align-items-center justify-content-end mobile-hide`}>
          <li className="menuitem login ">
             <Link prefetch={false}  href="https://manage.mailmodo.com/">
              <a id={'login_nav' + idAppend} title="Home Page">Login</a>
            </Link>
          </li>
          <li className="menuitem signup">
             <Link prefetch={false}  href="https://manage.mailmodo.com/auth/signup">
              <a id={'signup_nav' + idAppend} title="Home Page">Sign up</a>
            </Link>
          </li>
        </ul>

        {/* Mobile only menu */}
        <ul
          className={`${open ? "show" : null
            } menu list-unstyled w-100 align-items-center  mobile-only`}
        >
          <li className="menuitem">
             <Link prefetch={false}  href="/features" onClick={() => setOpen(!open)}>
              <a title="Home Page">Features</a>
            </Link>
          </li>
          <li className="menuitem">
             <Link prefetch={false}  href="/use-case">
              <a title="Home Page" onClick={() => setOpen(!open)}>
                Use Cases
              </a>
            </Link>
          </li>
          <li className="menuitem">
             <Link prefetch={false}  href="/case-studies">
              <a title="Home Page" onClick={() => setOpen(!open)}>
                Case Studies
              </a>
            </Link>
          </li>
          <li className="menuitem">
             <Link prefetch={false}  href="/guides">
              <a title="Home Page" onClick={() => setOpen(!open)}>
                Guides
              </a>
            </Link>
          </li>
          <li className="menuitem">
             <Link prefetch={false}  href="https://www.mailmodo.com/developers/">
              <a title="Help" onClick={() => setOpen(!open)}>
                For Developers
              </a>
            </Link>
          </li>
          <li className="menuitem">
             <Link prefetch={false}  href="/pricing">
              <a title="Home Page" onClick={() => setOpen(!open)}>
                Pricing
              </a>
            </Link>
          </li>

          <li className="menuitem">
            <a
              href="https://help.mailmodo.com/en/"
              title="Home Page"
              onClick={() => setOpen(!open)}
            >
              Help
            </a>
          </li>

          {/* <li className="menuitem call ml-auto">
          <li className="menuitem">
             <Link prefetch={false}  href="http://help.mailmodo.com/en/">
              <a title="Help" onClick={() => setOpen(!open)}  target="_blank" rel="noopener" >Help</a>
            </Link>
          </li>
          <li className="menuitem call ml-auto">
             <Link prefetch={false}  href="/" onClick={() => setOpen(!open)}>
              <a title="Home Page" href="tel:+12626002002<">
                <img
                  src="/static/images/icon/call-icon.svg"
                  alt="mailmodo-call-icon"
                />
                <span className="call-no">+1 262 600 2002</span>
              </a>
            </Link>
          </li> */}
          <li className="menuitem login ml-auto">
             <Link prefetch={false}  href="https://manage.mailmodo.com/">
              <a id={'login_nav' + idAppend} title="Home Page">Login</a>
            </Link>
          </li>
          <li className="menuitem signup">
             <Link prefetch={false}  href="https://manage.mailmodo.com/auth/signup">
              <a id={'signup_nav' + idAppend} title="Home Page">Sign up</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
