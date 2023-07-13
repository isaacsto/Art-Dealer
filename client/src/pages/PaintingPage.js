import React from 'react';
import DisplayByMedium from './DisplayByMedium'
import '../Styles/ArtistsPages.css'

function Painting() {
   const medium = 'Painting';
 
   return (
    <div className='art-cards-container'>
    <div className='artist-info'>
      <h2>{medium}</h2>
    </div>
    <DisplayByMedium medium={medium} />
  </div>
   );
 }
 
 export default Painting;
 