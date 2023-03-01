const { Router } = require('express');
const router = Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.get_tasks);
router.get('/:id', taskController.get_task_byid);
router.post('/add', taskController.create_task);
router.post('/:id', taskController.update_task_byid);
router.delete('/:id', taskController.delete_task_byid);

module.exports = router;