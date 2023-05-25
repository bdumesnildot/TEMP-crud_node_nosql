const Product = require('../models/product.model');

const getProduct = (req, res, next) => {
  Product.find()
    .then((items) => res.status(200).json({ products: items }))
    .catch((error) => res.status(400).json({ error }));
};

const getProductById = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((item) => res.status(200).json({ product: item }))
    .catch((error) => res.status(404).json({ error }));
};

const postProduct = (req, res, next) => {
  delete req.body._id;

  const product = new Product({
    ...req.body,
  });

  product
    .save()
    .then(() => res.status(201).json({ product }))
    .catch((error) => res.status(400).json({ error }));
};

const updateProductById = (req, res, next) => {
  Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Modified!' }))
    .catch((error) => res.status(400).json({ error }));
};

const deleteProductById = (req, res, next) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Deleted!' }))
    .catch((error) => res.status(400).json({ error }));
};

module.exports = {
  getProduct,
  getProductById,
  postProduct,
  updateProductById,
  deleteProductById,
};
