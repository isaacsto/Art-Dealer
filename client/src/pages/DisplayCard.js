 import React from 'react';
import ArtCard from './ArtCard';
import { gql, useQuery } from '@apollo/client';


const GET_ART = gql`
  query getArt {
    art {
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

console.log(data)

  if (data) {
    return (
      <div>
     
      {data.art.map((Art) => (
        
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

    )
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

}


/* import React from 'react';
import ArtCard from './ArtCard';
import { gql, useQuery } from '@apollo/client';

const GET_ARTIST_ART = gql`
  query getArtistArt($artist: String!) {
    artist(artistName: $artist) {
      art {
        _id
        imageUrl
        title
        year
        description
        size
        price 
      }
    }
  }
`;

export default function DisplayCard({ artist }) {
  const { loading, error, data } = useQuery(GET_ARTIST_ART, {
    variables: { artist },
  });

  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data && data.artist) {
    return (
      <div>
        {data.artist.art.map((Art) => (
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
 */