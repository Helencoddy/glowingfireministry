import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Contact from "./components/Contact";
import HomeCTA from "./components/Home/HomeCTA";
import CTABook from "./components/Home/CTABook";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/homecta" element={<HomeCTA />} />
          <Route path="/ctabook" element={<CTABook />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
