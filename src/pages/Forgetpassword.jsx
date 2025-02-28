import React, { useState } from 'react';
import axios from 'axios'; // นำเข้า axios
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate สำหรับการเปลี่ยนเส้นทาง

const Forgetpassword = () => {
  const [email, setEmail] = useState(''); // สถานะสำหรับอีเมล์ที่กรอก
  const [loading, setLoading] = useState(false); // สำหรับแสดงสถานะกำลังโหลด
  const navigate = useNavigate(); // ใช้เพื่อเปลี่ยนเส้นทางไปหน้า Home

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // เริ่มการโหลด

    try {
      const response = await axios.post('/api/reset-password', { email });
      // แสดง alert เมื่อส่งคำขอสำเร็จ
      alert('ส่งคำขอรีเซ็ตรหัสผ่านสำเร็จ!');
      
      // เปลี่ยนเส้นทางกลับไปที่หน้า Home
      navigate('/'); // เปลี่ยนเส้นทางไปยังหน้า Home
    } catch (error) {
      alert('เกิดข้อผิดพลาดในการส่งคำขอรีเซ็ตรหัสผ่าน');
    } finally {
      setLoading(false); // หยุดการโหลด
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Forgot Your Password?
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-900 text-white py-3 rounded-md hover:bg-green-700 transition"
            disabled={loading} // ปิดการใช้งานปุ่มในขณะที่กำลังโหลด
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgetpassword;
