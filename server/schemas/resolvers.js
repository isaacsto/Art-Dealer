const { Art, Artist, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    artists: async () => {
      return Artist.find({}).populate('art');
    },
    art: async () => {
      return await Art.find({});
    },
    artist: async (parent, { artistId }) => {
      return Artist.findOne({ _id: artistId }).populate('art');
    },
    artistByName: async (parent, { artistName }) => {
      return Artist.findOne({ artistName: artistName }).populate('art');
    },
    singleArtwork: async (parent, { artId }) => {
      return Art.findOne({ _id: artId });
    },
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
  },

  Mutation: {
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No user found with this username");
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(user);

      return { token, user };
    },

    addArtist: async (parent, { artistName }) => {
      return Artist.create({ artistName });
    },
    addArt: async (
      parent,
      { artistId, artist, year, description, imageUrl, price }
    ) => {
      return Artist.findOneAndUpdate(
        { _id: artistId },
        {
          $addToSet: { art: { artist, year, description, imageUrl } },
        },
        {
          new: true,
        }
      );
    },
    removeArtist: async (parent, { artistId }) => {
      return Artist.findOneAndDelete({ _id: artistId });
    },
    removeArt: async (parent, { artistId, artId }) => {
      return Artist.findOneAndUpdate(
        { _id: artistId },
        { $pull: { art: { _id: artId } } },
        { new: true }
      );
    },

    // addUser: async (parent, { username, email, password }) => {
    //   const user = await User.create({ username, email, password });
    //   const token = signToken(user);
    //   return { token, user };
    // },
    addUser: async (
      parent,
      { firstName, lastName, username, email, password }
    ) => {
      const user = await User.create({
        firstName,
        lastName,
        username,
        email,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
