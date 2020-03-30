const { Schema, model } = require('mongoose');

// category val in front
const schema = {
  sku: {
    type: String,
    require: true,
    unique: true
  },
  images: [
    {
      type: String,
      require: true
    }
  ],
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  brand: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  department: {
    type: String,
    require: true
  },
  price: {
    type: Number
  },
  color: {
    type: String,
    require: true
  },
  inventory: [
    {
      quantity: {
        type: Number,
        require: true
      },
      variant: {
        type: String
      }
    }
  ],
  sale: {
    type: Boolean,
    default: false
  },
  oldPrice: {
    type: Number
  }
};

const product_schema = new Schema(schema, { collection: 'product' });
const Product = model('product', product_schema);

module.exports = Product;
