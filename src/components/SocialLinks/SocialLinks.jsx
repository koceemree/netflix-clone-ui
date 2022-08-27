import React from "react";
import FacebookIcons from "./FacebookIcons";
import InstagramIcons from "./InstagramIcons ";
import styles from "./SocialLinks.module.css"
import TwitterIcons from "./TwitterIcons";
import YoutubeIcons from "./YoutubeIcons ";

const SocialLinks = () => {
    return (
        <div className={styles.box}>
            <div className={styles.iconLink}>
                <FacebookIcons />
            </div>
            <div className={styles.iconLink}>
                <InstagramIcons />
            </div>
            <div className={styles.iconLink}>
                <TwitterIcons />
            </div>
            <div className={styles.iconLink}>
                <YoutubeIcons />
            </div>
        </div>
    )
}

export default SocialLinks;