import React from "react";
import Header from "../layout/Header";
import Search from "../components/Search";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Thank from "../components/Thank";

const ThanksPage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Navbar />
      <Thank />
      <Footer />
    </div>
  );
};

export default ThanksPage;
