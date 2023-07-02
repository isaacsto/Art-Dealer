import React from 'react';
import ArtCard from './ArtCard';
/* const artSeeds = require('../../../../server/seeders/artseeds/isabellasart.json') */;

/* 
replace the following with dynamic data */
const artwork = {
  title: 'The Edge of Becoming',
  size: '30"x36"',
  description: 'oil and acrylic on canvas',
  year: '2021',
  price: '900.00'
};

export default function DisplayCard() {
  return (
    <div>
      {/* {artSeeds.map((artwork) => ( */}
        <ArtCard
          key={artwork.id}
          title={artwork.title}
          year={artwork.year}
          description={artwork.description}
          size={artwork.size}
          price={artwork.price}
        />
    </div>
  ); 
}
