const { Art, Artist } = require('../models');

const resolvers = {
  Query: {
    artists: async () => {
      return Artist.find();
    },
    art: async () => {
      return Art.find();
    },
    artist: async (parent, { artistId }) => {
      return Artist.findOne({ _id: artistId });
    },
    singleArtwork: async (parent, { artId }) => {
      return Art.findOne({ _id: artId });
    },
  },

  Mutation: {
    addArtist: async (parent, { artistName }) => {
      return Thought.create({ artistName });
    },
    addArt: async (parent, { artistId, artist, year, description, imageUrl, price }) => {
      return Artist.findOneAndUpdate(
        { _id: artistId },
        {
          $addToSet: { art: {artist, year, description, imageUrl} },
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
  },
};

module.exports = resolvers;
