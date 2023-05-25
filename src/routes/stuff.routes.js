const express = require('express');
const router = express.Router();

const authMW = require('../middleware/auth.middleware');
const stuffCtrl = require('../controllers/stuff.controllers');

const timeLog = (req, res, next) => {
  console.log('use /api/stuff/ at time: ', Date.now());
  next();
};
router.use(timeLog);

router.get('/', authMW.decodeToken, stuffCtrl.getStuff);
router.post('/', authMW.decodeToken, stuffCtrl.postStuff);

router.get('/:id', authMW.decodeToken, stuffCtrl.getStuffById);
router.put('/:id', authMW.decodeToken, stuffCtrl.updateStuffById);
router.delete('/:id', authMW.decodeToken, stuffCtrl.deleteStuffById);

module.exports = router;
