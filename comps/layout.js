import React from "react";
import MyNavbar from "./MyNavbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="content">
      <MyNavbar></MyNavbar>
      {children}
      <Footer></Footer>
    </div>
  );
}

export default Layout;
