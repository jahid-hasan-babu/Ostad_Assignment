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
import Search from "../components/Search";
import Reviews from "../components/Reviews";

const Homepage = () => {
  return (
    <Fragment>
      <Header />
      <Search />
      <Navbar />
      <HomeSlider />
      <Banner />
      <Product />
      <HomeFashion />
      <HomeBlog />
      <Reviews />
      <Footer />
    </Fragment>
  );
};

export default Homepage;
