// Import Modules & Components
import PageMetaTags from 'components/PageMetaTags';
import FullHeightHero from 'components/FullHeightHero';
// Import Styles

// Content
export default function Privacy() {
    return (
        <>
            <PageMetaTags/>
            <FullHeightHero
                heading="Datenschutz"
                text="Hier entstaht die Datenschutzerklärung dieser Website!"
            />
        </>
    )
}