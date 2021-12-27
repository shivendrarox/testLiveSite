import React from 'react';

import styles from '../../comparison.module.scss';import Link from 'next/link'
import GoogleSignupButton from "../GoogleButton/index";
import SignupButton from "../SignupButton/index";
import { getImageUrl } from '../../../../lib/strapiApi'
import Markdown from 'markdown-to-jsx';
import BlackCta from '../BlackCta/BlackCta';

const ListBox = (props) => {

    return (
        <>
            <div style={{ backgroundColor: "#E7FFF6" }} className={styles.spacing+" "+styles.ListBox}>

                <div className="container">
                    <div className="row">
                    <div className={"col-md-6 "}>
                   {/** H2 */}
                   <h2>{props.content?.title??""}</h2>
                   {/** H2 ends*/}
                   <div className={styles.card_container+" "}>
                        <div className={styles.card+" pl-5 pr-5"}>
                            <h3 className={styles.heading+" "}>
                            {props.content?.testimonial?.title??""}
                            </h3>
                            <p className={styles.desc+" "}>
                            {props.content?.testimonial?.description??""}
                            </p>
                        </div>
                            <img className={styles.round_img+" mt-5"} src="https://www.mailmodo.com/static/images/Subhash_Dash.png"></img>
                            <h4 className={styles.img_name+" mt-2"}>{props.content?.testimonial?.name??""}</h4>
                            <p className={styles.img_desc+" mt-1 mb-3"}>{props.content?.testimonial?.designation??""}</p>
                    </div>
                    
                    {/* <img className={styles.section_img} src="/static/images/strapi-pages/comparison/mm.svg"></img> */}
                    
                   </div>
                    <div className="col-md-6">
                    <p className={styles.desc}>
                        {props.content?.subTitle??""}
                    </p>
                    <div className={styles.section_list}>
                        <Markdown>{props.content?.description??""}</Markdown>
                    </div>

                   </div>

                    </div>
  
           
                </div>

                {props.content.cta && <BlackCta link={props.content?.cta?.link??""} btn_text={props.content?.cta?.text??" "} text={props.content?.cta?.description??""} />}


            </div>
        </>
    )

}

export default ListBox;