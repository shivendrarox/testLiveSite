import React from 'react'
import {useRouter}  from 'next/router'
import Link from 'next/link';
import styles from './Breadcrumb.module.scss'
import { BreadcrumbJsonLd } from 'next-seo';

const Breadcrumb = ({showHomePath=true,showCurrentPath=true})=> {
const completePath= useRouter().asPath.split("/")
//.slice(1,completePath.length-1)//excluding empty string items from beginning and the last item of array

const breadcrumbItemsArr = []
const seoBreadcrumbArr = []

completePath.slice((showHomePath?0:1),(showCurrentPath?completePath.length-1:completePath.length-2)).map((item,index)=>{
    breadcrumbItemsArr.push({
        name: item===''?"Home":item,
        breadcrumbUrl:completePath.slice(0,index+1).join('/')+"/"
    })
})

completePath.slice(0,completePath.length-1).map((item,index)=>{
    seoBreadcrumbArr.push({
        position:index+1,
        name: item===''?"Home":item,
        item:"https://www.mailmodo.com"+completePath.slice(0,index+1).join('/')+"/"
    })
})


        return (
            <nav className={styles.breadcrumb_wrapper} aria-label="breadcrumb">
    <BreadcrumbJsonLd
      itemListElements={seoBreadcrumbArr}
    />
                <ol className={styles.breadcrumb}>
                    {breadcrumbItemsArr.map((item, index) => (
                        <li className={styles.breadcrumb_item} key={index}>
                                 <Link passHref href={item.breadcrumbUrl}>
                                    {(index == breadcrumbItemsArr.length-1)?<a title={item.name} disabled >{item.name}</a>:<a title={item.name} >{item.name}</a>}
                                </Link>
                            <img hidden={(index == breadcrumbItemsArr.length-1)?true:false} alt="breadcrumb arrow" title="breadcrumb arrow icon" src="/static/images/icon/breadcrumb-arrow.svg"/>
                        </li>
                    ))}
                </ol>
            </nav>
        );
 
}

export default Breadcrumb;