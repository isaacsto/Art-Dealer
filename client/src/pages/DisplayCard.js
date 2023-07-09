import React from 'react';
import ArtCard from './ArtCard';
import { gql, useQuery } from '@apollo/client';


const GET_ART = gql`
  query getArt {
    Art {
      _id
      imageUrl
      title
      year
      description
      size
      price 
    }
  }
`;

export default function DisplayCard() {
  const { loading, error, data } = useQuery(GET_ART);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
     
      {data.art.map((Art) => (
        
          <ArtCard
          key={Art._id}
          imgUrl={Art.imgUrl}
          title={Art.title}
          year={Art.year}
          description={Art.description}
          size={Art.size}
          price={Art.price}
        />
      ))}
    </div>

      );
}
