import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Dropdown.css'


import DropdownMenu from '../pages/DropdownMenu'
import DisplayByMedium from '../pages/DisplayByMedium';


const style = {
    dropDowns: {
      display: 'flex',
    },
  };

function DropDowns (){

  return (
    <div className="container">
    <div className="toggles" style={style.dropDowns}>
      <DropdownMenu />
      <DisplayByMedium />
    </div>
  </div>
  );
};

export default DropDowns;