import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import logo from "../../assets/logo.jpg";
import styles from "./NavBar.module.css";

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className={styles.navBar}>
            <div>
                <div className={styles.logoWrapper}>
                    <Link href="/">
                        <Image
                            className={styles.logo}
                            src={logo}
                            alt="Okali"
                        ></Image>
                    </Link>
                </div>
                <div>
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? <div>close</div> : <div>open</div>}
                        </button>
                    </div>
                    <div className={styles.navItemsWrapper}>
                        <ul className={styles.navItems}>
                            <li className={styles.navItem}>
                                <Link
                                    href="#about"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    About
                                </Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link
                                    href="#genetics"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    Genetics
                                </Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link
                                    href="#gallery"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    Gallery
                                </Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link
                                    href="#merchandise"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    Merchandise
                                </Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link
                                    href="#contact"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
