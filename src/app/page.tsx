import React from "react";
import Header from "./component/layout/Header";
import Page from "./payment/Page";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navigation from "./component/Navigation";
config.autoAddCss = false;

const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Navigation />
      <Page />
    </>
  );
};

export default page;
