import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-white font-semibold">Arun Travels</h4>
            <p className="text-sm mt-2">
              Trusted tour and travel company in India. <br /> Plan your perfect
              trip with us.
            </p>
          </div>
          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <ul className="mt-2 text-sm space-y-2">
              <Link to="about">
                <li className="hover:text-red-600">About</li>
              </Link>
              <Link to="gallery">
                <li className="hover:text-red-600">Gallery</li>
              </Link>
              <Link to="tour-package">
                <li className="hover:text-red-600">Package</li>
              </Link>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Contact</h5>
            <p className="text-sm mt-2">Ayodhya, India</p>
            <p className="text-sm">+91-90261 69131</p>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Arun Travels. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
