import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom"; // ใช้ useNavigate สำหรับเปลี่ยนเส้นทาง
import AuthService from "../Services/auth.service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ใช้เพื่อเปลี่ยนเส้นทางไปหน้า Home

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await AuthService.login({ email, password });

      if (response.token) {
        localStorage.setItem("token", response.token);
        alert("Login Successful!");
        navigate("/");
      }
    } catch (error) {
      alert(
        "Login Failed: " +
          (error.response?.data?.message || "Something went wrong")
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
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
          <Link
            to="/forgetpassword"
            className="text-blue-500 hover:text-blue-700 text-sm"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="mt-2 text-center">
          <span className="text-gray-600 text-sm">Don't have an account? </span>
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-700 text-sm"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
