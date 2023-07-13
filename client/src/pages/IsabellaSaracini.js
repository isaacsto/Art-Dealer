import React from 'react';
import DisplayCard from './DisplayCard';

import '../Styles/ArtistsPages.css';

function IsabellaSaracini() {
  const artistName = 'Isabella Saracini';
  const artistDescription = 'Isabella Saracini, an artist from Connecticut, holds a BFA in Studio Art and is currently pursuing an MFA at The Ohio State University. Her work has been exhibited nationally and internationally, and she has curated multidisciplinary projects like Moss Creek Farm Open Studios';

  return (
    <div className='art-cards-container'>
      <div className='artist-info'>
        <h2>{artistName}   <a href="https://www.instagram.com/isabellasaraceni_art/?hl=en" target="blank"><i class="fab fa-instagram"></i></a></h2>
        <p>{artistDescription}</p>
      </div>
      <DisplayCard artistName="Isabella Saracini" />
    </div>
  );
}

export default IsabellaSaracini;