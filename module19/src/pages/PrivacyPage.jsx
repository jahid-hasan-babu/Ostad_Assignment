import React from "react";
import Header from "../layout/Header";
import Search from "../components/Search";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PrivacyStyle from "../components/PrivacyStyle";
import Privacy from "../components/Privacy";

const PrivacyPage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Navbar />
      <PrivacyStyle />
      <Privacy />
      <Footer />
    </div>
  );
};

export default PrivacyPage;
