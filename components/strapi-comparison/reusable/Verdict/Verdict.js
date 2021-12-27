import React from 'react';
import Markdown from 'markdown-to-jsx';
import styles from '../../comparison.module.scss';import Link from 'next/link'
import GoogleSignupButton from "../GoogleButton/index";
import SignupButton from "../SignupButton/index";
import { getImageUrl } from '../../../../lib/strapiApi'
import BlackCta from '../BlackCta/BlackCta';

const Verdict = (props) => {

    return (
        <>
            <div style={{ backgroundColor: "#ffff" }} className={styles.spacing+" "+styles.Verdict}>
                <h2>{props.content?.title??""}</h2>
                <p className={styles.desc}>
                    {props.content?.subTitle??""}
                </p>

                <div className="container">
                    <div className="row">
                        <div className={styles.left + " col-md-6"}>
                            <img src="/static/images/strapi-pages/comparison/mm.svg" className={styles.compare_img}></img>

                            <div className={styles.compare_list}>
                            <Markdown>{props.content?.MailmodoText??""}</Markdown>
                            </div>
                        </div>
                        <div className={styles.right + " col-md-6"}>
                            <img src={getImageUrl(props.CompetitorLogo?.url??"")} className={styles.compare_img}></img>

                            <div className={styles.compare_list}>
                            <Markdown>{props.content?.CompetitorText??""}</Markdown>
                            </div>

                        </div>
                    </div>

                </div>

                {props.content.cta && <BlackCta link={props.content?.cta?.link??""} btn_text={props.content?.cta?.text??" "} text={props.content?.cta?.description??""} />
                }            
        </div>
        </>
    )

}

export default Verdict;