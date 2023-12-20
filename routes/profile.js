const express = require('express')
const router = express.Router()
const { getProfile, updateProfile } = require('../controllers/Profile')
const Multer = require('multer');

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

const multerErrorHandler = (err, req, res, next) => {
  if (err instanceof Multer.MulterError && err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({
      status: 'fail',
      message: 'File size is too large. Maximum allowed size is 5 MB.',
    });
  }

  next(err);
};


router.get('/:user_id', getProfile)
router.put('/:user_id', multer.single('file'),multerErrorHandler, updateProfile)

module.exports = router