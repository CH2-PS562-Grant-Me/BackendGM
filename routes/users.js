const express = require('express');
const router = express.Router();
const {
  getUsers,
} = require('../controllers/User');

/* GET users listing. */
router.get('/', getUsers)

module.exports = router;