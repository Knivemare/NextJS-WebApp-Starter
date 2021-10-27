// Import Components
import AppMetaTags from '../components/AppMetaTags'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'
// Import Auth0 UserProvider
import { UserProvider } from '@auth0/nextjs-auth0';
// Import Styles
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <AppMetaTags/>
      <AppNavbar/>
      <main className="Content">
        <Component {...pageProps} />
      </main>
      <AppFooter/>
    </UserProvider>
  )
}

export default MyApp
