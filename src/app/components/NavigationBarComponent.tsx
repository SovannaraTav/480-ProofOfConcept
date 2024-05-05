import Link from "next/link";
import styles from "../styles/NavigationBarStyle.module.css";

function NavigationBarComponent()
{
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/things-to-read">Things to Read</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBarComponent;