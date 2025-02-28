import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom"

const NotFound = () => {
    return (
      <>
  <Layout>
    <div className="flex flex-col items-center justify-center ">
      <h1 className="font-bold text-7xl text-blue-950 text-center mb-4">
        Sorry, Not Found Page :(
      </h1>
      <NavLink 
        to="/" 
        className="bg-blue-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full inline-block"
      >
        Home
      </NavLink>
    </div>
  </Layout>
</>
      );
    };
    
    export default NotFound;
