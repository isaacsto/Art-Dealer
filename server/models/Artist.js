const { Schema, model } = require('mongoose');
const { artSchema } = require('./Art')

const artistSchema = new Schema({
  artist: {
    type: String,
    required: true,
    trim: true,
  },
  art: [artSchema]
  
  // comments: [
  //   {
  //     commentText: {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       maxlength: 280,
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: (timestamp) => dateFormat(timestamp),
  //     },
  //   },
  // ],
});

const Artist = model('Artist', artistSchema);

module.exports = Artist;
