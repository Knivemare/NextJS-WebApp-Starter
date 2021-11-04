// Import Modules & Components
import PageMetaTags from 'components/PageMetaTags';
import FullHeightHero from 'components/FullHeightHero';
// Import Styles

// Content
export default function Imprint() {
    return (
        <>
            <PageMetaTags/>
            <FullHeightHero
                heading="Impressum"
                text="Hier entstaht das Impressum dieser Website!"
            />
        </>
    )
}