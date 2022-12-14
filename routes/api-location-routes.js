const express = require('express');
const router = express.Router();

const {
  getLocations,
  getLocation,
  getSearchLocation,
} = require('../controllers/api-locations-controller');

// GET all locations
router.get('/wtg/api/v1/locations', getLocations);

//Get location by id
router.get('/wtg/api/v1/locations/:id', getLocation);

//Search location by string
router.get('/wtg/api/v1/locations/search/:search', getSearchLocation);

module.exports = router;
