const express = require("express");
const router = express.Router();

const stuff = require("../controllers/stuff.controllers");

const timeLog = (req, res, next) => {
  console.log("use /api/stuff/ at time: ", Date.now());
  next();
};
router.use(timeLog);

router.get("/", stuff.getStuff);
router.post("/", stuff.postStuff);

router.get("/:id", stuff.getStuffById);
router.put("/:id", stuff.updateStuffById);
router.delete("/:id", stuff.deleteStuffById);

module.exports = router;
