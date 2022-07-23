import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MainContainer from "../Components/MainContainer";
import { useStyles } from "./pageStyle";

export default function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}
