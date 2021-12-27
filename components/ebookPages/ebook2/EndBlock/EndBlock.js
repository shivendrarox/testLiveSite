import React, { useState } from 'react';
import styles from '../features.module.scss'
import Link from 'next/link'
import SampleEmail from '../SampleEmail/SampleEmail'

const EndBlock = (props) => {
    return (
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.EndBlock+" "}>
            <h2 className={styles.heading+" mt-5 "}>Get free access to this e-book now </h2>

            <div className={styles.cta+" mt-5"}> 
                <SampleEmail
                    usecase="A Step-by-Step Guide to Improve Email Performance"
                    campaignId=""
                    trackingId = "sample_ebooks"
                    />            
            </div>

        </div>
        </>
        )
}

export default EndBlock;