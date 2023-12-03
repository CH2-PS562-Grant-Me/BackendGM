var express = require('express');
var router = express.Router();
const UserController = require('../controllers/User');

/* GET users listing. */
router.post('/register', UserController.create);
router.post('/login', UserController.login);

module.exports = router;
