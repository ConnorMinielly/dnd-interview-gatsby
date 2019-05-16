const mongoose = require('mongoose');

const SubmissionsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  class: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  specialties: {
    type: String,
  },
  role: {
    type: String,
  },
  achievement: {
    type: String,
  },
  scenario: {
    type: String,
  },
});

module.exports = mongoose.model('Submission', SubmissionsSchema);
