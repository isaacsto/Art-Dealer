 import React, { useState } from 'react';
 import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from "./Home"
import Header from "./Header"
/* import Footer from "./Footer" */
import Contact from "./Contact"
import DropdownMenu from '../pages/DropdownMenu';
import MediumMenu from '../pages/MediumMenu'
import Isabella from '../pages/IsabellaSaracini'
import Kamryn from '../pages/KamrynHarmeling'
import Kris from '../pages/KrisDegirolamo'
import Nicholas from '../pages/NicholasRiley'
import Cooth from '../pages/Cooth'
import Aron from '../pages/AronDubois'
import Login from '../pages/Login';
import DigitalArt from '../pages/DigitalArtPage'
import Painting from '../pages/PaintingPage'
import Sculpting from '../pages/SculptingPage'

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});


const style = {
  dropDowns: {
    display: 'flex'
  }
}
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function AppContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <ApolloProvider client={client}>
    <div>
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />

        <div className="container">
          <div className="toggles" style={style.dropDowns}>  <DropdownMenu />
          <MediumMenu /></div>
         
          <Routes>
 
           <Route path="/" element={<Home />} />

            
            <Route path="/Login" element={<Login />} />
            <Route path="/IsabellaSaracini" element={<Isabella />} />
            <Route path="/KamrynHarmeling" element={<Kamryn />} />
            <Route path="/KrisDegirolamo" element={<Kris />} />
            <Route path="/NicholasRiley" element={<Nicholas />} />
            <Route path="/Cooth" element={<Cooth />} />
            <Route path="AronDubois" element={<Aron />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/DigitalArtPages" element={<DigitalArt />} />
            <Route path="/PaintingPage" element={<Painting />} />
            <Route path="/SculptingPage" element={<Sculpting />} />
          </Routes>
        </div>
       {/*  <Footer currentPage={currentPage} handlePageChange={handlePageChange} /> */}
        
      </div>
     
    </Router>
  
     </div>
     </ApolloProvider>
  );
}


  export default AppContainer; 
