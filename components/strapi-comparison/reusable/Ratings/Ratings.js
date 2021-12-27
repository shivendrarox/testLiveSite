import styles from '../../comparison.module.scss';import React, { useState } from 'react';

import { getImageUrl } from '../../../../lib/strapiApi';



const Ratings = (props) => {
    return (
        <>
            <div style={{ backgroundColor: "#20C58B" }} className={styles.spacing+" "+styles.Ratings}>
                <h2>What product experts say about Mailmodo</h2>

                <div className={styles.container}>

               
                    <div className={styles.card}>

                        {/* <h3 className={styles.desc}>G2</h3> */}
                        {/* <p><span>5</span>/5</p> */}

                        {/* <div className={styles.row}>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                        </div> */}
                      <a class="x-g2-link-product" href="https://www.g2.com/products/mailmodo/reviews" title= "Mailmodo Review on G2"> <img src="/static/images/strapi-pages/comparison/G2.svg" className={""}></img> </a>
                    </div>
                    
                    <div className={styles.card}>
                    {/* <img src="/static/images/strapi-pages/comparison/ph.svg" className={styles.logo}></img> */}
                        {/* <h3 className={styles.desc}>ProductHunt</h3> */}
                        {/* <p><span>4.8</span>/5</p> */}

                        {/* <div className={styles.row}>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                        </div> */}
                    <a href="https://www.producthunt.com/posts/mailmodo?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-mailmodo"  target="_blank" rel="noopener" ><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=281327&theme=light&period=daily" alt="Mailmodo - Boost email conversions with interactive AMP emails. | Product Hunt"  width="90%" height="auto" /></a>                      
                    </div>
                   
                    <div className={styles.card}>
                    {/* <img src="/static/images/strapi-pages/comparison/getapp.svg" className={styles.logo}></img> */}
                        {/* <h3 className={styles.desc}>GetApp</h3> */}
                        {/* <p><span>4.6</span>/5</p> */}

                        {/* <div className={styles.row}>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                        </div>
                       */}
                        <a href="https://www.getapp.com/customer-management-software/a/mailmodo/reviews/"> <img border="0" src="https://www.getapp.com/ext/reviews_widget/v1/dark/mailmodo-application"  width="auto" height="auto" /> </a>
                    </div>
                   
                    <div className={styles.card}>
                    {/* <img src="/static/images/strapi-pages/comparison/capterra.svg" className={styles.logo}></img> */}
                        {/* <h3 className={styles.desc}>Capterra</h3> */}
                        {/* <p><span>4.5</span>/5</p> */}

                        {/* <div className={styles.row}>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                            <div class={styles.column}>
                                <img src="/static/images/strapi-pages/Comparison/Star.svg" className={styles.star}></img>
                            </div>
                        </div> */}
                         <a href="https://www.capterra.com/reviews/213295/Mailmodo?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge"> <img border="0" src="https://assets.capterra.com/badge/d797f30e19d2f200efdba000aec80bb5.png?v=2153538&p=213295" width="auto" height="auto" /> </a>
                      
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Ratings;

