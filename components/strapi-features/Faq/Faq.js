import React from 'react';
import styles from '../features.module.scss';
import  Space from 'antd/lib/space/index';
import 'antd/lib/space/style/index.css';
import Collapse from 'antd/lib/collapse/index';
import 'antd/lib/collapse/style/index.css';
import Icon from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import { getImageUrl } from '../../../lib/strapiApi';

const { Panel } = Collapse;
const FaqChevronSvg = () => (
    <svg width="15" height="9" viewBox="0 0 15 9" fill="none">
        <path d="M1 1.41602L7.5 7.60649L14 1.41602" stroke="#929292" stroke-width="2"/>
    </svg>
  );
const FaqChevronSvgIcon = props => <Icon component={FaqChevronSvg} {...props} />;


const Faq=(props)=>{
//console.log(props.content)
    return(
        <>
<div style={{backgroundColor:"#ffffff"}} className={styles.faq_fold}>
<h2 className={styles.heading+" mm-h2 "}>Frequently Asked Questions</h2>
<div className={styles.faq_container+" faq-fold-override"}>
<Space style={{width:"100%",gap:'11px'}} direction="vertical">
    {
        props.content.faqs.map((item,index)=>{
            return(
                <>
                <Collapse
 ghost className={styles.tab_body} bordered={false} expandIconPosition={"right"} >
<Panel  extra={FaqChevronSvgIcon()} showArrow={false} header={<span className={styles.tab_title+" mm-subtitle-1 "}>{item.question}</span>} key={index}>
    <p className={styles.tab_p+" mm-subtitle-2 "}>
    {item.answer}
    </p>
</Panel>
</Collapse>
                </>
            )
        } )
    }

</Space>
</div>

</div>
        </>
    )
}

export default Faq

