import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";
import ContactsPage from "./pages/ContactsPage";
import CartPages from "./pages/CartPages";
import CheckoutPage from "./pages/CheckoutPage";
import ThanksPage from "./pages/ThanksPage";
import NotFoundPage from "./pages/NotFoundPage";
import QuestionPage from "./pages/QuestionPage";
import ReviewsPage from "./pages/ReviewsPage";
import SearchPage from "./pages/SearchPage";
import PrivacyPage from "./pages/PrivacyPage";
import RegistrationPage from "./pages/RegistrationPage";
import BlogPage from "./pages/BlogPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/cart" element={<CartPages />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thanks" element={<ThanksPage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/registration " element={<RegistrationPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
