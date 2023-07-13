import React from 'react';
import DisplayCard from './DisplayCard';
import Link from '../components/Links';
import '../Styles/ArtistsPages.css';

function AronDubois() {
  const artistName = 'Aron Dubois';
  const artistDescription = 'This is a brief description of the artist Aron Dubois.';

  return (
    <div className='art-cards-container'>
      <div className='artist-info'>
        <h2>{artistName}</h2>
        <div>
        <Link link={"https://www.instagram.com/aronjohndubois/"} />
        </div>
        <p>{artistDescription}</p>
      </div>
      <DisplayCard artistName="Aron Dubois" />
    </div>
  );
}

export default AronDubois;
