import React from "react";
import { Link } from "react-router-dom";
import auth from "../utils/auth";
import '../Styles/Header.css';
import logo from "../Styles/Logo.png";

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      <div className="header-links">
        <div className="left-links">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Artly Logo" width="300" height="350" />
          </Link>
        </div>
        <div className="right-links">
          <Link to="/Contact" className="header-link">
            Contact Us
          </Link>
          {auth.loggedIn() ? (
            <Link to="/" onClick={auth.logout} className="header-link">
              Logout
            </Link>
          ) : (
            <Link to="/Login" className="header-link">
              Login/Signup
            </Link>
          )}
          <Link to="/CartCont" className="header-link">
            Cart
          </Link>
        </div>
      </div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link href="https://fonts.googleapis.com/css2?family=Lobster&family=Rubik+Dirt" rel="stylesheet"></link>
    </header>
  );
}

export default Header;