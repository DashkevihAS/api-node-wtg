const express = require('express');
const router = express.Router();

const { addUser, authUser } = require('../controllers/api-users-controller');

// Add new user
router.post('/wtg/signup', addUser);
// Auth user
router.post('/wtg/login', authUser);

module.exports = router;
