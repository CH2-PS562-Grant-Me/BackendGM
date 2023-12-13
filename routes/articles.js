const express = require('express');
const router = express.Router();
const { addarticle,getAllarticle } = require('../controllers/Articles');

router.post('/', addarticle)
router.get('/', getAllarticle)

module.exports = router;