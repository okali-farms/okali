import styles from "./Footer.module.css";
import Instagram from "../../assets/Instagram";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <Instagram />
            </div>
        </footer>
    );
};

export default Footer;
