import React from 'react';
import DisplayCard from './DisplayCard';
import Link from '../components/Links';
import '../Styles/ArtistsPages.css';

function Cooth() {
  const artistName = 'Cooth';
  const artistDescription = 'This is a brief description of the artist Cooth.';

  return (
    <div className='art-cards-container'>
      <div className='artist-info'>
        <h2>{artistName}</h2>
        <div>
        <Link link={"https://www.instagram.com/havecooth/"} />
        </div>
        <p>{artistDescription}</p>
      </div>
      <DisplayCard artistName="Cooth" />
    </div>
  );
}

export default Cooth;