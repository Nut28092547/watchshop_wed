import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/react.svg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // ถ้าเลื่อนลงซ่อน navbar
      setShowNavbar(false);
    } else {
      // ถ้าเลื่อนขึ้นแสดง navbar
      setShowNavbar(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-gray-800 p-4 flex items-center justify-between transition-all duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-12 mr-3" />
        <span className="text-white font-semibold text-xl">
          <NavLink to="/" className="text-white hover:text-amber-400">LUXETIC</NavLink>
        </span>
      </div>

      <div className="flex items-center space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "text-amber-400" : "text-white hover:text-amber-400"}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "text-amber-400" : "text-white hover:text-amber-400"}
        >
          About
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) => isActive ? "text-amber-400" : "text-white hover:text-amber-400"}
        >
          Product
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? "text-amber-400" : "text-white hover:text-amber-400"}
        >
          Contact
        </NavLink>

        
        <NavLink to="/cart">                                                   
          <button className="text-white hover:text-amber-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2m4 0l.4-2m7 0h2a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2z"
              />
            </svg>
          </button>
        </NavLink>
  
        {/* ปุ่ม Login & Register */}
        <NavLink
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          Register
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
