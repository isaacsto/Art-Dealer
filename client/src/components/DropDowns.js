import React from 'react';
import DropdownMenu from '../pages/DropdownMenu.js';
import MediumMenu from '../pages/MediumMenu.js';
import '../Styles/Dropdown.css';

function DropDowns({ currentPage }) {
  const isHomePage = currentPage === '/';

  return (
    <div className={`dropdowns-wrap ${isHomePage ? 'dropdowns-wrap-toggle' : 'other-page-toggle'}`}>
      <DropdownMenu />
      <MediumMenu />
    </div>
  );
}

export default DropDowns; 
