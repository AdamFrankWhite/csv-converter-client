import React from "react";
import styles from "../styles/SideBar.module.css";
import Link from "next/link";
export default function SideBar() {
    return (
        <div className={styles.sidebarCont}>
            <ul className={styles.list}>
                <li>
                    <Link href="csv-json">CSV to JSON</Link>
                </li>
                <li>
                    <Link href="csv-xml">CSV to XML</Link>
                </li>
            </ul>
        </div>
    );
}
