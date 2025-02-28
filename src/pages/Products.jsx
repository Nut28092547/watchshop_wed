import React, { useState } from 'react';
import Layout from "../components/Layout";
import { useCart } from "../pages/CartContext"; // นำเข้าฟังก์ชันจาก context
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Products = () => {
  const { addToCart } = useCart(); // ใช้ฟังก์ชันเพิ่มสินค้าไปยัง CartContext
  const [alertMessage, setAlertMessage] = useState(""); // state สำหรับข้อความแจ้งเตือน
  const productList = [
    {
      id: 1,
      brand: "Rolex",
      name: "Rolex Submariner",
      images: [
        "src/assets/Image/Rolex-submarine01.png",
        "src/assets/Image/Rolex-submariner001.png",
      ],
      price: "27,900 บาท",
    },
    {
      id: 2,
      brand: "Rolex",
      name: "Rolex Daytona",
      images: [
        "src/assets/Image/RolexDaytona.png",
        "src/assets/Image/rolex_daytona_001.jpg",
      ],
      price: "69,900 บาท",
    },
    {
      id: 3,
      brand: "Rolex",
      name: "Rolex GMT-Master II",
      images: [
        "src/assets/Image/Rolex-GMT-Master.png",
        "src/assets/Image/rolex-gmt-master II.jpg",
      ],
      price: "520,000 บาท",
    },

    {
      id: 4,
      brand: "Rolex",
      name: "Rolex Day-Date",
      images: [
        "src/assets/Image/rolex-watches-day-date.jpg",
        "src/assets/Image/Rolex Day-Date001.png",
      ],
      price: "330,792 บาท",
    },

    {
      id: 5,
      brand: "Rolex",
      name: "Rolex Sea-Dweller",
      images: [
        "src/assets/Image/rolex-watches-sea-dweller.jpg",
        "src/assets/Image/rolex-watches-sea-dweller.jpg",
      ],
      price: "1,489,710 บาท",
    },

    {
      id: 6,
      brand: "Rolex",
      name: "Rolex Submariner Date",
      images: [
        "src/assets/Image/Rolex Submariner.jpg",
        "src/assets/Image/Submariner date.png",
      ],
      price: "917,921 บาท",
    },

    {
      id: 7,
      brand: "Rolex",
      name: "Rolex Cosmograph Daytona",
      images: [
        "src/assets/Image/rolex-watches-cosmograph-daytona.jpg",
        "src/assets/Image/Cosmograph Daytona001.png",
      ],
      price: "1,294,968 บาท",
    },
    
    {
      id: 8,
      brand: "Rolex",
      name: "Rolex Yacht-Master",
      images: [
        "src/assets/Image/rolex-watches-yacht-master.jpg",
        "src/assets/Image/Rolex Yacht-Master001.png",
      ],
      price: "257,000 บาท",
    },

    {
      id: 9,
      brand: "Rolex",
      name: "Rolex Explorer",
      images: [
        "src/assets/Image/rolex-watches-explorer.jpg",
        "src/assets/Image/Rolex Explorer001.png",
      ],
      price: "555,000 บาท",
    },
    
    // ... (ข้อมูลสินค้าอื่นๆ)
  ];

  const handleAddToCart = (product) => {
    addToCart(product); // เมื่อกดปุ่ม "BUY" จะเพิ่มสินค้าลงในรถเข็น
    setAlertMessage(`${product.name}  ได้ถูกเพิ่มลงในรถเข็นแล้ว!`); // แสดงข้อความแจ้งเตือน
    setTimeout(() => {
      setAlertMessage(""); // ซ่อนข้อความแจ้งเตือนหลังจาก 3 วินาที
    }, 3000);
  };

  return (
    <Layout>
      <div className="container mx-auto p-5 md:p-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-6 md:mb-10">
          PRODUCTS
        </h1>
        {/* แสดงข้อความแจ้งเตือน */}
        {alertMessage && (
  <div className="alert-message">
    {alertMessage}
  </div>
        )}
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {productList.map((product) => (
            <div key={product.id} className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
              {/* Swiper for Image Carousel */}
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full h-52 md:h-64"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={product.name}
                      className="w-full h-52 md:h-64 object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <h2 className="text-lg md:text-xl font-medium text-gray-600 mt-4">
                {product.brand} - The Leader
              </h2>
              <p className="text-gray-700 text-sm md:text-base">
                Rolex โดดเด่นด้วยคุณภาพพรีเมียม กลไกใหม่ที่มีวัสดุสุดพิเศษ และนวัตกรรมที่ทำให้เป็นผู้นำวงการนาฬิกาหรู
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-700 text-lg">{product.price}</p>
              <button
                onClick={() => handleAddToCart(product)} // เพิ่มสินค้าเมื่อกด
                className="mt-4 inline-block px-4 md:px-6 py-2 bg-green-900 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
              >
                BUY
              </button>
              
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
