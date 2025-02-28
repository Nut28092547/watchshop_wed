import React from 'react';
import Layout from '../components/Layout';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'; // สำหรับโซเชียลมีเดีย

const Contact = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12 px-6 md:px-12">
        {/* ช่องทางการติดต่อ */}
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-bold text-4xl text-blue-950 mt-10">ช่องทางการติดต่อ</h1>
          <hr className="mt-5 mb-5" />
          <div className="card shadow-lg rounded-md p-10 bg-slate-100 text-gray-700">
            <h2 className="text-2xl font-semibold mb-4">โทรศัพท์</h2>
            <p className="text-lg">062-9387887, 087-898989</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">ที่อยู่</h2>
            <p className="text-lg">90 ถนน เทศา ตำบลพระปฐมเจดีย์ อำเภอเมืองนครปฐม นครปฐม 73000</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">อีเมล</h2>
            <p className="text-lg">LUXETIC@gmail.com</p>
          </div>

          {/* ช่องทางออนไลน์ */}
          <h1 className="font-bold text-4xl text-blue-950 mt-10">ช่องทางออนไลน์</h1>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600 hover:text-blue-800">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-600 hover:text-pink-800">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400 hover:text-blue-600">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-700 hover:text-blue-900">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-red-600 hover:text-red-800">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
