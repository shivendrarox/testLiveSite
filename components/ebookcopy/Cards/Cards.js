import React, { useState, useContext, useEffect } from 'react';
import styles from '../ebook.module.scss';
import Image from 'next/image'
//import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import Link from 'next/link'
import { Pagination } from 'antd';
import { DatePicker } from 'antd';
import Moment from "react-moment";
//import { SettingsInputAntennaTwoTone } from '@material-ui/icons';


const Cards=({ allCardsData,totalNewsletters,totalPages})=>{
    const pageSize = 12;
    allCardsData = [
        {
          "_id": "6144b6bebde6380039d7b959",
          "slug": "email-performance",
          "PublishedOn": "2021-09-05",
          "renderUrl": "https://youtu.be/zsJUbvwjBWk?t=1",
          "title": "A Step-by-Step Guide to Improve Email Performance",
          "description": "Read between the lines of your email metrics and gauge the success of your marketing campaigns with this curated guide",
          "createdAt": "2021-09-17T15:39:42.276Z",
          "updatedAt": "2021-10-05T11:59:05.735Z",
          "__v": 0,
          "created_by": {
            "_id": "5f783c20a9df1c00385c7072",
            "username": null,
            "firstname": "Content",
            "lastname": "Manager",
            "createdAt": "2020-10-03T08:53:52.127Z",
            "updatedAt": "2020-10-03T08:55:45.624Z",
            "__v": 0,
            "id": "5f783c20a9df1c00385c7072"
          },
          "updated_by": {
            "_id": "5f783c20a9df1c00385c7072",
            "username": null,
            "firstname": "Content",
            "lastname": "Manager",
            "createdAt": "2020-10-03T08:53:52.127Z",
            "updatedAt": "2020-10-03T08:55:45.624Z",
            "__v": 0,
            "id": "5f783c20a9df1c00385c7072"
          },
          "thumbnail": {
            "_id": "612ddf973f4fc6003550a1a4",
            "name": "chase-dimond-ecommerce.png",
            "alternativeText": "",
            "caption": "",
            "hash": "cover_36294ec955",
            "ext": ".png",
            "mime": "image/png",
            "size": 414.68,
            "width": 1281,
            "height": 720,
            "url": "https://res.cloudinary.com/mailmodo/image/upload/v1632462792/strapi/ogg_0cdf4621c5.png",
            "provider_metadata": {
              "public_id": "strapi/cover_36294ec955",
              "resource_type": "image"
            },
            "formats": {
              "thumbnail": {
                "name": "thumbnail_cover.png",
                "hash": "thumbnail_cover_36294ec955",
                "ext": ".png",
                "mime": "image/png",
                "width": 245,
                "height": 138,
                "size": 34.67,
                "path": null,
                "url": "https://res.cloudinary.com/mailmodo/image/upload/v1630396305/strapi/thumbnail_cover_36294ec955.png",
                "provider_metadata": {
                  "public_id": "strapi/thumbnail_cover_36294ec955",
                  "resource_type": "image"
                }
              },
              "large": {
                "name": "large_cover.png",
                "hash": "large_cover_36294ec955",
                "ext": ".png",
                "mime": "image/png",
                "width": 1000,
                "height": 562,
                "size": 379.6,
                "path": null,
                "url": "https://res.cloudinary.com/mailmodo/image/upload/v1630396309/strapi/large_cover_36294ec955.png",
                "provider_metadata": {
                  "public_id": "strapi/large_cover_36294ec955",
                  "resource_type": "image"
                }
              },
              "medium": {
                "name": "medium_cover.png",
                "hash": "medium_cover_36294ec955",
                "ext": ".png",
                "mime": "image/png",
                "width": 750,
                "height": 422,
                "size": 228.48,
                "path": null,
                "url": "https://res.cloudinary.com/mailmodo/image/upload/v1630396310/strapi/medium_cover_36294ec955.png",
                "provider_metadata": {
                  "public_id": "strapi/medium_cover_36294ec955",
                  "resource_type": "image"
                }
              },
              "small": {
                "name": "small_cover.png",
                "hash": "small_cover_36294ec955",
                "ext": ".png",
                "mime": "image/png",
                "width": 500,
                "height": 281,
                "size": 112.56,
                "path": null,
                "url": "https://res.cloudinary.com/mailmodo/image/upload/v1630396311/strapi/small_cover_36294ec955.png",
                "provider_metadata": {
                  "public_id": "strapi/small_cover_36294ec955",
                  "resource_type": "image"
                }
              }
            },
            "provider": "cloudinary",
            "related": [
              "6144b6bebde6380039d7b959"
            ],
            "createdAt": "2021-08-31T07:51:51.658Z",
            "updatedAt": "2021-09-17T15:40:53.903Z",
            "__v": 0,
            "created_by": "5f783c20a9df1c00385c7072",
            "updated_by": "5f783c20a9df1c00385c7072",
            "id": "612ddf973f4fc6003550a1a4"
          },
          "id": "6144b6bebde6380039d7b959"
        },
        {
          "_id": "615c3e068bd6af00348153d7",
          "slug": "subject-line",
          "title": "Email Subject Lines for the Win",
          "description": "How to Focus on the Long Game and Turn Opens into Conversions",
          "details": "How to Focus on the Long Game and Turn Opens into Conversions",
          "createdAt": "2021-10-05T11:59:02.607Z",
          "updatedAt": "2021-10-05T12:00:13.310Z",
          "__v": 0,
          "created_by": {
            "_id": "5f783c20a9df1c00385c7072",
            "username": null,
            "firstname": "Content",
            "lastname": "Manager",
            "createdAt": "2020-10-03T08:53:52.127Z",
            "updatedAt": "2020-10-03T08:55:45.624Z",
            "__v": 0,
            "id": "5f783c20a9df1c00385c7072"
          },
          "thumbnail": {
            "_id": "615c37888bd6af00348153d6",
            "name": "Webinar- 16th Sep (1).jpg",
            "alternativeText": "",
            "caption": "",
            "hash": "Webinar_16th_Sep_1_c242e6e6c5",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "size": 199.15,
            "width": 2560,
            "height": 1440,
            "url": "https://mm-strapi-4.azurewebsites.net//uploads/ogg_1_09aba6b667.jpg",
            "provider_metadata": {
              "public_id": "strapi/Webinar_16th_Sep_1_c242e6e6c5",
              "resource_type": "image"
            },
            "formats": {
              "thumbnail": {
                "name": "thumbnail_Webinar- 16th Sep (1).jpg",
                "hash": "thumbnail_Webinar_16th_Sep_1_c242e6e6c5",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 245,
                "height": 138,
                "size": 6.71,
                "path": null,
                "url": "https://res.cloudinary.com/mailmodo/image/upload/v1633433470/strapi/thumbnail_Webinar_16th_Sep_1_c242e6e6c5.jpg",
                "provider_metadata": {
                  "public_id": "strapi/thumbnail_Webinar_16th_Sep_1_c242e6e6c5",
                  "resource_type": "image"
                }
              },
              "large": {
                "name": "large_Webinar- 16th Sep (1).jpg",
                "hash": "large_Webinar_16th_Sep_1_c242e6e6c5",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 1000,
                "height": 563,
                "size": 53.92,
                "path": null,
                "url": "https://res.cloudinary.com/mailmodo/image/upload/v1633433478/strapi/large_Webinar_16th_Sep_1_c242e6e6c5.jpg",
                "provider_metadata": {
                  "public_id": "strapi/large_Webinar_16th_Sep_1_c242e6e6c5",
                  "resource_type": "image"
                }
              },
              "medium": {
                "name": "medium_Webinar- 16th Sep (1).jpg",
                "hash": "medium_Webinar_16th_Sep_1_c242e6e6c5",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 750,
                "height": 422,
                "size": 35.65,
                "path": null,
                "url": "https://res.cloudinary.com/mailmodo/image/upload/v1633433479/strapi/medium_Webinar_16th_Sep_1_c242e6e6c5.jpg",
                "provider_metadata": {
                  "public_id": "strapi/medium_Webinar_16th_Sep_1_c242e6e6c5",
                  "resource_type": "image"
                }
              },
              "small": {
                "name": "small_Webinar- 16th Sep (1).jpg",
                "hash": "small_Webinar_16th_Sep_1_c242e6e6c5",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 500,
                "height": 281,
                "size": 19.94,
                "path": null,
                "url": "https://res.cloudinary.com/mailmodo/image/upload/v1633433480/strapi/small_Webinar_16th_Sep_1_c242e6e6c5.jpg",
                "provider_metadata": {
                  "public_id": "strapi/small_Webinar_16th_Sep_1_c242e6e6c5",
                  "resource_type": "image"
                }
              }
            },
            "provider": "cloudinary",
            "related": [
              "615c3e068bd6af00348153d7"
            ],
            "createdAt": "2021-10-05T11:31:20.508Z",
            "updatedAt": "2021-10-05T11:59:02.699Z",
            "__v": 0,
            "created_by": "5f783c20a9df1c00385c7072",
            "updated_by": "5f783c20a9df1c00385c7072",
            "id": "615c37888bd6af00348153d6"
          },
          "updated_by": {
            "_id": "5f783c20a9df1c00385c7072",
            "username": null,
            "firstname": "Content",
            "lastname": "Manager",
            "createdAt": "2020-10-03T08:53:52.127Z",
            "updatedAt": "2020-10-03T08:55:45.624Z",
            "__v": 0,
            "id": "5f783c20a9df1c00385c7072"
          },
          "PublishedOn": "2021-09-16",
          "renderUrl": "https://www.youtube.com/watch?v=spc9wfP-VOE&t=16s",
          "id": "615c3e068bd6af00348153d7"
        },
      ]
    const [data,setData]=useState({
            data:allCardsData.reverse(),//logic to show recent posts first
            sortedData:allCardsData,
            totalPage: allCardsData.length / pageSize,
            minIndex: 0,
            maxIndex: pageSize
    })
    const [selectedDate,setSelectedDate]=useState({})


   /*  useEffect(() => {
        fetch("https://mm-strapi-4.azurewebsites.net/webinars/")
        .then((response) => response.json())
        .then((data) =>
          setData({
            data:data,
            sortedData:data,
            totalPage: data.length / pageSize,
            minIndex: 0,
            maxIndex: pageSize
          })
        );

      },[]); */

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
                <div className="col-md-6"><span className={styles.heading}>Explore videos</span></div>
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
                    <Link passHref href={`/ebook/${item.slug??" "}`}>
                    <a>
                    <div className={styles.card_item}>
                        <div className={styles.card_img}>
                            {/* <img style={{width:"100%"}} src={"https://media.giphy.com/media/RLasFuaMhva126GScq/giphy.gif"}></img> */}
                            <Image
                                src={item.thumbnail?.url??"https://res.cloudinary.com/mailmodo/image/upload/v1632463966/strapi/traffic_signs_361514_1920_fd83e3b51d.png"}
                                width="304"
                                height="176"
                                layout="responsive"
                            />
                        </div>
                        <div className={styles.card_matter}>

                            <div className={styles.card_title}>
                                {item.title??" "}
                            </div>

                            <div className={styles.card_tag}>
                            <Moment format="DD MMMM, YYYY" parse="YYYY-MM-DD">{item.PublishedOn??" "}</Moment>
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

