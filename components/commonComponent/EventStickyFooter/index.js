import React, { useEffect, useState } from "react";
import moment from "moment";

const EventStickyFooter = () => {
  const [currentDate,setcurrentDate] = useState(moment(new Date()));//now
  const [eventDate,setEventDate] =  useState(moment('2021-10-22T13:00:00+00:00'));//Event in future

       //Floating CTA Logics
       const [floatingCTA, setFloatingCTA] = useState(false);
       useEffect(() => {
           window.addEventListener("scroll", handleScroll);
         });
         const handleScroll = (e) => {
           let box = document.getElementById("homepage-banner");
           // let width = box.offsetWidth;
           let height = box?.offsetHeight;
           if (window.scrollY > 400) setFloatingCTA(true);
           else setFloatingCTA(false);
         };
       //Floating CTA Logics END

  return (
    <>
   

            {/* Floating CTA */}
            <div className="sticky-event">
                <div className={`cta-email ${floatingCTA && "floating-cta"}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-2 align-self-center" ><div className="cta_badge"><span>LIVE</span></div></div>
                            <div className=" col-sm-12 col-md-7 align-self-center" ><div className={'cta_msg'} ><p>Webinar on 'AMP Email: The Future of Email Marketing' is happening. </p> {(eventDate.diff(currentDate, 'days') > 0) ? <p style={{fontSize:"13px",fontWeight:"400"}}>Less than {eventDate.diff(currentDate, 'days')} {eventDate.diff(currentDate, 'days')==1?'day':'days'} before we go live</p>:<p style={{fontSize:"13px",fontWeight:"400"}} >Today</p>}</div></div>
                            <div className="col-sm-12 col-md-3  align-self-center"><a href="/events/jay-oram/?utm_source=Website&utm_medium=Banner&utm_campaign=That-Email-Show"><button className="cta_btn" >Register now</button></a></div>
                        </div>
                    </div>
                </div>
     
            </div>
             {/* Floating CTA  END*/}
     
    </>
  );
};

export default EventStickyFooter;
