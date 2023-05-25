const express = require("express");
const router = express.Router();

const product = require("../controllers/product.controllers");

const timeLog = (req, res, next) => {
  console.log("use /api/products/ at time: ", Date.now());
  next();
};
router.use(timeLog);

router.get("/", product.getProduct);
router.post("/", product.postProduct);

router.get("/:id", product.getProductById);
router.put("/:id", product.updateProductById);
router.delete("/:id", product.deleteProductById);

module.exports = router;
