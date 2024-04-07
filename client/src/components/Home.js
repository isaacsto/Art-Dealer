import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'
import Slider  from './Slider.js'
import Header from './Header.js'
import '../Styles/Header.css'



function Home() {
    return (
      <div className="home-body">
          <Slider/>
      </div>

);
}
       
export default Home;