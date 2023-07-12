import React from 'react';
import DisplayCard from './DisplayCard';
import Link from '../components/Links';
import '../Styles/ArtistsPages.css';

function KrisDegirolamo() {
  const artistName = 'Kris Degirolamo';
  const artistDescription = 'This is a brief description of the artist Kris Degirolamo.';

  return (
    <div className='art-cards-container'>
      <div className='artist-info'>
        <h2>{artistName}</h2>
        <div>
          <Link link={'https://www.instagram.com/titesqueez/'} />
        </div>
        <p>{artistDescription}</p>
      </div>
      <DisplayCard artistName="Kris Degirolamo" />
    </div>
  );
}

export default KrisDegirolamo;