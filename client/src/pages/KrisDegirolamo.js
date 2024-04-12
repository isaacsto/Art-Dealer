import React from 'react';
import DisplayCard from './DisplayCard';

import '../Styles/ArtistsPages.css';

function KrisDegirolamo() {
  const artistName = 'Kris Degirolamo';
  const artistDescription = 'Kris Degirolamo is a digital artist whose interests lie in the reproduction of destruction, and what can be created from chaos. They are preoccupied with the process itself and believe the most valuable part of producing artworks is what one learns through that process. ';

  return (
    <div className='artist-page-container'>
      <div className='artist-info'>
        <h2>{artistName}  <a href="https://www.instagram.com/titesqueez/" target="blank"><i className="fab fa-instagram"></i></a></h2>
     
      </div>
     
      <DisplayCard artistName="Kris Degirolamo" />
      <div className="artist-description">
      <p>{artistDescription}</p>
      </div>
    </div>
  );
}

export default KrisDegirolamo;