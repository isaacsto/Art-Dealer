import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Dropdown.css'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [leaveTimeout, setLeaveTimeout] = useState(null);

  const handleMouseEnter = () => {
    clearTimeout(leaveTimeout);
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 200); 
    setLeaveTimeout(timeout);
  };


  const dropdownStyle = {
    'position': 'relative',
  };

  const menuStyle = {
    'position': 'absolute',
    'backgroundColor': 'rgba(0, 0, 0, 0.5)',
    'zIndex': 999,
    'width': 'fit-content',
    'display': isOpen ? 'block' : 'none',
    padding: '10px',
    borderRadius: '5px'
  };


  return (
    <div
      className="dropdown"
      style={dropdownStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="dropdown-toggle">
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