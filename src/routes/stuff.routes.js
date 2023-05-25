const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff.controllers');

const timeLog = (req, res, next) => {
  console.log('use /api/stuff/ at time: ', Date.now());
  next();
};
router.use(timeLog);

router.get('/', stuffCtrl.getStuff);
router.post('/', stuffCtrl.postStuff);

router.get('/:id', stuffCtrl.getStuffById);
router.put('/:id', stuffCtrl.updateStuffById);
router.delete('/:id', stuffCtrl.deleteStuffById);

module.exports = router;
