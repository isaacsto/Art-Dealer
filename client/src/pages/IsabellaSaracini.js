import React from 'react';
import DisplayCard from './DisplayCard';
import Link from '../components/Links';
import '../Styles/ArtistsPages.css';

function IsabellaSaracini() {
  const artistName = 'Isabella Saracini';
  const artistDescription = 'This is a brief description of the artist Kris Degirolamo.';

  return (
    <div className='art-cards-container'>
      <div className='artist-info'>
        <h2>{artistName}</h2>
        <div>
        <Link link={"https://www.instagram.com/isabellasaraceni_art/?hl=en"} />
        </div>
        <p>{artistDescription}</p>
      </div>
      <DisplayCard artistName="Isabella Saracini" />
    </div>
  );
}

export default IsabellaSaracini;