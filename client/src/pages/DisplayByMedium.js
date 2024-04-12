import React from 'react';
import MediumCard from './MediumCard';
import { gql, useQuery } from '@apollo/client';
import '../Styles/DisplayCard.css'

const GET_MEDIUMS = gql`
  query ArtByMedium($medium: String) {
    artByMedium(medium: $medium) {
     art {
        _id
        description
        imageUrl
        medium
        size
        price
        title
        year
     }
    }
  }
`;

export default function DisplayByMedium({ medium }) {
  const { loading, error, data } = useQuery(GET_MEDIUMS, {
    variables: { medium },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (data) {
    return (
      <div className="card-grid">
        {data.artByMedium?.map((Art) => (
          <MediumCard
            key={Art._id}
            imgUrl={Art.imageUrl}
            title={Art.title}
            year={Art.year}
            medium={Art.medium}
            description={Art.description}
            size={Art.size}
            price={Art.price}
          />
        ))}
      </div>
    );
  }
}