var express = require('express');
var router = express.Router();
const UserController = require('../controllers/User');

/* GET users listing. */
router.post('/register', UserController.create);

module.exports = router;
