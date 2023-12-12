const express = require('express');
const router = express.Router();
const { addrecipient,
  getAllRecipients,
  getrecipientbyId,
  updaterecepient,
  deleterecipientbyId } = require('../controllers/Recipient');

router.post('/', addrecipient)
router.get('/', getAllRecipients)
router.get('/:id', getrecipientbyId)
router.put('/:id', updaterecepient)
router.delete('/:id', deleterecipientbyId)

module.exports = router;