import React from "react";
import Segment from "../Segment";
import styles from "./Title.module.css"
const Title = () => {
    return (
        <div className={styles.titles}>
            <Segment title={"Pouler on Netflix"} />
            <Segment title={"Continue Watching for Home"} />
            <Segment title={"Trending Now"} />
            <Segment title={"Watch It Again"} />
        </div>
    )
}

export default Title;