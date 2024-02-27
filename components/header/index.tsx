import Link from "next/link"
import styles from "./styles.module.css"
export default function Header(){
    return (<header className={styles.header}>
        <Link href="/">Logo</Link>
        <div className={styles.menu}>
            <Link href="/">MOVIES</Link>
            <Link href="/">SERIES</Link>
            <Link href="/">KIDS</Link>
        </div>
    </header>)
}