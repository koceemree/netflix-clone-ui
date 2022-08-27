import React from "react";
import styles from "./FooterLinks.module.css"
const FooterLinks = () => {
    const links = [
        "Audio Description",
        "Investor Relations",
        "Legal Notices",
        "Help Center",
        "Jobs",
        "Terms of Use",
        "Cookie Prefences",
        "Impressum",
        "Contact Us",
        "Gift",
        "Audio",
        "Cookie",
        "Us",
        "Center"
    ]

    return (

        <ul className={styles.linkList}>
            {links.map(link => (
                <li className={styles.link} key={link}>
                    <a href="/">{link}
                    </a>
                </li>
            ))}
        </ul>

    )
}

export default FooterLinks;