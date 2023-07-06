const { Schema, model, default: mongoose } = require('mongoose');
const { artSchema } = require('./Art')

const artistSchema = new Schema({
  artistName: {
    type: String,
    required: true,
    trim: true,
  },
  art: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: artSchema
    }
  ]
});

const Artist = model('Artist', artistSchema);

module.exports = Artist;
