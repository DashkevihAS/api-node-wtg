const express = require('express');
const router = express.Router();

const {
  getEvents,
  getEvent,
  getSearchEvent,
} = require('../controllers/api-events-controller');

// GET all Events
router.get('/wtg/api/v1/events', getEvents);

//Get event by id
router.get('/wtg/api/v1/events/:id', getEvent);

//Search event by string
router.get('/wtg/api/v1/events/search/:search', getSearchEvent);

module.exports = router;
