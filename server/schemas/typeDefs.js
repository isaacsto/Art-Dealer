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
    year: String
    description: String!
    imageUrl: String!
    price: Int!
    createdAt: String
    artist: [Artist]
  }

  type Artist {
    _id: ID!
    artist: String!
    art: [Art]
  }

  type Query {
    artists: [Artist]!
    artist(artistId: ID!): Artist
    art: [Art]!
    singleArtwork(artId: ID!): Artist
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    addArtist(artistName: String!, art: [String]): Artist
    addArt(
      artistId: ID!
      title: String!
      year: String
      description: String!
      imageUrl: String!
      price: String!
    ): Artist
    removeArtist(artistId: ID!): Artist
    removeArt(artistId: ID!, artId: ID!): Artist
    addUser(username: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
