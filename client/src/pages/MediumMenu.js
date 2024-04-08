import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Dropdown.css';

const MediumMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [leaveTimeout, setLeaveTimeout] = useState(null);

  const handleMouseEnter = () => {
    clearTimeout(leaveTimeout);
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 200); // Adjust the delay time as needed
    setLeaveTimeout(timeout);
  };

  const style = {
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const dropdownStyle = {
    position: 'relative',
  };

  const menuStyle = {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    width: 'fit-content',
    display: isOpen ? 'block' : 'none', 
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
      <button className="dropdown-toggle" style={style}>
        Mediums
      </button>
      <div className="dropdown-menu" style={menuStyle}>
        <ul>
          <Link to="/SculptingPage">
            <li>Sculpture</li>
          </Link>
          <Link to="/PaintingPage">
            <li>Painting</li>
          </Link>
          <Link to="/DigitalArtPages">
            <li>Digital Art</li>
          </Link>
        </ul>
      </div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500"
        rel="stylesheet"
      ></link>
    </div>
  );
};

export default MediumMenu;