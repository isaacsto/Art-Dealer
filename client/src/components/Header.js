import React from 'react';
import { Link } from 'react-router-dom';


function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <div>
                <Link to="/Home">Artly</Link>
            </div>
        </header>


    )
}

export default Header; 