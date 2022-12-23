/* eslint-disable no-console */
const mongoose = require('mongoose');

const Uri = process.env.MONGO_DB;

const mongooseArgs = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

exports.connectDB = () => {
  mongoose.connect(Uri, mongooseArgs, (error) => {
    if (error) console.log(error);
    else {
      console.log(`> 🚀 Ready on http://localhost:${process.env.PORT}`);
    }
  });
};
