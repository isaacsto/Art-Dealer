import React from 'react';
import DropdownMenu from '../pages/DropdownMenu.js';
import MediumMenu from '../pages/MediumMenu.js';
import '../Styles/Dropdown.css';

function DropDowns({ currentPage }) {

  return (
    <div className="dropdowns-wrap">
      <DropdownMenu />
      <MediumMenu />
    </div>
  );
}

export default DropDowns; 
