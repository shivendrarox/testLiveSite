import React, { useState } from 'react';
import styles from '../../../assets/video-pages/video-slug.module.scss';
import Link from 'next/link'
import SampleEmail from '../SampleEmailSlugTop/SampleEmail'

const EndBlock = (props) => {
    return (
        <>
            <div className={styles.newsletter_footer}>
            <div className="layout-gap"></div>
                <h2>Subscribe to recieve notifications everytime we release a video</h2>
            <div className="layout-padding"></div>
            <div className={styles.cta_container}>
            <div className={styles.cta + "  "}>
                            <SampleEmail
                                usecase="Newsletter-slug"
                                campaignId=""
                                trackingId = "Newslette-slug"
                                />
                        </div>
 
            </div>
            <div className="layout-gap"></div>

            </div>
        </>
        )
}

export default EndBlock;