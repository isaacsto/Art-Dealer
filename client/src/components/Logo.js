import React from "react"; 
import { Link, useLocation  } from "react-router-dom";
import '../Styles/Logo.css'

function Logo() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    return(
        <div className="logo-wrap">
            <Link to="/" className={`logo-link ${isHomePage ? 'logo-link' : 'logo-link-else'}`}></Link>
            <Link to="/">ARTLY</Link>

        </div>
    )
}

export default Logo; 