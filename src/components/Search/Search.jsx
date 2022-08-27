import React from "react";
import styles from "./search.module.css";
import SearchIcon from "./SearchIcon"

const Search = () => {
    return (
        <div className={styles.search}>
            <SearchIcon />
        </div>
    )
};

export default Search;