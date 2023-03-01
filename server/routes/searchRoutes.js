const { Router } = require('express');
const router = Router();
const searchController = require('../controllers/searchController');

router.get('/', searchController.get_searches);
router.get('/:id', searchController.get_search_byid);
router.post('/add', searchController.create_search);
router.post('/:id', searchController.update_search_byid);
router.delete('/:id', searchController.delete_search_byid);

module.exports = router;