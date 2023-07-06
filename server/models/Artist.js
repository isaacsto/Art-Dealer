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
