import React, { Component, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link';
import styles from './resourceBar.module.scss'

class ResourceBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            changeClass: false
        }
    }

    componentDidMount() {
        // 
        if(Router.asPath.includes('/template/')){
             this.setState({darkClass:'dark-breadcrumb'});
         }

         if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
              this.setState({changeClass:window.pageYOffset > 150})
            );
          }
    }

    // routeChangeHandler(path) {
    //     if(path[path.length-1] !== "/"){
    //         path = path +'/'
    //     }
    //     let here = path.split('/').slice(1);

    //     let parts = [{ "text": 'Home', "link": '/', active: true }];

    //     if (here && here.length && here[0]) {
    //         parts[0].active = false;
    //         for (let i = 0; i < here.length; i++) {
    //             let part = here[i];
    //             let text = part.charAt(0).toUpperCase() + part.slice(1);
    //             let link = '/' + here.slice(0, i + 1).join('/');
    //             if (i === here.length - 1) {
    //                 parts.push({ "text": text, "link": link, active: true });
    //                 // document.getElementById('last-link').disabled = true
    //             } else {
    //                 parts.push({ "text": text, "link": link, active: false });
    //             }

    //         }
    //     }
    //     this.setState({ breadcrumbs: parts });
    // }

    render() {
        let { breadcrumbs } = this.state;

        const test = [1,2,3,4]
        return (<>
        <div className="layout-padding"></div>
        <div className={styles.sticky_wrap+" "+styles.sticky+" "+(this.state.changeClass?styles.onSticky:"")} style={{width:"100%"}}>
        <div className={"container "}>
        <nav className={styles.breadcrumb_wrapper+`   ${this.state.darkClass??''}`} aria-label="breadcrumb">
                <ol className={styles.breadcrumb}>
                    {test.map((item, index) => (
                        <li className={(index==0)?styles.breadcrumb_item:styles.item_selected} key={index}>
                        <Link href={" "}>
                                <a href="">{'Item '+item}</a>
                        </Link>
                        </li>
                    ))}
                </ol>
            </nav>

        </div>
 
        </div>
   
</>);
    }
}

export default ResourceBar;