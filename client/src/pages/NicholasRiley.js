import React from 'react';
import DisplayCard from './DisplayCard';
import Link from '../components/Links';
import '../Styles/ArtistsPages.css';

function NicholasRiley() {
  const artistName = 'Nicholas Riley';
  const artistDescription = 'This is a brief description of the artist Nicholas Riley.';
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const createRows = (cardsPerRow) => {
    const rows = [];
    let row = [];

    cards.forEach((card, index) => {
      row.push(<DisplayCard key={index} />);

      if ((index + 1) % cardsPerRow === 0 || index === cards.length - 1) {
        rows.push(
          <div className="art-cards-row" key={index}>
            {row}
          </div>
        );
        row = [];
      }
    });

    return rows;
  };

  return (
    <div className="art-cards-container">
      <div className="artist-info">
        <h2>{artistName}</h2>
        <div>
          <Link link={'https://www.instagram.com/nickrileyart/'} />
        </div>
        <p>{artistDescription}</p>
      </div>

     {/*  <div className="art-cards">{createRows(3)}</div> */}
      <DisplayCard artistName="Nicholas Riley"/>
    </div>
  );
}

export default NicholasRiley;