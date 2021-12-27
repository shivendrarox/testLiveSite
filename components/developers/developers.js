import React, { Component } from 'react';
import Head from 'next/head';
import { StoplightProject } from '../../components/dev/index.tsx';
import '@stoplight/elements-dev-portal/styles.min.css';


class Developers extends Component {
    render() {
        return (
            <>
                <Head>


                    <meta name="robots" content="index,follow" />
                    <meta name="googlebot" content="index,follow" />

                    <title>Transactional Email API - Free, Easy to Setup | Mailmodo for Developers</title>

                    <meta name="description" content="Mailmodo API for Transaction Email enables developers to send transactional emails using REST API without having to code the emails." />

                    <meta name="keywords" content="email API, transactional Emails,
                     email templates, email marketing success story, email conversions, AMP email API" />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Transactional Email API - Free, Easy to Setup | Mailmodo for Developers" />
                    <meta property="og:description" content="Mailmodo API for Transaction Email enables developers to send transactional emails using REST API without having to code the emails." />
                    <meta property="og:url" content="https://www.mailmodo.com/developers/" />
                    <meta property="og:site_name" content="Mailmodo" />
                    <meta property="og:image" content="https://www.mailmodo.com/static/images/og-image.png" />
                    <meta property="og:image:secure_url" content="https://www.mailmodo.com/static/images/og-image.png" />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:description" content="Mailmodo API for Transaction Email enables developers to send transactional emails using REST API without having to code the emails." />
                    <meta name="twitter:title" content="Transactional Email API - Free, Easy to Setup | Mailmodo for Developers" />
                    <meta name="twitter:site" content="@mailmodo" />
                    <meta name="twitter:image" content="https://www.mailmodo.com/static/images/og-image.png" />

                </Head>

                <StoplightProject
                    projectId="cHJqOjczODk3"
                    basePath="developers"
                    router={typeof window === 'undefined' ? 'memory' : 'history'}
                    hideMocking={true}
                    collapseTableOfContents={false}
                />
            </>

        );
    }
}

export default Developers;