import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'


const slideImages = [
  {
    url: 'https://i.imgur.com/AaZfrNc.png',
  },
  {
    url: 'https://i.imgur.com/u90zFUU.jpg',
  },
  {
    url: 'https://i.imgur.com/sAgUl83.png',
  },
  {
    url: 'https://i.imgur.com/62jjyL3.png',
  },
  {
    url: "https://i.imgur.com/c0BK1el.png"
  },
  {
    url: "https://i.imgur.com/hL775cl.png"
  }
  
];
function Home() {
    return (
 <div className="home-body">
      <div className="slide-container">
      
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <img style={{ width: '40%', margin: '10px auto', marginTop: '50px', marginBottom: '30px', display: 'block'}} src={slideImage.url} alt='' />
          </div>
        ))}
      </Slide>
    </div>

        </div>
    );
}

export default Home;