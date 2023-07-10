import React from "react";
import { Link } from "react-router-dom";
import auth from "../utils/auth";
import '../Styles/Header.css';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      <div className="header-links">
        <div className="left-links">
          <Link to="/" className="logo-link">
            Artly
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
          <Link to="/Cart" className="header-link">
            Cart
          </Link>
        </div>
      </div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500"
        rel="stylesheet"
      ></link>
    </header>
  );
}

export default Header;