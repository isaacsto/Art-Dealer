import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';



function Header({currentPage, handlePageChange}) {
    return (
        <header>
        <div>
            <li>
        <Link to="/Home">Artly</Link>
        </li>
       {/*  <DropdownMenu /> */}
        </div>
        </header>


    )
}

export default Header; 