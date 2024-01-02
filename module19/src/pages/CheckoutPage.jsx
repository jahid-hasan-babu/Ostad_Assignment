import React from "react";
import Header from "../layout/Header";
import Search from "../components/Search";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import CheckoutStyle from "../components/CheckoutStyle";
import CheckoutForm from "../components/CheckoutFrom";

const CheckoutPage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Navbar />
      <CheckoutStyle />
      <CheckoutForm />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
