import React from 'react';

import 'react-slideshow-image/dist/styles.css'
import Slider  from './Slider.js'
import MediumButtons from './MediumButtons.js'
import '../Styles/Header.css'



function Home() {
    return (
      <div className="home-body">
          <Slider/>
          <MediumButtons/>
      </div>

);
}
       
export default Home;