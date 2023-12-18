const express = require('express');
const { recomendScholarship } = require('../controllers/Predict');
const router =express.Router();

router.post('/', recomendScholarship)

module.exports = router;