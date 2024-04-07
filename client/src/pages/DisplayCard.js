import React from 'react';
import ArtCard from './ArtCard';
import { gql, useQuery } from '@apollo/client';
import '../Styles/DisplayCard.css'

const GET_ARTIST_ART = gql`
query ArtistByName($artistName: String!) {
  artistByName(artistName: $artistName) {
    art {
      _id
      description
      imageUrl
      size
      price
      title
      
    }
  }
}
`;

export default function DisplayCard({ artistName }) {
  const { loading, error, data } = useQuery(GET_ARTIST_ART, {
    variables: { artistName },
  });

  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data) {
    return (
      <div className="card-grid">
        {data.artistByName?.art?.map((Art) => (
          <ArtCard
          _id={Art._id}
          id={Art._id}
            key={Art._id}
            imgUrl={Art.imageUrl}
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

return null; 
}
