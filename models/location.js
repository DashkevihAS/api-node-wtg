const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  linkImage: {
    type: String,
    required: true,
  },
  linkSite: {
    type: String,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  workBreakEnd: {
    type: String,
    required: true,
  },
  workBreakStart: {
    type: String,
    required: true,
  },
  workTimeEnd: {
    type: String,
    required: true,
  },
  workTimeStart: {
    type: String,
    required: true,
  },
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
