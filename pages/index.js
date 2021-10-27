// Import Modules & Components
import PageMetaTags from 'components/PageMetaTags';
import PageHeading from 'components/PageHeading'
import Container from 'components/Container';
// Import Styles
import styles from 'styles/pages/Index.module.scss'

export default function Home() {
  return (
    <Container>
      <PageMetaTags/>
      <PageHeading/>
    </Container>
  )
}
