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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut
          nam animi in ipsa dignissimos dolore explicabo laboriosam non
          asperiores.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>see ninja listing</a>
        </Link>
      </div>
    </>
  );
}
