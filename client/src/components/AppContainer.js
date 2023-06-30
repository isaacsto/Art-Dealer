import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from "./pages/Home"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import DropdownMenu from './pages/DropdownMenu';




function AppContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <DropdownMenu />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </Router>
  );
}

  export default AppContainer;