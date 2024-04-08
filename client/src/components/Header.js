import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import auth from "../utils/auth";
import '../Styles/Header.css';
import Popup from "./Popup.js"; 

import '../Styles/Logo.css'

function Header({ currentPage, handlePageChange }) {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
      setIsPopupOpen(true);
  };

  const isHomePage = location.pathname === "/";

  return (
    <header className="header">
            <div className="logo-wrap"  style={{ border: isHomePage ? 'solid 2px #ffffff' : 'solid 2px #000000' }}>
            <Link to="/" style={{ color: isHomePage ? '#ffffff' : '#000000' }}>ARTLY</Link>
        </div>
      <div className="header-links">
        <div className="right-link">
     
        </div>
        <div className="right-links">
          <Link to="/Contact" className={`header-link ${isHomePage ? 'header-link' : 'header-link-else'}`}>
            Contact Us
          </Link>
          {auth.loggedIn() ? (
            <Link to="/" onClick={auth.logout} className={`header-link ${isHomePage ? 'header-link' : 'header-link-else'}`}>
              Logout
            </Link>
          ) : (
          
            <button onClick={togglePopup} className={`header-link ${isHomePage ? 'header-link' : 'header-link-else'}`}>
              Login/Signup
            </button>
            
          )}
          <Link to="/CartCont" className={`header-link ${isHomePage ? 'header-link' : 'header-link-else'}`}>
            Cart
          </Link>
        </div>
      </div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
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
