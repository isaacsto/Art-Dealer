import React from 'react';
import DisplayCard from './DisplayCard';
import Link from '../components/Links';
import '../Styles/ArtistsPages.css';

function NicholasRiley() {
  const artistName = 'Nicholas Riley';
  const artistDescription = 'This is a brief description of the artist Nicholas Riley.';

  return (
    <div className='art-cards-container'>
      <div className='artist-info'>
        <h2>{artistName}</h2>
        <div>
        <Link link={'https://www.instagram.com/nickrileyart/'} />
        </div>
        <p>{artistDescription}</p>
      </div>
      <DisplayCard artistName="Nicholas Riley" />
    </div>
  );
}

export default NicholasRiley;