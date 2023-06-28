import React, { useState } from 'react';
import DropdownLink from './DropdownLink';

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
          <DropdownLink to="/ArtistPages/isabellasaracini">
            Isabella Saracini
          </DropdownLink>
          <DropdownLink to="/ArtistPages/krisdegirolamo">
            Kris Degirolamo
          </DropdownLink>
          <DropdownLink to="/ArtistPages/kamrynharmeling">
            Kamryn Harmeling
          </DropdownLink>
          <DropdownLink to="/ArtistPages/nicholasriley">
            Nicholas Riley
          </DropdownLink>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
