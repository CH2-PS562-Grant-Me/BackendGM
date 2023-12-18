const express = require('express')
const router = express.Router()
const { getProfile, updateProfile } = require('../controllers/Profile')
const Multer = require('multer');

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 2 * 1024 * 1024
  }
});

router.get('/:user_id', getProfile)
router.put('/:user_id', multer.single('file'), updateProfile)

module.exports = router