"use client";
import React, { useState } from "react";
import Header from "./component/layout/Header";
import Page from "./payment/Page";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navigation from "./component/Navigation";
import FlowBite from "./component/FlowBite";
import Bitcoin from "./component/layout/CoinDetails";
config.autoAddCss = false;

const page = () => {
  // const [data, setData] = useState([]);
  // console.log("first/////", data);
  return (
    <>
      {/* <Navbar /> */}
      {/* <Header /> */}
      {/* <Page /> */}
      {/* <Navigation /> */}
      <Bitcoin />
      {/* <FlowBite /> */}
    </>
  );
};

export default page;
