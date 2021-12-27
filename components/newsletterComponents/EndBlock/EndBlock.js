import React, { useState } from 'react';
import styles from '../features.module.scss'
import Link from 'next/link'
import SampleEmail from '../SampleEmail/SampleEmail'

const EndBlock = (props) => {
    return (
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.EndBlock+" "}>
            <div className="layout-gap"></div>
            <h2 className={styles.heading+" "}>Check out our previous newsletters</h2>

                <div className={styles.cta + "  "}>
                <div className="layout-padding"></div>
                                <SampleEmail
                                    usecase="Ebooks downloads"
                                    campaignId=""
                                    trackingId = "sample_ebooks"
                                    />
                </div>
            <div className="layout-gap"></div>
        </div>
        </>
        )
}

export default EndBlock;