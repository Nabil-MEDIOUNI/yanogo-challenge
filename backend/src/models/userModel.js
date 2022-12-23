const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    address: { type: String },
    gender: { type: String },
    dob: { type: String },
    photo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Photo',
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', userSchema);
