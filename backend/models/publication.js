const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const publicationSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  // autres champs si nécessaires
}, {
  timestamps: true,
});

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;
