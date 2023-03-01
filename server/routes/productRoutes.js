const { Router } = require('express');
const router = Router();
const productController = require('../controllers/productController');

router.get('/', productController.get_products);
router.get('/:id', productController.get_product_byid);
router.post('/add', productController.create_product);
router.post('/:id', productController.update_product_byid);
router.delete('/:id', productController.delete_product_byid);

module.exports = router;