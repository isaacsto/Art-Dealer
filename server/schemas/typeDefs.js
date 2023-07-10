const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    
    firstName: String!
    lastName: String!
  }

  type Art {
    _id: ID!
    imageUrl: String!
    title: String!
    year: String
    description: String!
    size: String
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
    artistByName(artistName: String!): Artist
    art: [Art]
    singleArtwork(artId: ID!): Artist
    me: User
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
    login(username: String!, password: String!): Auth
    addUser(firstName: String!, lastName:String!, username: String!, email: String!, password: String!): Auth
    
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
