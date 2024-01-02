import React from "react";
import Search from "../components/Search";
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import SearchHere from "../components/SearchHere";

const SearchPage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Navbar />
      <SearchHere />
      <Footer />
    </div>
  );
};

export default SearchPage;
