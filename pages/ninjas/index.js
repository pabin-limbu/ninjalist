import React from "react";
import Styles from "../../styles/Ninjas.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  //this function is built in fucntion of next. it fetches the data before the component rendered.
  //the returned value is available to the rops of this component.
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      ninjas: data,
    },
  };
};
function Ninjas({ ninjas }) {
  return (
    <div>
      <h1>ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
          <a className={Styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Ninjas;
