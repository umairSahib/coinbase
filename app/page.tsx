import React from "react";
import Header from "./component/layout/Header";
import Page from "./payment/Page";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Page />
    </>
  );
};

export default page;
