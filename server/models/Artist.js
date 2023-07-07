const { Schema, model } = require('mongoose');
// const { Art } = require('./Art');

const artistSchema = new Schema({
  artistName: {
    type: String,
    required: true,
    trim: true,
  },
  art: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Art'
    }
  ]
});

const Artist = model('Artist', artistSchema);

module.exports = Artist;
