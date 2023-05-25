const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/product.controllers');

const timeLog = (req, res, next) => {
  console.log('use /api/products/ at time: ', Date.now());
  next();
};
router.use(timeLog);

router.get('/', productCtrl.getProduct);
router.post('/', productCtrl.postProduct);

router.get('/:id', productCtrl.getProductById);
router.put('/:id', productCtrl.updateProductById);
router.delete('/:id', productCtrl.deleteProductById);

module.exports = router;
