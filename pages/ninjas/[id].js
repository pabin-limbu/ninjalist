//changable route parameter should be surrounded by [] square brackets.
//something like route ninjas/id
import React from "react";
import Ninjas from ".";

export const getStaticPaths = async () => {
    //this function job is to tell next how many static hml page need to be pre rendered
  //since next pre render html at this situation next doesnt know how many page to pre rendered as it depend on the data we fetch
  //all ninjas/id path/ route will have its individual html page.
  //this function will address this problem and tell how many html to pre render at build time.

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
  //path: ->array of bject where each oobj represent a route.  in each of these obj we need to specify route parameter in our cas is id
  //like : path: [{},{},{},{params:{id:1}}]
};

export const getStaticProps = async (context) => {
  //this code is run ten times as we have ten different paths and each time iit runs it gets the different id
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: {
      ninja: data,
    },
  };
};

function Details({ ninja }) {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
}

export default Details;
