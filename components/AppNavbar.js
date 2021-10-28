// Import Modules
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0';
// Import Styles
import styles from '../styles/components/AppNavbar.module.scss'

export function NavItem() {
    return (
        <div className={styles.NavItem}>
            Impressum
        </div>
    )
}

// Content
export default function AppNavbar() {

    const { user, error } = useUser();
    if (error) return <div>{error.message}</div>;

    let UserItem;
    if (user) {
        UserItem = (
            <div className={styles.UserItem}>
                <img className={styles.ProfilePic}
                    src="https://images.unsplash.com/photo-1612562588694-c4505dc3d031?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80"
                />
                Hi 👋🏼<br/>
                Knivemare
            </div>
        );
    } else {
        UserItem = (
            <Link href="/api/auth/login"><a className={styles.UserItem}>
                <img className={styles.ProfilePic}
                    src="https://images.unsplash.com/photo-1612562588694-c4505dc3d031?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80"
                />
                Login<br/>
                Registrieren
            </a></Link>
        )
    }


    return (
        <header className={styles.Navbar}>
            <div className={styles.Logo}></div>
            <nav className={styles.Nav}>
                <NavItem/>
                {UserItem}
            </nav>
        </header>
    )
}