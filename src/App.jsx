import React from 'react'
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Cart from './pages/Cart';
import { CartProvider } from './pages/CartContext'; // นำเข้าจาก CartContext
import Login from './pages/Login';
import Register from './pages/Register';
import Forgetpassword from './pages/Forgetpassword';

const App = () => {
  return (
    <CartProvider> {/* ห่อทั้งหมดด้วย CartProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
