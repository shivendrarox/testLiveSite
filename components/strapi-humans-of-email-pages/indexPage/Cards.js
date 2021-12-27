import React, { useState, useContext, useEffect } from 'react';
import styles from '../../../assets/humans-of-email/styles-index.module.scss';
import Image from 'next/image'
//import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import Link from 'next/link'
import { Pagination } from 'antd';
import { DatePicker } from 'antd';
import Moment from "react-moment";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

//import { SettingsInputAntennaTwoTone } from '@material-ui/icons';


const Cards=({totalCards,totalPages,allCardsData})=>{
    const pageSize = 12;

    const [data,setData]=useState({
        data:allCardsData,
        sortedData:allCardsData,
        totalPage: allCardsData.length / pageSize,
        minIndex: 0,
        maxIndex: pageSize
      })
    const [selectedDate,setSelectedDate]=useState({})

      const handleChange = (page) => {
        setData({
            data:data.data,
            sortedData:data.sortedData,
            current: page,
            current: page,
            minIndex: (page - 1) * pageSize,
            maxIndex: page * pageSize,
            yo:"ef"
          })
      };

      const onDateChange= (date, dateString) => {
        // console.log(date, dateString);
        setSelectedDate({
            selectedDate: date,
            selectedDateString:dateString,
        })
        const sorted = data.data.filter((a) => (new Date(a.createdAt).getMonth() == new Date(date).getMonth())&&(new Date(a.createdAt).getFullYear() == new Date(date).getFullYear()) );

        setData({
            data:data.data,
            sortedData:sorted,
            current: data.current,
            minIndex: data.minIndex,
            maxIndex: data.maxIndex,
            yo:"ef"
          })
      };

      return(
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.Cards+" "}>

            {/* <div className={"container"}>
                <div className="row">
                <div className="col-md-12"><h2 className={styles.heading}>Advice to budding email marketers</h2></div>
                </div>

            </div> */}
            <div className="container">

                <div className="row">
                    {data?.sortedData?.map((item,index)=>{
                return index >= data.minIndex &&
                   index < data.maxIndex &&  (
                        <>
                                     <div key={index} className="col-md-4">
                    <Link passHref href={`/humans-of-email/${item.slug??" "}`}>
                        <a>
                    <div className={styles.card_item}>
                        {/* Card with cropped images */}
                        <div className={styles.card_img}>
                            {/* <img style={{width:"100%"}} src={"https://media.giphy.com/media/RLasFuaMhva126GScq/giphy.gif"}></img> */}
                            {item.Person?.image?.url &&
                                    <Image
                                    src={item.Person?.image?.url ??"https://res.cloudinary.com/mailmodo/image/upload/v1632463966/strapi/traffic_signs_361514_1920_fd83e3b51d.png"}
                                    height="200px"
                                    width="360px"
                                    layout="fixed"
                                    objectFit="none"
                                    />
                            }
                            {/*    width="150"
                                height="181" */}
                        </div>
                        <div className={styles.card_matter}>

                            <div className={styles.card_title}>
                            {item.Person?.Name??" "}
                            </div>

                            <div style={{width:"100%",maxWidth:"360px"}} className={styles.card_tag}>
                            {item.seo?.description??" "}
                            </div>
                            
                            <div className={styles.card_readmore} >
                                Read Story &#x2192;
                            </div>

                        </div>
                    </div>
                    </a>
                    </Link>
                </div>
                        </>
                        )
                    })}


                </div>

            </div>
            
            <div className="layout-padding"></div>
            <div style={{textAlign:"center"}}>
                <Pagination pageSize={pageSize}
            current={data.current}
            total={totalPages}
            onChange={handleChange} defaultCurrent={1} />
            </div>
          <div className="layout-gap"></div>

        </div>
        </>
    )
}

export default Cards

