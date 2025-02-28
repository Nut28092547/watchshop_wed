// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// สร้าง Context สำหรับรถเข็น
const CartContext = createContext();

// สร้าง CartProvider สำหรับห่อแอป
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // ใช้ cart แทน

  // ฟังก์ชันเพิ่มสินค้าลงในรถเข็น
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // ฟังก์ชันลบสินค้าจากรถเข็น
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const value = {
    cart, // ใช้ cart ตรงๆ
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Hook สำหรับใช้งาน CartContext
export const useCart = () => {
  return useContext(CartContext);
};
