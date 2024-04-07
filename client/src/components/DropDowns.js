import React, { useState } from 'react';

import '../Styles/Dropdown.css'


import DropdownMenu from '../pages/DropdownMenu.js'
import MediumMenu from '../pages/MediumMenu.js'



function DropDowns (){

  return (
    <div className="drop-downs-wrap">
      <DropdownMenu />
      <MediumMenu />
    </div>
  
  );
};

export default DropDowns;