import React, { useState, useContext, useEffect } from 'react';
import styles from '../video-menu.module.scss';
import Image from 'next/image'
//import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import Link from 'next/link'
import { Pagination } from 'antd';
import { DatePicker } from 'antd';
import Moment from "react-moment";
//import { SettingsInputAntennaTwoTone } from '@material-ui/icons';


const Cards=({allCardsData,totalNewsletters,totalPages})=>{
    const pageSize = 12;

    const [data,setData]=useState({
        data:allCardsData,
        sortedData:allCardsData,
        totalPage: allCardsData.length / pageSize,
        minIndex: 0,
        maxIndex: pageSize
      })
    const [selectedDate,setSelectedDate]=useState({})


    // useEffect(() => {
    //     fetch("https://mm-strapi-4.azurewebsites.net/podcasts/")
    //     .then((response) => response.json())
    //     .then((data) =>
    //       setData({
    //         data:data,
    //         sortedData:data,
    //         totalPage: data.length / pageSize,
    //         minIndex: 0,
    //         maxIndex: pageSize
    //       })
    //     );
    //   },[]);

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
        console.log(date, dateString);
        setSelectedDate({
            selectedDate: date,
            selectedDateString:dateString,
        })
        const sorted = data.data.filter((a) => (new Date(a.PublishedOn).getMonth() == new Date(date).getMonth())&&(new Date(a.PublishedOn).getFullYear() == new Date(date).getFullYear()) );

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
            <div className="layout-gap"></div>

            <div className={"container"}>
                <div className="row">
                <div className="col-md-6"><span className={styles.heading}>Explore all episodes</span></div>
                <div className="col-md-6"><span className={styles.date_container}><DatePicker onChange={onDateChange} picker="month" /></span></div>
                </div>

            </div>
            <div className="layout-padding"></div>
            <div className="container">

                <div className="row">
                    {data?.sortedData?.map((item,index)=>{
                return index >= data.minIndex &&
                   index < data.maxIndex &&  (
                        <>
                                     <div key={index} className="col-md-4">
                    <Link passHref href={`/podcast/${item.slug??" "}`}>
                        <a>
                    <div className={styles.card_item}>
                        <div className={styles.card_img}>
                            {/* <img style={{width:"100%"}} src={"https://media.giphy.com/media/RLasFuaMhva126GScq/giphy.gif"}></img> */}
                            <Image
                                src={item.thumbnail?.url??"https://res.cloudinary.com/mailmodo/image/upload/v1632463966/strapi/traffic_signs_361514_1920_fd83e3b51d.png"}
                                width="60"
                                height="60"
                                layout="responsive"
                            />
                        </div>
                        <div className={styles.card_matter}>

                            <div className={styles.card_title}>
                                {item.title??" "}
                            </div>

                            <div className={styles.card_tag}>
                            <Moment format="DD MMMM, YYYY" parse="YYYY-MM-DD">{item.createdAt??" "}</Moment>
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

