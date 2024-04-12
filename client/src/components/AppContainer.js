import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../Styles/AppCont.css';
import Contact from './Contact';

import Isabella from '../pages/IsabellaSaracini';
import Kamryn from '../pages/KamrynHarmeling';
import Kris from '../pages/KrisDegirolamo';
import Nicholas from '../pages/NicholasRiley';
import Cooth from '../pages/Cooth';
import Aron from '../pages/AronDubois';
import Login from '../pages/Login';
import DigitalArt from '../pages/DigitalArtPage';
import Painting from '../pages/PaintingPage';
import Sculpting from '../pages/SculptingPage';
import CartCont from './CartCont';
import Footer from './Footer';
import Success from '../pages/Success';
import Home from './Home'; 
import Header from '../components/Header'; 

import '../Styles/AppCont.css';



function AppContainer() {
  const [currentPage, setCurrentPage] = useState('Header');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="page-outline">
      <Router>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />

        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/IsabellaSaracini" element={<Isabella />} />
          <Route path="/KamrynHarmeling" element={<Kamryn />} />
          <Route path="/KrisDegirolamo" element={<Kris />} />
          <Route path="/NicholasRiley" element={<Nicholas />} />
          <Route path="/Cooth" element={<Cooth />} />
          <Route path="/AronDubois" element={<Aron />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/DigitalArtPages" element={<DigitalArt />} />
          <Route path="/PaintingPage" element={<Painting />} />
          <Route path="/SculptingPage" element={<Sculpting />} />
          <Route path="/CartCont" element={<CartCont />} />
          <Route path="/Success" element={<Success />} />
          {/* Render other routes here */}
        </Routes>
  
      </Router>
      <script src="https://kit.fontawesome.com/1498603cf1.js" crossOrigin="anonymous"></script>
      <Footer />
    </div>
  );
}

export default AppContainer;
