// Import Modules
import Head from 'next/head'

// Content
export default function AppMetaTags() {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="manifest" href="/pwa/manifest.json"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/ico/favicon-16x16.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/ico-32x32.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/ico/apple-touch-icon.png"/>

            <link rel="mask-icon" href="/ico/safari-pinned-tab.svg" color="#000000"/>
            <link rel="shortcut icon" href="/ico/favicon.ico" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
            <meta name="theme-color" content="#000"/>
            {/*  <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}
        </Head>
    )
}