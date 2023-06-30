import React from 'react';
import ArtCard from './ArtCard';

const artwork = {
  title: 'The Edge of Becoming',
  description: 'oil and acrylic on canvas',
  year: '2021',
};

export default function DisplayCard() {
  return (
    <div>
        <ArtCard name={artwork.title} description={artwork.description} id={artwork.year} />
    </div>
  );
}
