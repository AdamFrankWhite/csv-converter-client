import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>CSV Converter</title>
                <meta
                    name="keywords"
                    content="csv, json, converter, web development"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <h1>CSV Converter</h1>
        </>
    );
}
