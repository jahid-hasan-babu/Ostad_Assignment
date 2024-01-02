import React from "react";
import Header from "../layout/Header";
import Search from "../components/Search";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import FAQ from "../components/FAQ";

import FAQStyle from "../components/FAQStyle";

const QuestionPage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Navbar />
      <FAQStyle />
      <FAQ />
      <Footer />
    </div>
  );
};

export default QuestionPage;
