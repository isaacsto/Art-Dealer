import React from 'react';
import DisplayByMedium from './DisplayByMedium'
import '../Styles/ArtistsPages.css'

function Sculpting() {
   const medium = 'sculpture';
 
   return (
    <div className='art-cards-container'>
    <div className='artist-info'>
      <h2>{medium}</h2>
    </div>
    <DisplayByMedium medium={medium} />
  </div>
   );
 }
 
 export default Sculpting;