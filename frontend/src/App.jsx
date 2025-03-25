import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Rating from "./components/Rating";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {

  const [cart, setCart] = useState([]);
  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));

  return (

    <div className="app-container">
      <Navbar cartLength={cart.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/rating" element={<Rating />} />
      </Routes>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Planta Feast. All rights reserved.</p>
      </footer>
    </div>
    
  );
};

export default App;
