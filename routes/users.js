var express = require('express');
var router = express.Router();
const UserController = require('../controllers/User');

/* GET users listing. */
router.post('/register', UserController.create);
router.post('/login', UserController.login);
router.get('/users', UserController.readAll)

module.exports = router;