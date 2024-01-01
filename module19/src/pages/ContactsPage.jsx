import React from "react";
import Header from "../layout/Header";
import Search from "../components/Search";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Contact from "../components/Contact";

const ContactsPage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactsPage;
