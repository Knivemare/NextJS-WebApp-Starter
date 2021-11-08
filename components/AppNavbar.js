// Import Modules
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0';
// Import Styles
import styles from '../styles/components/AppNavbar.module.scss'

export function NavItem(p) {
    return (
        <Link href={p.link} alt={p.title}>
            <a className={styles.NavItem}>
                {p.title}
            </a>
        </Link>
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
                    src="https://images.unsplash.com/photo-1612562588694-c4505dc3d031?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                    alt="Knivemare"
                />
                Hi 👋🏼<br/>
                Knivemare
            </div>
        );
    } else {
        UserItem = (
            <Link href="/api/auth/login"><a className={styles.UserItem}>
                <img className={styles.ProfilePic}
                    src="https://images.unsplash.com/photo-1612562588694-c4505dc3d031?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                    alt="Profile Picture"
                />
                Login<br/>
                Registrieren
            </a></Link>
        )
    }


    return (
        <header className={styles.Navbar}>
            <Link href="/">
                <a className={styles.Logo}>
                    <img src="https://techupgrade.de/img/techupgrade-logo-navbar.png"
                        alt="WebApp Starter Logo"  
                    />
                </a>
            </Link>
            <nav className={styles.Nav}>
                <NavItem title="Über uns" link="/about"/>

                {UserItem}
            </nav>
        </header>
    )
}