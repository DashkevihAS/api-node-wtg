const Event = require('../models/event');

const handleError = (res, error) => {
  res.status(500).send(error.message);
};

const getEvents = (req, res) => {
  Event.find()
    .sort({ createdAt: -1 })
    .then((events) => res.status(200).json(events))
    .catch((err) => handleError(res, err));
};

const getEvent = (req, res) => {
  Event.findById(req.params.id)
    .then((event) => res.status(200).json(event))
    .catch((err) => handleError(res, err));
};

const getSearchEvent = (req, res) => {
  const search = req.params.search.toLowerCase();
  Event.find({
    $or: [{ title: { $regex: search } }, { description: { $regex: search } }],
  })
    .then((event) => res.status(200).json(event))
    .catch((err) => handleError(res, err));
};

module.exports = {
  getEvents,
  getEvent,
  getSearchEvent,
};
