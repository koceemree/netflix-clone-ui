import React from "react";
import styles from "./notifications.module.css";
import NotificationsIcons from "./NotificationsIcons"

const Notifications = () => {
    return (
        <div className={styles.notifications}>
            <NotificationsIcons />
        </div>
    )
};

export default Notifications;