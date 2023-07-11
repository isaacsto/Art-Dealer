import React from 'react';
import ArtCard from './ArtCard';
import { gql, useQuery } from '@apollo/client';

const GET_ARTIST_ART = gql`
query ArtByMedium($medium: String!) {
  artByMedium(medium: $medium) {
    art {
      _id
      description
      imageUrl
      size
      medium
      price
      title
      year
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
      <div>
        {data.artistByName?.art?.map((Art) => (
          <ArtCard
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
