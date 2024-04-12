import React from 'react';
import DisplayCard from './DisplayCard';

import '../Styles/ArtistsPages.css';

function Cooth() {
  const artistName = 'Cooth';
  const artistDescription = 'Cooth is an interdeisciplinary artist who has just started their artistic journey with clay. They have discovered a profound fascination in sculpting objects that challenges the perception of hardness by infusing it with a visually soft aesthetic . With each creation, they derive fulfillment, and are humbled by the opportunity to share their artistic expressions.';

  return (
    <div className='artist-page-container'>
      <div className='artist-info'>
        <h2>{artistName}  <a href="https://www.instagram.com/havecooth/" target="blank"><i class="fab fa-instagram"></i></a></h2>
        <p>{artistDescription}</p>
      </div>
      <div className="artist-description">
      <DisplayCard artistName="Cooth" />
      </div>
    </div>
  );
}

export default Cooth;