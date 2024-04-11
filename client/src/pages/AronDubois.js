import React from 'react';
import DisplayCard from './DisplayCard';

import '../Styles/ArtistsPages.css';

function AronDubois() {
  const artistName = 'Aron Dubois';
  const artistDescription = 'Aron Dubois finds immense fascination in the enigmatic realm of the esoteric, where hidden connections and mystical patterns intertwine. Specifically, he is captivated by the harmonious forms that emerge in both the vastness of the sea and the arid expanse of the desert and am intrigued by the ways those aesthetics can be harnessed in clay.';

  return (
    <div className='artist-page-container'>
      <div className='artist-info'>
        <h2>{artistName}   <a href="https://www.instagram.com/aronjohndubois/"target="blank"><i class="fab fa-instagram"></i></a></h2>
        <p>{artistDescription}</p>
      </div>
      <DisplayCard artistName="Aron Dubois" />
    </div>
  );
}

export default AronDubois;
