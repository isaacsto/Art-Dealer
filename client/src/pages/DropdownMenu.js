import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Dropdown.css'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const style = {
    'fontFamily': 'Roboto Mono',
    'textDecoration': 'none',
    'cursor': 'pointer', 
  };

  const dropdownStyle = {
    'position': 'relative',
  };

  const menuStyle = {
    'position': 'absolute',
    'top': '100%',
    'left': 0,
    'backgroundColor': 'white',
    'zIndex': 1,
    'width': '100%',
    'display': isOpen ? 'block' : 'none',
  };

  return (
    <div
      className="dropdown"
      style={dropdownStyle}
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <button className="dropdown-toggle" style={style}>
        Artists
      </button>
      <div className='dropdown-menu' style={menuStyle}>
        <ul>
          <Link to="/IsabellaSaracini">
            <li>Isabella Saracini</li>
          </Link>
          <Link to="/KrisDegirolamo">
            <li>Kris Degirolamo</li>
          </Link>
          <Link to="/KamrynHarmeling">
            <li>Kam Harmeling</li>
          </Link>
          <Link to="/NicholasRiley">
            <li>Nicholas Riley</li>
          </Link>
          <Link to="/Cooth">
            <li>Cooth</li>
          </Link>
          <Link to="/AronDubois">
            <li>Aron Dubois</li>
          </Link>
        </ul>
      </div>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500" rel="stylesheet"></link>

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500" rel="stylesheet"></link>
    </div>
  );
};

export default DropdownMenu;