const express = require('express');
const router = express.Router();
const { addscholarship, getAllscholarship, getscholarshipbyId, updatescholarsip, deletescholarshipbyId } = require('../controllers/Scholarship');

router.post('/', addscholarship)
router.get('/', getAllscholarship)
router.get('/:id', getscholarshipbyId)
router.put('/:id', updatescholarsip)
router.delete('/:id', deletescholarshipbyId)

module.exports = router;