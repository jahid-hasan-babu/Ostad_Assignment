import React from "react";
import Header from "../layout/Header";
import Search from "../components/Search";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Blog from "../components/Blog";

const BlogPage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Navbar />
      <Blog />
      <Footer />
    </div>
  );
};

export default BlogPage;
