import React from 'react';
import ArtCard from './ArtCard';

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
        <ArtCard title={artwork.title} 
        size={artwork.size}
        description={artwork.description} year={artwork.year} price={artwork.price}/>
    </div>
  );
}
