import React from 'react';
import Layout from '../components/Layout';
import { useCart } from '../pages/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // คำนวณยอดรวมของสินค้าทั้งหมด
  const totalPrice = cart.reduce((sum, item) => {
    const numericPrice = item.price ? parseFloat(item.price.toString().replace(/[^\d.]/g, '')) : 0;
    const quantity = item.quantity ?? 1; // ถ้าไม่มี quantity ให้ใช้ค่าเริ่มต้นเป็น 1
    return sum + (isNaN(numericPrice) ? 0 : numericPrice) * quantity;
  }, 0);

  // คำนวณจำนวนสินค้าทั้งหมด (รวมจำนวนจากทุกรายการ)
  const totalItems = cart.reduce((total, item) => total + (item.quantity ?? 1), 0);

  // ฟังก์ชันลบสินค้าทั้งหมด
  const clearCart = () => {
    cart.forEach(item => {
      removeFromCart(item.id); // ลบสินค้าแต่ละรายการ
    });
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-lg font-semibold border-b pb-2 mb-4">รถเข็นของคุณ</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">ไม่มีสินค้าภายในรถเข็น</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="flex items-center gap-4 border-b py-4">
              {/* รูปสินค้า */}
              <img src={item.images?.[0] || '/default-image.jpg'} alt={item.name} className="w-20 h-20 object-cover" />

              {/* รายละเอียดสินค้า */}
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.brand}</p>
                <p className="text-xs text-gray-500">สี: {item.color}, ขนาด: {item.size}</p>

                {/* ราคาเดิมขีดฆ่า + ราคาใหม่ */}
                <div className="flex items-center gap-2">
                  {item.oldPrice && (
                    <span className="text-gray-400 text-sm line-through">฿{item.oldPrice}</span>
                  )}
                  <span className="text-red-500 font-semibold">฿{item.price}</span>
                </div>
              </div>

              {/* ปุ่มเพิ่ม/ลดจำนวน */}
              <div className="flex items-center border rounded-lg">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-l"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span> {/* แสดงจำนวนสินค้า */}
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-r"
                >
                  +
                </button>
              </div>

              {/* ปุ่มลบ */}
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="text-red-600 hover:text-red-800 text-sm"
              >
                ลบ
              </button>
            </div>
          ))
        )}

        {/* ปุ่มลบสินค้าทั้งหมด */}
        {cart.length > 0 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={clearCart}
              className="py-2 px-6 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 transition"
            >
              ลบสินค้าทั้งหมด ({totalItems} ชิ้น)
            </button>
          </div>
        )}

        {/* ยอดรวม */}
        <div className="flex justify-between items-center font-semibold py-4">
          <span>ยอดรวม</span>
          <span className="text-red-500">฿{totalPrice.toLocaleString()}</span>
        </div>

        {/* ปุ่มชำระเงิน */}
        <button
          className={`w-full py-2 rounded-lg font-semibold ${
            cart.length > 0 ? 'bg-red-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={cart.length === 0}
        >
          ชำระเงิน ({cart.length})
        </button>
      </div>
    </Layout>
  );
};

export default Cart;
