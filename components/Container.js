// Import Modules

// Import Styles
import styles from 'styles/components/Container.module.scss'

// Content
export default function Container({ children }) {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    )
}