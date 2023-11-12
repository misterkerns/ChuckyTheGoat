const { Router } = require('express');
const router = Router();
const zeroController = require('../controllers/zeroController');

router.get('/', zeroController.get_zeros);
router.get('/:id', zeroController.get_zero_byid);
router.post('/add', zeroController.create_zero);
router.post('/:id', zeroController.update_zero_byid);
router.delete('/:id', zeroController.delete_zero_byid);

module.exports = router;