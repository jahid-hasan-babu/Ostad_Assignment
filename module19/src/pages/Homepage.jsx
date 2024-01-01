import React, { Fragment } from "react";
import Header from "../layout/Header";
import SearchPage from "./SearchPage";
import Navbar from "../layout/Navbar";
import HomeSlider from "../components/HomeSlider";
import Footer from "../layout/Footer";
import Banner from "../components/Banner";
import Product from "../components/Product";
import HomeFashion from "../components/HomeFashion";
import HomeBlog from "../components/HomeBlog";

const Homepage = () => {
  return (
    <Fragment>
      <Header />
      <SearchPage />
      <Navbar />
      <HomeSlider />
      <Banner />
      <Product />
      <HomeFashion />
      <HomeBlog />
      <Footer />
    </Fragment>
  );
};

export default Homepage;
