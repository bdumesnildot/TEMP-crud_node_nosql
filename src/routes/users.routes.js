const express = require("express");
const router = express.Router();

const users = require("../controllers/users.controllers");

const timeLog = (req, res, next) => {
  console.log("use /api/users/ at time: ", Date.now());
  next();
};

router.use(timeLog);
router.get("/", users.getUsers);
router.post("/", users.postUser);

router.get("/:id", users.getUsersById);
router.put("/:id", users.updateUserById);
router.put("/:id", users.deleteUserById);

module.exports = router;
