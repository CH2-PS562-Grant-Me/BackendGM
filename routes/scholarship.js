const express = require('express');
const router = express.Router();
const { addscholarship, getAllscholarship, getscholarshipbyId, updatescholarsip, deletescholarshipbyId, recomendScholarship } = require('../controllers/Scholarship');

router.post('/', addscholarship)
router.get('/predict', recomendScholarship)
router.get('/', getAllscholarship)
router.get('/:id', getscholarshipbyId)
router.put('/:id', updatescholarsip)
router.delete('/:id', deletescholarshipbyId)

module.exports = router;