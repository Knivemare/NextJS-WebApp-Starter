// Import Modules
import Head from 'next/head'

// Content
export default function PageMetaTags(props) {
    return (
        <Head>
            {/* Url specific MetaTags */}
            <title>{props.Title}</title>
            <meta name="description" content={props.Description}/>
            <meta name="robots" content={props.Robots}/>
            <link rel="canonical" href={props.Canonical}/>

            {/* Facebook MetaTags */}
            <meta property="og:title" content={props.Title}/>
            <meta property="og:description" content={props.Description}/>
            <meta property="og:url" content={props.Canonical}/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="TechUpgrade.de"/>
            <meta property="fb:app_id" content="469470689893966"/>

            {/* Twitter MetaTags */}
            <meta property="twitter:title" content={props.Title}/>
            <meta property="twitter:description" content={props.Description}/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:site" content="@TechUpgrade_"/>
        </Head>
    )
}