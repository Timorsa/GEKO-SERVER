const { Schema, model } = require('mongoose');

const schema = {
  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'product'
      },
      quantity: {
        type: Number
      }
    }
  ]
};

const cart_schema = new Schema(schema, { collection: 'cart' });
const Cart = model('cart', cart_schema);

module.exports = Cart;
