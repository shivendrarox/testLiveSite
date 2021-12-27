import React from 'react';
import Iframe from 'react-iframe'
import styles from '../../comparison.module.scss';
import Link from 'next/link'
import GoogleSignupButton from "../GoogleButton/index";
import SignupButton from "../SignupButton/index";
import {  getImageUrl  } from '../../../../lib/strapiApi'
import Markdown from 'markdown-to-jsx';


const Hero = (props) => {
    return (
        <>
            <div style={{backgroundColor:"#ffff"}} className={styles.spacing+" "+styles.hero}>
                <h1 className={styles.heading}>{props.content?.title??" "} </h1>
                <p className={styles.hero_p+" "}>{props.content?.description??" "}</p> 

                 <div className={styles.img_cont+" container"}>
                    <div className="row">
                        <div style={{borderRight:"0.5px solid #484848"}} className=" col-6">
                            <img src="/static/images/strapi-pages/comparison/mm.svg" className={styles.hero_img_left}></img>
                        </div>


                        <div style={{borderLeft:"0.5px solid #484848"}} className=" col-6">
                        <img src={getImageUrl(props.content?.CompetitorLogo?.url??" ")} className={styles.hero_img_right}></img>
                        </div>
                    </div>
                </div> 

                <p className={styles.hero_p}>
                    {props.content?.cta?.description??" "}
                </p>
                <Link href={props.content?.cta?.link??"https://manage.mailmodo.com/auth/signup"}><button className={styles.cta_btn}>{props.content?.cta?.text??" "}</button></Link>
                <div className="container">
                    <div className="row">
                    <div className="col-md-4 mb-5">
                            <div className={styles.card_left}>
                                <h2 className={styles.card_heading}>
                                    {props.content.cards?.title??""}
                                </h2>
                                <div className={styles.desc+" "+styles.card_desc}>
                                <Markdown>
                                {props.content.cards?.description??""}
                                </Markdown>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4  mb-5">
                        <div className={styles.card}>
                                <img className={styles.card_img} src={"/static/images/strapi-pages/comparison/mm.svg"}></img>
              
                                <div className={styles.desc+" "+styles.card_desc}>
                                <Markdown>
                                {props.content.cards?.MailmodoText??""}
                                </Markdown>
                                 </div>

                            </div>
                        </div>
                        <div className="col-md-4  mb-5">
                            <div className={styles.card}>
                            <img className={styles.card_img} src={getImageUrl(props.content?.CompetitorLogo?.url??" ")}></img>
 
                            <div className={styles.desc+" "+styles.card_desc}>
                                <Markdown>
                                {props.content.cards?.CompetitorText??""}
                                </Markdown>
                            </div>
                          </div>
                        </div>

                    </div>
                </div>            
            </div>
        </>
    );
}

export default Hero