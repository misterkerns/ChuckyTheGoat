const { Router } = require('express');
const router = Router();
const productController = require('../controllers/productControllers');

router.get('/', productController.index);
router.get('/products', productController.get_products);
router.get('/products/:id', productController.get_product_byid);
router.post('/products/add', productController.create_product);
router.post('/products/:id', productController.update_product_byid);
router.delete('/products/:id', productController.delete_product_byid);

module.exports = router;