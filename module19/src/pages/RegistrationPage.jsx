import React from "react";
import Header from "../layout/Header";
import Search from "../components/Search";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Registration from "../components/Registration";

const RegistrationPage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Navbar />
      <Registration />
      <Footer />
    </div>
  );
};

export default RegistrationPage;
