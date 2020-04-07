const { Schema, model } = require('mongoose');
const moment = require('moment');

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
  },
  date: {
    type: String,
    default: () => moment().format('DD-MM-YYYY HH:MM')
  },
  address: {
    type: String
  }
};

const cart_schema = new Schema(schema, { collection: 'cart' });
const Cart = model('cart', cart_schema);

module.exports = Cart;
