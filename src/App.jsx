import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./Pages/Footer";
import TourDestinations from "./Pages/TourDestinations";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import TourPackages from "./Pages/TourPackages";
import Gallery from "./Pages/Gallery";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tour-destinations" element={<TourDestinations />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tour-package" element={<TourPackages />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
