import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ใช้สำหรับเปลี่ยนหน้า

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    practiceField: '',
    role: '',
    termsAccepted: false,
  });

  const navigate = useNavigate(); // ใช้สำหรับเปลี่ยนหน้า

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    
    // แสดง alert แจ้งว่าลงทะเบียนสำเร็จ
    alert('Registration Successful!');

    // เปลี่ยนเส้นทางไปที่หน้า Home
    navigate('/');
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      practiceField: '',
      role: '',
      termsAccepted: false,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
          <input type="text" name="practiceField" placeholder="Practice Field" value={formData.practiceField} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
          <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
          <div className="flex items-center mb-4">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="mr-2" required />
            <label>I agree to the Terms and Privacy Policy</label>
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
            <button type="button" onClick={handleReset} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
