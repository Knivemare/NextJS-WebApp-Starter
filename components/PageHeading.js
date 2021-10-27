// Import Modules

// Import Styles
import { useState } from 'react'
import styles from 'styles/components/PageHeading.module.scss'

// Content
export default function PageHeading() {

    const [count, setCount] = useState(0)

    return (
        <div className={styles.PageHeading}>
            <h1>NextJS WebApp Starter</h1>
            <p>
                The perfect starter for your next WebApp!
            </p>
            <div className={styles.ButtonBox}>
                <div>{count}</div>
                <button onClick={() =>setCount(count +1)}>Add one more!</button>
                <button>Buy me a ☕</button>
            </div>
        </div>
    )
}