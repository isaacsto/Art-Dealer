const db = require('../config/connection');
const { Artist, Art } = require('../models');
const artistSeeds = require('./artseeds/artists.json');
const isabellaSeed = require('./artseeds/isabellasart.json');
const kamSeed = require('./artseeds/kamart.json');
const krisSeed = require('./artseeds/krisart.json');
const nicSeed = require('./artseeds/nicrileyart.json');
const aronSeed = require('./artseeds/arondubois.json');
const coothSeed = require('./artseeds/cooth.json');


db.once('open', async () => {
  try {
    console.log(artistSeeds);
    await Art.deleteMany({});
    await Artist.deleteMany({});

    const isabellaArray = await Art.insertMany(isabellaSeed);
    const kamArray = await Art.insertMany(kamSeed);
    const krisArray = await Art.insertMany(krisSeed);
    const nicArray = await Art.insertMany(nicSeed);
    const aronArray = await Art.insertMany(aronSeed);
    const coothArray = await Art.insertMany(coothSeed);
    await Artist.create(artistSeeds);

    for (let i = 0; i < isabellaArray.length; i++) {
      const isabellaArt = await Artist.findOneAndUpdate(
        { artistName: "Isabella Saracini" },
        {
          $addToSet: {
            art: isabellaArray[i]._id,
          },
        }
      );
    }

    for (let i = 0; i < kamArray.length; i++) {
      const isabellaArt = await Artist.findOneAndUpdate(
        { artistName: "Kamryn Harmeling" },
        {
          $addToSet: {
            art: kamArray[i]._id,
          },
        }
      );
    }

    for (let i = 0; i < krisArray.length; i++) {
      const isabellaArt = await Artist.findOneAndUpdate(
        { artistName: "Kris Degirolamo" },
        {
          $addToSet: {
            art: krisArray[i]._id,
          },
        }
      );
    }

    for (let i = 0; i < nicArray.length; i++) {
      const isabellaArt = await Artist.findOneAndUpdate(
        { artistName: "Nicolas Riley" },
        {
          $addToSet: {
            art: nicArray[i]._id,
          },
        }
      );
    }

    for (let i = 0; i < aronArray.length; i++) {
      const isabellaArt = await Artist.findOneAndUpdate(
        { artistName: "Aron Dubois" },
        {
          $addToSet: {
            art: aronArray[i]._id,
          },
        }
      );
    }

    for (let i = 0; i < coothArray.length; i++) {
      const isabellaArt = await Artist.findOneAndUpdate(
        { artistName: "Cooth" },
        {
          $addToSet: {
            art: coothArray[i]._id,
          },
        }
      );
    }
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
