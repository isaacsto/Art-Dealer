const { Art, Artist, User, Order } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const stripe = require('stripe')(`${process.env.REACT_APP_SK_STRIPE}`);

const resolvers = {
  Query: {
    artists: async () => {
      return Artist.find({}).populate('art');
    },
    art: async () => {
      return await Art.find({});
    },
    arts: async (parent, { artist, title }) => {
      const params = {};

      if (artist) {
        params.artist = artist;
      }

      if (title) {
        params.title = {
          $regex: title
        };
      }

      return await Art.find(params).populate('artist');
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
    artByMedium: async (parent, { medium }) => {
      const arts = await Art.find({ medium });
      return { art: arts };
    },
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.arts',
          populate: 'artist'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      // console.log(context.headers);
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ arts: args.arts });
      console.log(args, order);
      const line_items = [];

      const { arts } = await order.populate('arts');
      console.log(arts);

      for (let i = 0; i < arts.length; i++) {
        const art = await stripe.products.create({
          // artist: arts[i].artist,
          name: arts[i].title,
          description: arts[i].description,
          images: [`${url}/images/${arts[i].imageUrl}`]
        });

        const price = await stripe.prices.create({
          product: art.id,
          unit_amount: arts[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
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

    addOrder: async (parent, { arts }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ arts });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateArt: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Art.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },

    addOrder: async (parent, { arts }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ arts });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateArt: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Art.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
  },

};

module.exports = resolvers;
