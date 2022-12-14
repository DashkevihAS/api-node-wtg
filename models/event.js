const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  finishDatetime: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  linkEventSite: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  startDatetime: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  userCreatedId: {
    type: String,
    required: true,
  },
  location: {
    type: Object,
    required: true,
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
