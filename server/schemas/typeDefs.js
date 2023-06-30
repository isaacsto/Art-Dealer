const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    purchasedArt: [Art]
    firstName: String!
    lastName: String!
  }

  type Art {
    _id: ID!
    title: String!
    year: Date
    description: String!
    imageUrl: String!
    price: Number!
    createdAt: Date
    artist: [Artist]
  }

  type Artist {
    _id: ID!
    artist: String!
    art: [Art]
    }
  }

  type Query {
    artists: [Artist]!
    artist(artistId: ID!): Artist
    art: [Art]!
    singleArtwork(artId: ID!): Artist

  }

  type Mutation {
    addArtist(artistName: String!, art: [Art]): Artist
    addArt(artistId: ID!, title: String!, year: Date, description: String!, imageUrl: String!, price: String!): Artist
    removeArtist(artistId: ID!): Artist
    removeArt(artistId: ID!, artId: ID!): Artist
  }
`;

module.exports = typeDefs;
