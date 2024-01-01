import React from "react";
import Header from "../layout/Header";
import Search from "../components/Search";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import NotFound from "../components/NotFound";

const NotFoundPage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Navbar />
      <NotFound />
      <Footer />
    </div>
  );
};

export default NotFoundPage;
