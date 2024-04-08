import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
import '../Styles/Header.css';
import DropDowns from './DropDowns.js';


const slideImages = [
  {
    url: 'https://i.imgur.com/zCMhagJ.jpg',
  },
  {
    url: 'https://i.imgur.com/fedNpXu.jpg',
  },
  {
    url: 'https://i.imgur.com/sAgUl83.png',
  },
  {
    url: 'https://i.imgur.com/0kcqorc.jpg',
  },
  {
    url: 'https://i.imgur.com/4wR7TxC.jpg',
  },

  {
    url: 'https://i.imgur.com/noqowdL.jpg',
  },


];
function Slider() {
    return (
    
      <div className="slide-container">
      
          <div className="tagline"><strong>Artly </strong>
          Discover New Artists</div>
     
          <Slide>
              {slideImages.map((slideImage, index) => (
                  <div key={index}>
                     <div className="tinted"></div> 
                      <img style={{ width: '100%', height: '600px', display: 'block', zIndex: '-1'}} src={slideImage.url} alt='' />
                  </div>
              ))}
             
          </Slide>
          
      </div>
 
);
}
       
export default Slider;