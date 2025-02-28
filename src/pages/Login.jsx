import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom"; // ใช้ useNavigate สำหรับเปลี่ยนเส้นทาง

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ใช้เพื่อเปลี่ยนเส้นทางไปหน้า Home

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // เพิ่ม logic สำหรับการเข้าสู่ระบบที่นี่
    console.log("Username:", username);
    console.log("Password:", password);

    // แสดง alert ว่าเข้าสู่ระบบสำเร็จ
    alert("Login Successful!");

    // เปลี่ยนเส้นทางไปหน้า Home
    navigate("/"); // เปลี่ยนเส้นทางไปหน้า Home (สามารถปรับเป็น path ของหน้า Home ที่คุณต้องการ)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/forgetpassword" className="text-blue-500 hover:text-blue-700 text-sm">
            Forgot Password?
          </Link>
        </div>
        <div className="mt-2 text-center">
          <span className="text-gray-600 text-sm">Don't have an account? </span>
          <Link to="/register" className="text-blue-500 hover:text-blue-700 text-sm">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
