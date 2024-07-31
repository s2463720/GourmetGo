import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Menu");
  const {getTotal} =useContext(StoreContext)

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="Gourmet Go Logo" className="logo" /> </Link>
      <ul className="navbar-menu">
        <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>
          <Link to="/menu">Menu</Link>
        </li>
        <li onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>
          <Link to="/mobile-app">Mobile-App</Link>
        </li>
        <li onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>
          <Link to="/contact-us">Contact us</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'> <img src={assets.basket_icon} alt="" /> </Link>
          <div className={getTotal()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div> 
  )
}
export default Navbar
