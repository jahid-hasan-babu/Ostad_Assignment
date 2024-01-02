import React from "react";
import Header from "../layout/Header";
import Search from "../components/Search";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Product from "../components/Product";
import ProductStyle from "../components/ProductStyle";

const ProductsPage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Navbar />
      <ProductStyle />
      <Product />
      <Footer />
    </div>
  );
};

export default ProductsPage;
