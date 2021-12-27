import styles from "./part1.module.scss";
import Ticker from "react-ticker";
import TabCarousel from "../../../components/home/TabCarousel/TabCarousel";
import Tabs  from 'antd/lib/tabs/index';
import 'antd/lib/tabs/style/index.css'
import Image from 'next/image';
import Link from 'next/link';

const { TabPane } = Tabs;

const Part1 = (props) => {
    return (
        <>


<div className={styles.brands_fold}>

<Ticker
direction="toLeft"
offset="-100%"
>
{({ index }) => (
<>
<Image
alt="Ticker image"
     src="https://res.cloudinary.com/mailmodo/image/upload/q_50,f_webp/v1637587085/strapi/brands_d8f919f839.png"
     height="70"
     width="2696"
     layout="fixed"
    />
</>
)}
</Ticker>

</div>

<div className={styles.tabs_fold + " tab-section"}>
    <h2 className={styles.heading}>A single platform to create, send and automate</h2>
    <div className="container">
        <div className={styles.desktop_only}>
        <Tabs defaultActiveKey="1" centered>
            <TabPane tab={<div className={styles.tab_head}><div><img loading="lazy" alt="tab icon" src="/static/images/home/tab_icon_pencil.svg"></img></div> <div className={styles.tab_head_heading}>Design email in minutes,<br/> without coding</div></div>} key="1">
                <h3 className={styles.tab_item_heading}>Create both AMP & HTML emails with a no-code drag-and-drop editor.</h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Image
                    alt="tab 1 image"
                        className={styles.shadow_class}
                        height="562"
                        width="947"
                        src={('https://res.cloudinary.com/mailmodo/image/upload/v1637247216/strapi/1_1_85737e0d22.png')}
                    />
                </div>
                <div style={{paddingTop:"6rem"}}></div>
            </TabPane>

            <TabPane tab={<div className={styles.tab_head}><div><img loading="lazy" alt="tab icon" src="/static/images/home/layers.svg"></img></div> <div className={styles.tab_head_heading}>Import, segment and <br/> manage contact list</div></div>} key="2">
            <h3 className={styles.tab_item_heading}> Add unlimited contacts at no extra cost with advanced segmentation and filtering.</h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Image
                    alt="tab 2 image"
                        height="562"
                        width="947"
                        src={('https://res.cloudinary.com/mailmodo/image/upload/v1637247355/strapi/2_2_bc7f005ae2.png')}
                    />
                </div>
                <div style={{paddingTop:"6rem"}}></div>
            </TabPane>

            <TabPane tab={<div className={styles.tab_head}><div><img loading="lazy" alt="tab icon" src="/static/images/home/file-plus.svg"></img></div> <div className={styles.tab_head_heading}>Send bulk, triggered <br/> or automated emails</div></div>} key="4">
            <h3 className={styles.tab_item_heading}>Build and customize email campaigns for all your business requirements.</h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Image
                                                    alt="tab 3 image"
                        height="562"
                        width="947"
                        src={('https://res.cloudinary.com/mailmodo/image/upload/v1637247462/strapi/4_1_fe3754d38d.png')}
                    />
                </div>
                <div style={{paddingTop:"6rem"}}></div>
            </TabPane>

            <TabPane tab={<div className={styles.tab_head}><div><img loading="lazy" alt="tab icon" src="/static/images/home/send.svg"></img></div> <div className={styles.tab_head_heading}>Create automated <br/> email flows and journeys</div></div>} key="3">
            <h3 className={styles.tab_item_heading}>Build engaging email journeys with a range of triggers and integrations.</h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Image
                                                    alt="tab 4 image"
                       height="562"
                       width="947"
                       src={"https://res.cloudinary.com/mailmodo/image/upload/v1637247414/strapi/3_2_4282ddf575.png"}
                    />
                </div>
                <div style={{paddingTop:"6rem"}}></div>
            </TabPane>
        </Tabs>
        </div>
        <div className={styles.hide_mobile+" carousel-banner"}>
        <TabCarousel />
        </div>
    </div>
      {/* DONE: link to feature page:https://www.mailmodo.com/features/ */}
      <Link prefetch={false} href="/features/">
        <button className="mm-primary-btn m-auto">Explore all the features</button>
        </Link>
</div>
        </>
    );
};

export default Part1;