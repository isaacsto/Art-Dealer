import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Artists
      </button>
      {isOpen && (
        <ul className="dropdown-menu-items">
          <Link to="./IsabellaSaracini">
            Isabella Saracini
          </Link>
          <Link to="./KrisDegirolamo">
            Kris Degirolamo
          </Link>
          <Link to="./KamrynHarmeling">
            Kamryn Harmeling
          </Link>
          <Link to="./NicholasRiley">
            Nicholas Riley
          </Link>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
