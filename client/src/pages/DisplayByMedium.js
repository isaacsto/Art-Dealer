 import React from 'react';
import MediumCard from './MediumCard';
import { gql, useQuery } from '@apollo/client';

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
        variables: { medium }
    });
    console.log(data);

    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error: {error.message}</p>
    }
    if(data) {
        return (
            <div>
                  {data.artByMedium?.art?.map((Art) => (
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
        )
    }
}
