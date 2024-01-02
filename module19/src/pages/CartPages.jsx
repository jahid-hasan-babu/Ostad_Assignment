import React from "react";
import Header from "../layout/Header";
import Search from "../components/Search";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Cart from "../components/Cart";
import CartStyle from "../components/CartStyle";

const CartPages = () => {
  return (
    <div>
      <Header />
      <Search />
      <Navbar />
      <CartStyle />
      <Cart />
      <Footer />
    </div>
  );
};

export default CartPages;
