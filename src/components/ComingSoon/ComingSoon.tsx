import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.jpg";

import styles from "./ComingSoon.module.css";

const ComingSoon = () => {
    return (
        <div className={styles.fullscreen}>
            <div className={styles.wrapper}>
                <Image className={styles.logo} src={logo} alt="Okali"></Image>
                <div className={styles.description}>
                    Our website is
                    <span className={styles.comingSoon}> Coming Soon</span>.
                </div>
                <button className={styles.instagram}>
                    <Link
                        href="https://www.instagram.com/okali_farms/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Follow us on Instagram
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default ComingSoon;
