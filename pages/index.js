import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          this web page is updateing soon..... wait please..
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>see ninja listing</a>
        </Link>
      </div>
    </>
  );
}
