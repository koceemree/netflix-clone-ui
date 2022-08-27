import React from "react";
import styles from "./Footer.module.css"
import FooterLinks from "../FooterLinks/FooterLinks";
import SocialLinks from "../SocialLinks";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialLinks}>
                <SocialLinks />
            </div>
            <FooterLinks />
        </footer>
    )
}

export default Footer;