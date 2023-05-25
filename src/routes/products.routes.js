const express = require('express');
const router = express.Router();

const authMW = require('../middleware/auth.middleware');
const productCtrl = require('../controllers/product.controllers');

const timeLog = (req, res, next) => {
  console.log('use /api/products/ at time: ', Date.now());
  next();
};
router.use(timeLog);

router.get('/', authMW.decodeToken, productCtrl.getProduct);
router.post('/', authMW.decodeToken, productCtrl.postProduct);

router.get('/:id', authMW.decodeToken, productCtrl.getProductById);
router.put('/:id', authMW.decodeToken, productCtrl.updateProductById);
router.delete('/:id', authMW.decodeToken, productCtrl.deleteProductById);

module.exports = router;
