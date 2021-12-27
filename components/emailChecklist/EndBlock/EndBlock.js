import React, { useState } from 'react';
import styles from '../features.module.scss'
import Link from 'next/link'
import SampleEmail from '../SampleEmail/SampleEmail'

const EndBlock = (props) => {
    return (
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.EndBlock+" "}>
            <h2 className={styles.heading+" mt-5 "}>Get free access to this checklist now</h2>

            <div className={styles.cta+" mt-5"}> 
                <SampleEmail
                    usecase="Checklist"
                    campaignId=""
                    trackingId = ""
                    />            
            </div>

        </div>
        </>
        )
}

export default EndBlock;