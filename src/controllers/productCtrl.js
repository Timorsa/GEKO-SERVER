const Product = require('../models/Product');

module.exports = {
  async addProd(req, res, next) {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (err) {
      next({
        status: 500,
        message: 'failed to add product'
      });
    }
  },
  async getAll(req, res, next) {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (err) {
      next({
        status: 500,
        message: 'failed to get products'
      });
    }
  },
  async getOne(req, res, next) {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      next({
        status: 500,
        message: 'failed to get product'
      });
    }
  },
  async getDep(req, res, next) {
    try {
      const products = await Product.find({
        department: req.params.department
      });
      res.status(200).json(products);
    } catch (err) {
      next({
        status: 500,
        message: 'failed to get department'
      });
    }
  },
  async getCat(req, res, next) {
    try {
      const products = await Product.find({
        $and: [
          {
            department: req.params.department
          },
          {
            category: req.params.category
          }
        ]
      });
      res.status(200).json(products);
    } catch (err) {
      next({
        status: 500,
        message: 'failed to get prods'
      });
    }
  },
  async editProd(req, res, next) {
    try {
      const product = await Product.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );
      res.status(200).json(product);
    } catch (err) {
      next({
        status: 500,
        message: 'failed to update prods'
      });
    }
  },
  async delProd(req, res, next) {}
};
