import React from "react";
import styles from "./Billboard.module.css"
import billboardHeroImg from "./assets/billboard.webp"
import billboardHeroTitle from "./assets/billboard-title.webp"
import PlayIcons from "./PlayIcons";
import InfoIcons from "./InfoIcons copy";
const Billboard = () => {
    return (
        <div className={styles.billboard}>
            <div className={styles.innerBillboard}>
                <img src={billboardHeroImg} alt="" />
                <div className={styles.fadeOut}></div>
                <div className={styles.info}>
                    <img src={billboardHeroTitle} alt="" />
                    <div className={styles.description}>

                        Step inside the minds of the most innovative designers in a variety of disciplines and learn how design impacts every aspect of life.
                    </div>
                    <div className={styles.links}>
                        <a href="/" >
                            <PlayIcons />
                            <span>Play</span>
                        </a>
                        <a href="/" className={styles.navbrand}>
                            <InfoIcons />
                            <span>More Info</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billboard;