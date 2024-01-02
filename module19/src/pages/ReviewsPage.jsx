import React from "react";
import Search from "../components/Search";
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import ReviewStyle from "../components/ReviewStyle";
import Reviews from "../components/Reviews";

const ReviewsPage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Navbar />
      <ReviewStyle />
      <Reviews />
      <Footer />
    </div>
  );
};

export default ReviewsPage;
