import React from "react";
import { Link } from "react-router-dom";

const Home = ({ addToCart }) => {
  const menu = {
    biryani: [
      { id: 1, name: "Lucknowi Biryani", price: 160, image: "src/images/lucknowBiryani.JPG" },
      { id: 2, name: "Kolkata Biryani", price: 170, image: "src/images/kolkataBiryani.JPG" },
      { id: 3, name: "Hyderabadi Biryani", price: 180, image: "src/images/HyderabadiVeg.JPG" }
    ],
    rice: [
      { id: 4, name: "Gobi Fried Rice", price: 130, image: "src/images/gobiFriedRice.jpg" },
      { id: 5, name: "Tawa Pulao", price: 140, image: "src/images/tawaPulao.webp" },
      { id: 6, name: "Kashmiri Pulao", price: 150, image: "src/images/kashmiriPulao.webp" },
      { id: 7, name: "Paneer Fried Rice", price: 160, image: "src/images/paneerFriedRice.jpg" }
    ],
    roti: [
      { id: 8, name: "Tandoori Roti", price: 25, image: "src/images/Tandoori_Roti.jpg" },
      { id: 9, name: "Butter Roti", price: 30, image: "src/images/butterRoti.jpg" },
      { id: 10, name: "Plain Naan", price: 35, image: "src/images/plain_naan.jpg" },
      { id: 11, name: "Butter Naan", price: 40, image: "src/images/butter_naan.jpg" }
    ],
    curry: [
      { id: 12, name: "Chana Masala", price: 100, image: "src/images/chanaMasala.jpg" },
      { id: 13, name: "Dal Makhani", price: 110, image: "src/images/dalMakhani.jpg" },
      { id: 14, name: "Rajma Masala", price: 120, image: "src/images/rajmaMasala.jpg" },
      { id: 15, name: "Mix Veg Curry", price: 130, image: "src/images/mixVeg..jpg" },
      { id: 16, name: "Matar Paneer", price: 135, image: "src/images/matarPaneer.jpg" },
      { id: 17, name: "Kadai Paneer", price: 140, image: "src/images/kadaiPaneer.webp" },
      { id: 18, name: "Soya Chaap Masala", price: 145, image: "src/images/soyaChaapMasala.jpg" },
      { id: 19, name: "Shahi Paneer", price: 150, image: "src/images/shahiPaneer.jpg" }
    ],
    extra_Items: [
      { id: 20, name: "Veg Salad", price: 50, image: "src/images/vegSalad.webp" },
      { id: 21, name: "Mix Veg Raita", price: 60, image: "src/images/vegRaita.webp" },
      { id: 22, name: "Dahi Bhalla", price: 70, image: "src/images/dahiBhalla.jpg" }
    ]
  };

  return (
    <div className="container">
      <h2>🌿 PLANTA FEAST MENU 🌿</h2>
      {Object.keys(menu).map((category) => (
        <div key={category}>
          <br/>
          <h2>{category.toUpperCase()}</h2>
          <ul className="menu-list">
            {menu[category].map((item) => (
              <li key={item.id} className="menu-item">
                <img src={item.image} alt={item.name} className="menu-image" />
            <br/>
                <p>{item.name} - ₹{item.price}</p>
                <button className="btn" onClick={() => addToCart(item)}>ORDER</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <br/><br/>
      <Link className="link" to="/cart">VIEW SAVED RECIPES</Link>
    </div>
  );
};

export default Home;
