import React from 'react';
import { useLocation } from 'react-router-dom';
import DropdownMenu from '../pages/DropdownMenu.js';
import MediumMenu from '../pages/MediumMenu.js';
import '../Styles/Dropdown.css';

function DropDowns({ currentPage }) {

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`${isHomePage ? 'dropdowns-wrap' : 'dropdowns-wrap-else'}`}>
      <DropdownMenu />
      <MediumMenu />
    </div>
  );
}

export default DropDowns; 
