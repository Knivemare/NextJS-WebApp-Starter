// Import Modules

// Import Styles
import styles from 'styles/components/FullHeightHero.module.scss'
import Container from './Container'

// Content
export default function FullHeightHero(p) {
    return (
        <div className={styles.Hero}>
            <Container>
                <h1>{p.heading}</h1>
                <p>{p.text}</p>
            </Container>
        </div>
    )
}