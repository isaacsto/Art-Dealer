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
  
}

  return (
    <div className="dropdown" style={style}>
      <button className="dropdown-toggle" onClick={toggleDropdown} style={style}>
        Artists
      </button>
      <div className='dropdown-menu'>
        {isOpen && (
          <ul>
            <Link to="/IasbellaSaracini">
             <li>Isabella Saracini </li>
            </Link>
            <Link to="/KrisDegirolamo">
            <li>Kris Degirolamo </li>
            </Link>
            <Link to="/KamrynHarmeling">
            <li>Kamryn Harmeling </li>
            </Link>
            <Link to="/NicholasRiley">
            <li>Nicholas Riley </li>
            </Link>
          </ul>
        )}
      </div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500" rel="stylesheet"></link>
    </div>
  );
};

export default DropdownMenu;
