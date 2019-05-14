const mongoose = require('mongoose');
require('dotenv').config();

const creds = {
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS,
};

module.exports = mongoose.connect(
  `mongodb+srv://${creds.user}:${
    creds.pass
  }@submissions-7ntw0.mongodb.net/test?retryWrites=true`,
  { useNewUrlParser: true },
);
