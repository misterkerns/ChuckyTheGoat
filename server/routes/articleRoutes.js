const { Router } = require('express');
const router = Router();
const articleController = require('../controllers/articleController');

router.get('/', articleController.get_articles);
router.get('/:id', articleController.get_article_byid);
router.post('/add', articleController.create_article);
router.post('/:id', articleController.update_article_byid);
router.delete('/:id', articleController.delete_article_byid);

module.exports = router;