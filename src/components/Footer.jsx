import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'; // ใช้ไอคอนโซเชียล

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Section 1: Brand and Navigation */}
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 sm:mb-0">
            <h2 className="text-3xl font-bold text-white">LUXETIC</h2>
            <p className="text-gray-200 mt-2">Your ultimate destination for luxury watches and accessories.</p>
          </div>
          
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="text-gray-300">
              <li><a href="/about" className="hover:text-gray-100">About Us</a></li>
              <li><a href="/products" className="hover:text-gray-100">Products</a></li>
              <li><a href="/contact" className="hover:text-gray-100">Contact</a></li>
              <li><a href="/faq" className="hover:text-gray-100">FAQ</a></li>
            </ul>
          </div>
          
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100">
                  <FaFacebook size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100">
                  <FaInstagram size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100">
                  <FaTwitter size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100">
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100">
                  <FaYoutube size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-200 text-sm">&copy; 2025 LUXETIC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
