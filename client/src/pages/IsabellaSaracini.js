import React from 'react';
import DisplayCard from './DisplayCard'
import '../Styles/ArtistsPages.css'

function IsabellaSaracini() {
    const artistName = 'Isabella Saracini';
   const artistDescription = 'This is a brief description of the artist Isabella Saracini.';
   const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

   const createRows = (cardsPerRow) => {
      const rows = [];
      let row = [];

      cards.forEach((card, index) => {
         row.push(<DisplayCard key={index} />);

         if ((index + 1) % cardsPerRow === 0 || index === cards.length - 1) {
            rows.push(
               <div className='art-cards-row' key={index}>
                  {row}
               </div>
            );
            row = [];
         }
      });

      return rows;
   };

   return (
      <div className='art-cards-container'>
         <div className='artist-info'>
            <h2>{artistName}</h2>
            <p>{artistDescription}</p>
         </div>
         {createRows(3)}
      </div>
   );
}

export default IsabellaSaracini; 