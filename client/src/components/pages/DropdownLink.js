import React from 'react';
import { Link } from 'react-router-dom';

const DropdownLink = ({ to, children }) => {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default DropdownLink;
