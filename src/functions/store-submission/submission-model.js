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
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  achievement: {
    type: String,
    required: true,
  },
  scenario: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Submission', SubmissionsSchema);
