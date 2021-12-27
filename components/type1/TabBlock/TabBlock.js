import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import styles from '../type1.module.scss';
import Iframe from 'react-iframe';
import Link from 'next/link';
import { getVideoUrl } from '../../../lib/strapiApi';
const TabBlock = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.TabBlock+" "}>
        <h2 className={styles.heading+" mt-3 mb-5"}>AMP Email use cases</h2>
      <Nav tabs className={styles.tabs_override}>
        <NavItem className={(activeTab === '1' && styles.active_overide )}>
            <NavLink
                className={" "+styles.navlink_overide}
                onClick={() => { toggle('1'); }}
            >
                Lead Generation
            </NavLink>
        </NavItem>
        <NavItem className={(activeTab === '2' && styles.active_overide  )}>
          <NavLink
            className={" "+styles.navlink_overide}
            onClick={() => { toggle('2'); }}
          >
             Increase Sales
          </NavLink>
        </NavItem>
        <NavItem className={(activeTab === '3' && styles.active_overide)}>
          <NavLink
            className={" "+styles.navlink_overide}
            onClick={() => { toggle('3'); }}
          >
            Conduct Surveys
          </NavLink>
        </NavItem>
        <NavItem className={(activeTab === '4' && styles.active_overide)}>
          <NavLink
            className={" "+styles.navlink_overide}
            onClick={() => { toggle('4'); }}
          >
             Engage Users
          </NavLink>
        </NavItem>
        <NavItem className={(activeTab === '5' && styles.active_overide  )}>
          <NavLink
            className={" "+styles.navlink_overide}
            onClick={() => { toggle('5'); }}
          >
            More Use Cases
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane style={{backgroundColor:"#f4f3ff"}} tabId="1">
            <div className="container">
            <Row>
            <Col sm="12">
              <h2 className={styles.tab_heading+" mt-5"}>Get More Leads</h2>
              <p className={styles.tab_desc+" mt-5 mb-5"}>Lead generation with interactive AMP Email helps you to get more conversions as prospects can respond to meeting requests and demo bookings and submit forms inside emails. Fewer steps means more leads. </p>
              <video loop autoPlay muted className={styles.tab_video}>
                <source
                  src={getVideoUrl("/static/images/type1/video/video1.mp4")}
                  type="video/mp4"
                  preload="metadata"
                />
              </video>
              <Link href="https://manage.mailmodo.com/auth/signup/"><button className={styles.tab_btn+" "}> Sign Up Now</button></Link>
            </Col>
          </Row>
            </div>
        </TabPane>
        <TabPane style={{backgroundColor:"#f4f3ff"}} tabId="2">
            <div className="container">
                <Row>
                    <Col sm="12">
                    <h2 className={styles.tab_heading+" mt-5"}>Skyrocket Your Sales</h2>
                      <p className={styles.tab_desc+" mt-5 mb-5"}>Boost your sales performance, improve cart recovery rate and grow more with the help of interactive elements like carts. calendars and forms within emails.</p>
                          <video loop autoPlay muted className={styles.tab_video}>
                    <source
                      src={getVideoUrl("/static/images/type1/video/video2.mp4")}
                      type="video/mp4"
                      preload="metadata"
                    />
                  </video>
                  <Link href="https://manage.mailmodo.com/auth/signup/"><button className={styles.tab_btn+" "}> Sign Up Now</button></Link>
                    </Col>
            </Row>
            </div>
        </TabPane>
        <TabPane style={{backgroundColor:"#f4f3ff"}} tabId="3">
            <div className="container">
                <Row>
                    <Col sm="12">
                    <h2 className={styles.tab_heading+" mt-5"}>Conduct surveys with forms inside emails</h2>
                      <p className={styles.tab_desc+" mt-5 mb-5"}>Get more responses for surveys like NPS, customer feedback, reviews, data collection, employee feedback, job applications, course registration and more by enabling your users and prospects to fill multi-step digital forms inside emails.</p>
                      <video loop autoPlay muted className={styles.tab_video}>
                    <source
                      src={getVideoUrl("/static/images/type1/video/video3.mp4")}
                      type="video/mp4"
                      preload="metadata"
                    />
                  </video>
                  <Link href="https://manage.mailmodo.com/auth/signup/"><button className={styles.tab_btn+" "}> Sign Up Now</button></Link>
                    </Col>
            </Row>
            </div>
        </TabPane>
        <TabPane style={{backgroundColor:"#f4f3ff"}} tabId="4">
            <div className="container">
                <Row>
                    <Col sm="12">
                    <h2 className={styles.tab_heading+" mt-5"}>Engage your prospects and users</h2>
                      <p className={styles.tab_desc+" mt-5 mb-5"}>Send engaging and interactive newsletters, promotional emails, dynamic calculators and other education emails to improve brand enagagement and product adoption with AMP Emails. </p>
                      <video loop autoPlay muted className={styles.tab_video}>
                    <source
                      src={getVideoUrl("/static/images/type1/video/video4.mp4")}
                      type="video/mp4"
                      preload="metadata"
                    />
                  </video>
                      <Link href="https://manage.mailmodo.com/auth/signup/"><button className={styles.tab_btn+" "}> Sign Up Now</button></Link>
                    </Col>
            </Row>
            </div>
        </TabPane>

                <TabPane style={{backgroundColor:"#ffff"}} tabId="5">
            <div className="container">
                <Row>
                    <Col sm="12">
                    <h2 className={styles.tab_heading+" mt-5"}>Explore with Mailmodo</h2>
                      <p className={styles.tab_desc+" mt-5 mb-5"}>Got a different use case? We have got an AMP Email for you!</p>
                      <video loop autoPlay muted className={styles.tab_video}>
                    <source
                      src={getVideoUrl("/static/images/type1/video/video5.mp4")}
                      type="video/mp4"
                      preload="metadata"
                    />
                  </video>
                      <Link href="https://manage.mailmodo.com/auth/signup/"><button className={styles.tab_btn+" "}> Sign Up Now</button></Link>
                  
                    </Col>
            </Row>
            </div>
        </TabPane>

      </TabContent>

        </div>
        </>
    )
}

export default TabBlock;