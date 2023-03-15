const { Router } = require('express');
const router = Router();
const noteController = require('../controllers/noteController');

router.get('/', noteController.get_notes);
router.get('/:id', noteController.get_note_byid);
router.post('/add', noteController.create_note);
router.post('/:id', noteController.update_note_byid);
router.delete('/:id', noteController.delete_note_byid);

module.exports = router;