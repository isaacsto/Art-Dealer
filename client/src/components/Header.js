import React from 'react';
import { Link } from 'react-router-dom';


function Header({currentPage, handlePageChange}) {
    return (
        <header>
        <div>
            <li>
        <Link to="/Home">Artly</Link>
        </li>
        </div>
        </header>


    )
}

export default Header; 