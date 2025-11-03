import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/919026169131?text=Hello%20I%20want%20to%20book%20a%20tour!",
      "_blank"
    );
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Menu icon - visible only on small screens */}
          <button
            className="md:hidden text-3xl text-red-600"
            onClick={() => setMenuOpen(true)}
          >
            <HiMenu />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
              AT
            </div>
            <div className="font-semibold text-lg text-gray-800">
              Arun Travels
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1 text-[18px] text-gray-800">
          <Link to="/">
            <li className="hover:text-red-600 cursor-pointer hover:bg-red-600 hover:text-white hover:rounded-3xl px-4 py-1">
              Home
            </li>
          </Link>
          <Link to="/tour-package">
            <li className="hover:text-red-600 cursor-pointer hover:bg-red-600 hover:text-white hover:rounded-3xl px-4 py-1">
              Packages
            </li>
          </Link>
          <Link to="/gallery">
            <li className="hover:text-red-600 cursor-pointer hover:bg-red-600 hover:text-white hover:rounded-3xl px-4 py-1">
              Gallery
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:text-red-600 cursor-pointer hover:bg-red-600 hover:text-white hover:rounded-3xl px-4 py-1">
              About
            </li>
          </Link>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <Link to="/contact-us">
            <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 font-bold cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sliding Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-white shadow-2xl z-40 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-red-600"
          >
            <HiX />
          </button>
        </div>

        <ul className="flex flex-col items-start gap-6 p-6 text-gray-800 text-lg">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <li className="hover:text-red-600 cursor-pointer">Home</li>
          </Link>
          <Link to="/tour-package" onClick={() => setMenuOpen(false)}>
            <li className="hover:text-red-600 cursor-pointer">Packages</li>
          </Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            <li className="hover:text-red-600 cursor-pointer">Gallery</li>
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <li className="hover:text-red-600 cursor-pointer">About</li>
          </Link>
        </ul>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping"></div>
        <button
          onClick={handleWhatsAppClick}
          className="relative bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-4xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
