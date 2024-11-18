import React from "react";
import styles from "./Navbar.module.css";
import SearchBar from "../features/SearchBar";
import Image from "../ui/Image";
import { API_BASE_URL } from "../../services/apiService";

const Navbar = ({ onBack, onSearch }) => (
    <div className={styles.navbar}>
        <div className={styles.icon} onClick={onBack}>
            <Image src={`${API_BASE_URL}images/Back.png`} alt="Back Icon" width="50%" />
        </div>
        <div className={styles.title}>Romantic Comedy</div>
        <SearchBar onSearch={onSearch} />
    </div>
);

export default Navbar;
