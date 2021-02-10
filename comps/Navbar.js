import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>ninja list</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Listing</a>
      </Link>
    </nav>
  );
}

export default Navbar;
