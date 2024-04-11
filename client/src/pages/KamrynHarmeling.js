import React from 'react';
import DisplayCard from './DisplayCard';

import '../Styles/ArtistsPages.css';

function KamrynHarmeling() {
  const artistName = 'Kamryn Harmeling';
  const artistDescription = 'Kamryn Harming is a folk artist whose whimsical pieces are imbued with a deep sense of emotional significance, often dreamy and draped in an heir of memory and melancholia, her lush brushstrokes depict the grotesque embedded in the romantic. ';

  return (
    <div className='artist-page-container'>
      <div className='artist-info'>
        <h2>{artistName}  <a href="https://www.instagram.com/kam.ryn/" target="blank"><i class="fab fa-instagram"></i></a></h2>
        <p>{artistDescription}</p>
      </div>
      <DisplayCard artistName="Kamryn Harmeling" />
    </div>
  );
}

export default KamrynHarmeling;