const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    orders: [Order]
    firstName: String!
    lastName: String!
  }

  type Art {
    _id: ID!
    artist: [Artist]
    title: String!
    medium: String
    year: String
    description: String!
    imageUrl: String!
    size: String
    price: Int!
    createdAt: String
  }

  type Artist {
    _id: ID!
    artistName: String!
    art: [Art]
  }
  type Order {
    _id: ID
    purchaseDate: String
    arts: [Art]
  }
  type Checkout {
    session: ID
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
    order(_id: ID!): Order
  checkout(arts: [ID]!): Checkout
  arts(artist: ID, title: String): [Art]
  artByMedium(medium: String): [Art]
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
    addOrder(arts: [ID]!): Order
  updateUser(firstName: String, lastName: String, email: String, password: String): User
  updateArt(_id: ID!, quantity: Int!): Art
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
