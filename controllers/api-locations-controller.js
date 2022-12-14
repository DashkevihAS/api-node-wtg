const Location = require('../models/location');

const handleError = (res, error) => {
  res.status(500).send(error.message);
};

const getLocations = (req, res) => {
  Location.find()
    .sort({ createdAt: -1 })
    .then((locations) => res.status(200).json(locations))
    .catch((err) => handleError(res, err));
};

const getLocation = (req, res) => {
  Location.findById(req.params.id)
    .then((location) => res.status(200).json(location))
    .catch((err) => handleError(res, err));
};

const getSearchLocation = (req, res) => {
  const search = req.params.search.toLowerCase();
  Location.find({
    $or: [{ title: { $regex: search } }, { description: { $regex: search } }],
  })
    .then((event) => res.status(200).json(event))
    .catch((err) => handleError(res, err));
};

module.exports = {
  getLocations,
  getLocation,
  getSearchLocation,
};
