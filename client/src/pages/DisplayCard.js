import React from 'react';
import ArtCard from './ArtCard';
import '../Styles/DisplayCard.css'
import seeders from '../seeders/artseeds/isabellasart.json'; 

function DisplayCard() {
  return (
    <div className='card-grid'>
      {seeders.map((seeder, index) => (
        <div key={index} className="grid-item">
          <ArtCard
            id={index} // Assuming each seeder has a unique ID
            imgUrl={seeder.imageUrl}
            title={seeder.title}
            year={seeder.year}
            description={seeder.description}
            size={seeder.size}
            price={seeder.price}
          />
        </div>
      ))}
    </div>
  );
}

export default DisplayCard;
