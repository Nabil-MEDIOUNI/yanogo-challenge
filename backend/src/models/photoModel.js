const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema(
  {
    url: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Photo', photoSchema);
