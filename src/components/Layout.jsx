import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col   
 min-h-screen"> 
      <Navbar />
      <div className=""> 
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
