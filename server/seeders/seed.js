const db = require('../config/connection');
const { Artist } = require('../models');
const artistSeeds = require('./artseeds/artists.json');
const isabellaSeed = require('./artseeds/isabellasart.json');
const kamSeed = require('./artseeds/kamart.json');
const krisSeed = require('./artseeds/krisart.json');
const nicSeed = require('./artseeds/nicrileyart.json');

db.once('open', async () => {
  try {
  console.log(artistSeeds);
  await Artist.deleteMany({});

  await Artist.create(artistSeeds);

  for (let i = 0; i < isabellaSeed.length; i++) {
    const artistArt = await Artist.findOneAndUpdate(
      { artistName: "Isabella Saranci" },
      {
        $addToSet: {
          art: id,
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
