import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>NinjaList | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>lorem</p>
        <p className={styles.text}>lorem</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See the ninjaslist</a>
        </Link>
      </div>
    </>
  );
}
