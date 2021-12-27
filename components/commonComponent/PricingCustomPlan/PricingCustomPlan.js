import React from 'react';
import styles from './styles.module.scss';

const PricingCustomPlan = (props) => {
  return(
    <div className={styles.contact_sales}>
    <h2>
        Need Custom Plan?
    </h2>
    <div className={styles.ul_container}>
    <ul>
        <li>
          <div className={styles.list_container}>
          <img title="check mark" alt="Check.svg" className={styles.icon_img} src="/static/images/icon/Check.svg"></img>
          <p className={styles.crypto_list}>Monthly Email Volume {">"} 2 Million</p>
          {/* Replacing Li to p tag resolved the footer glith */}
          </div>
        </li>
        <li>
          <div className={styles.list_container}>
          <img title="check mark" alt="Check.svg" className={styles.icon_img} src="/static/images/icon/Check.svg"></img>
          <p className={styles.crypto_list}>Custom Template Development</p>
          </div>
        </li>
        <li>
          <div className={styles.list_container}>
          <img title="check mark" alt="Check.svg" className={styles.icon_img} src="/static/images/icon/Check.svg"></img>
          <p className={styles.crypto_list}>Custom Integration Setup</p>
          </div>
        </li>
        <li>
          <div className={styles.list_container}>
          <img title="check mark" alt="Check.svg" className={styles.icon_img} src="/static/images/icon/Check.svg"></img>
          <p className={styles.crypto_list}>Key Account Manager</p>
          </div>
        </li>
        <li>
          <div className={styles.list_container}>
          <img title="check mark" alt="Check.svg" className={styles.icon_img} src="/static/images/icon/Check.svg"></img>
          <p className={styles.crypto_list}>Email Delivery Expert</p>
          </div>
        </li>
    </ul>
    </div>
  
    {/* <img src="\static\images\pricing\Group 91930.svg"></img> */}
    <div className="layout-padding"></div>
    <button id={props.trackingIdArr[0]} type="button" onClick={(e) => {e.preventDefault();window.location.href='mailto:support@mailmodo.com';}} className=" ">Contact Sales</button>

</div>
  )
}

export default PricingCustomPlan;
