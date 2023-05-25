const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/user.controllers');

const timeLog = (req, res, next) => {
  console.log('use /api/users/ at time: ', Date.now());
  next();
};
router.use(timeLog);

router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

module.exports = router;
