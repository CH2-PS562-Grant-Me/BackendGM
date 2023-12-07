var express = require('express');
var router = express.Router();
const { addrecipient,
  getrecipientbyId,
  updaterecepient,
  deleterecipientbyId } = require('../controllers/Recipient');

router.post('/recipient', addrecipient)

router.get('/recipient/:id', getrecipientbyId)

router.put('/recipient/:id', updaterecepient)

router.delete('/recipient/:id', deleterecipientbyId)

module.exports = router;