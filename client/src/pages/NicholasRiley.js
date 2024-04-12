import React from 'react';
import DisplayCard from './DisplayCard';

import '../Styles/ArtistsPages.css';

function NicholasRiley() {
  const artistName = 'Nicholas Riley';
  const artistDescription = 'Nick Riley is a Towson University graduate who left his pursuit of science to follow his passion for art. Inspired by impressionist and expressionist ideals, his artwork reflects his soul and lifetime of experience. While primarily digital, he also indulges in the messy joy of traditional painting, and can often be found lost in thought, gazing into the distance.';

  return (
    <div className='artist-page-container'>
      <div className='artist-info'>
        <h2>{artistName}   <a href="https://www.instagram.com/nickrileyart/" target="blank"><i class="fab fa-instagram"></i></a></h2>
        <p>{artistDescription}</p>
      </div>
      <div className="artist-description">
      <DisplayCard artistName="Nicholas Riley" />
      </div>
    </div>
  );
}

export default NicholasRiley;