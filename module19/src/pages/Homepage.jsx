import React, { Fragment } from "react";
import Header from "../layout/Header";
import SearchPage from "./SearchPage";
import Navbar from "../layout/Navbar";
import HomeSlider from "../components/HomeSlider";
import Footer from "../layout/Footer";

const Homepage = () => {
  return (
    <Fragment>
      <Header />
      <SearchPage />
      <Navbar />
      <HomeSlider />
      <Footer />
    </Fragment>
  );
};

export default Homepage;
