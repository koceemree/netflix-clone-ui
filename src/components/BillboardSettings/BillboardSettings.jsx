import React from "react";
import styles from "./BillboardSettings.module.css";
import BillboardSettingsIcons from "./BillboardSettingsIcons"

const BillboardSettings = () => {
    return (
        <div className={styles.BillboardSettings}>
            <BillboardSettingsIcons />
        </div>
    )
};

export default BillboardSettings;