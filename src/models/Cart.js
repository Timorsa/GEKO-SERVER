const { Schema, model } = require('mongoose');

const schema = {
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'product'
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
};

const cart_schema = new Schema(schema, { collection: 'cart' });
const Cart = model('cart', cart_schema);

module.exports = Cart;
