import React from "react";
import Footer from "./Footer";
import Navigation from "./NavigationBar";

const Layout = (props) => {
  return (
    <div>
      <Navigation />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
