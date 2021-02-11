import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // router.go();
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className={"not-found"}>
      <h1> ooops....</h1>
      <h2>This page cannot be found</h2>
      <p>
        go back to{" "}
        <Link href={"/"}>
          <a>HomePage</a>
        </Link>{" "}
      </p>
    </div>
  );
}

export default NotFound;
