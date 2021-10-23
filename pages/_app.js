// Import Components
import AppMetaTags from '../components/AppMetaTags'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'
// Import Styles
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppMetaTags/>
      <AppNavbar/>
      <Component {...pageProps} />
      <AppFooter/>
    </>
  )
}

export default MyApp
