import Head from "next/head";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut nam
        animi in ipsa dignissimos dolore explicabo laboriosam non asperiores.
      </p>
      <Link href="/ninjas"><a>see ninja listing</a></Link>
      <Footer></Footer>
    </div>
  );
}
