import React, { Component, } from 'react'
import Router from 'next/router'
import Link from 'next/link';
import styles from './Breadcrumb.module.scss'

class Breadcrumb extends Component {

    constructor(props) {
        super(props);
        this.state = {
            breadcrumbs: [],
            breadcrumbDepth:this.props.breadcrumbDepth??3,
        }
    }

    componentDidMount() {

        this.routeChangeHandler(Router.asPath);
        Router.events.on('routeChangeStart', (url) => {
            this.routeChangeHandler(url);
            // NProgress.start()
            // let breadcrumbs = url. 
        })
        Router.events.on('routeChangeComplete', () => {
            // NProgress.done()
        })
        Router.events.on('routeChangeError', () => {
            // NProgress.done()
        })

        // 
        if(Router.asPath.includes('/template/')){
             this.setState({darkClass:'dark-breadcrumb'});
         }
 
    }

    routeChangeHandler(path) {
        if(path[path.length-1] !== "/"){
            path = path +'/'
        }
        let here = path.split('/').slice(1);

        let parts = [{ "text": 'Home', "link": '/', active: true }];

        if (here && here.length && here[0]) {
            parts[0].active = false;
            for (let i = 0; i < here.length-1; i++) {
                let part = here[i];
                let text = part.charAt(0).toUpperCase() + part.slice(1);
                let link = '/' + here.slice(0, i + 1).join('/');
                if (i === here.length - 1) {
                    parts.push({ "text": text, "link": link, active: true });
                    // document.getElementById('last-link').disabled = true
                } else {
                    parts.push({ "text": text, "link": link, active: false });
                }

            }
        }

        // this.setState({ breadcrumbs: parts.slice(0,this.state.breadcrumbDepth) });
        this.setState({ breadcrumbs: parts.slice(1,this.state.breadcrumbDepth) });

    }
    render() {
        let { breadcrumbs } = this.state;

        return (
            <nav className={styles.breadcrumb_wrapper+`  ${this.state.darkClass??''}`} aria-label="breadcrumb">

                <ol className={styles.breadcrumb}>
                    {breadcrumbs.map((item, index) => (
                        <li className={styles.breadcrumb_item} key={index}>
                                {//<p disabled={item.active ? true : false}>{(index == 2)?this.props.blogTitle:item.text}</p>
                                }
                                 <Link href={item.link}>
                                    {(index == breadcrumbs.length-1)?<a disabled >{item.text}</a>:<a disabled={item.active ? true : false}>{item.text}</a>}
                                </Link>
                            <img hidden={(index == breadcrumbs.length-1)?true:false} alt="breadcrumb arrow" title="breadcrumb arrow icon" src="/static/images/icon/breadcrumb-arrow.svg"/>
                        </li>
                    ))}
                    {/* <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Guides</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Data</li> */}
                </ol>
            </nav>
        );
    }
}

export default Breadcrumb;