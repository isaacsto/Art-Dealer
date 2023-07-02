import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Dropdown.css'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
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
    </div>
  );
};

export default DropdownMenu;
