

import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../utils/auth";
import '../Styles/Header.css';
import logo from "../Styles/Logo.png";
import Popup from "./Popup"; 

import Home from "./Home"; 

function Header({ currentPage, handlePageChange }) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <header className="header">
      <Home/>
      <div className="header-links">
        <div className="right-links">
          <Link to="/Contact" className="header-link">
            Contact Us
          </Link>
          {auth.loggedIn() ? (
            <Link to="/" onClick={auth.logout} className="header-link">
              Logout
            </Link>
          ) : (
            <button onClick={togglePopup} className="header-link">
              Login/Signup
            </button>
          )}
          <Link to="/CartCont" className="header-link">
            Cart
          </Link>
        </div>
      </div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"/>
      
      {showPopup && (
        <div className="popup">
          <Popup/>
        
        </div>
      )}
    </header>
  );
}

export default Header;
