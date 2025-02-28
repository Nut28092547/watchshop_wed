import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const LuxeticAd = () => {
  return (
    <Layout>
      <div className="relative flex items-center justify-center h-screen w-full p-10 bg-gradient-to-br from-gray-100 via-gray-400 to-gray-900">
        <div className="absolute top-16 left-16 w-36 h-36 bg-gray-300 rounded-full opacity-60 blur-xl"></div>
        <div className="absolute bottom-16 right-16 w-48 h-48 bg-gray-600 rounded-full opacity-50 blur-xl"></div>
        <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-gray-500 rounded-full opacity-40 blur-2xl"></div>

        <div className="relative z-10 max-w-lg text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900">สินค้าแนะนำ</h1>
          <h1 className="text-5xl font-bold text-gray-900">LUXETIC</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mt-4">
            <span className="text-gray-900">Rolex</span> – <span className="text-green-900">The Leader</span>
          </h2>
          <p className="text-gray-700 mt-4 text-lg">
            Rolex โดดเด่นด้วยคุณภาพเยี่ยม กลไกแม่นยำ วัสดุพรีเมียม และนวัตกรรมล้ำหน้า
            ทำให้เป็นผู้นำวงการนาฬิกาหรู
          </p>
          <NavLink to="/products">
            <button className="mt-6 px-8 py-3 bg-green-900 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-105">
              Shop Now <span className="ml-2">➡️</span>
            </button>
          </NavLink>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="src/assets/Image/rolex-watches-yacht-master.jpg"
            alt="Rolex Watch"
            className="max-h-96 object-contain drop-shadow-lg rounded-lg"
          />
        </div>
      </div>

       {/* เพิ่มส่วนของนาฬิกาเพิ่มเติมด้านล่าง */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">ดูสินค้าของเราเพิ่มเติม</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* นาฬิกาเรือนที่ 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="src/assets/Image/rolex-watches-submariner.jpg" 
                alt="Rolex Submariner" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">Rolex Submariner</h3>
              <p className="text-gray-600 mt-2">นาฬิกาข้อมือกันน้ำ เหมาะสำหรับนักดำน้ำ</p>
              <p className="text-lg font-bold text-gray-900 mt-2">27,900 บาท</p>
              <NavLink to="/products">
                <button className="mt-4 px-6 py-2 bg-green-900 text-white rounded-lg hover:bg-green-700 transition">
                  ดูรายละเอียด
                </button>
              </NavLink>
            </div>

            {/* นาฬิกาเรือนที่ 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="src/assets/Image/RolexDaytona.png" 
                alt="Rolex Daytona" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">Rolex Daytona</h3>
              <p className="text-gray-600 mt-2">นาฬิกาสำหรับนักแข่งรถด้วยดีไซน์ที่เป็นเอกลักษณ์</p>
              <p className="text-lg font-bold text-gray-900 mt-2">69,900 บาท</p>
              <NavLink to="/products">
                <button className="mt-4 px-6 py-2 bg-green-900 text-white rounded-lg hover:bg-green-700 transition">
                  ดูรายละเอียด
                </button>
              </NavLink>
            </div>

            {/* นาฬิกาเรือนที่ 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="src/assets/Image/rolex-watches-day-date.jpg" 
                alt="Rolex Oyster Perpetual" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">Rolex Day-Date</h3>
              <p className="text-gray-600 mt-2">Oyster Perpetual Day-Date จะสร้างสะพานเชื่อมระหว่างอดีตและอนาคต ระหว่างความสำเร็จที่ได้เกิดขึ้นกับสิ่งที่ยังคงอยู่ต่อไป</p>
              <p className="text-lg font-bold text-gray-900 mt-2">330,792 บาท</p>
              <NavLink to="/products">
                <button className="mt-4 px-6 py-2 bg-green-900 text-white rounded-lg hover:bg-green-700 transition">
                  ดูรายละเอียด
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LuxeticAd;
