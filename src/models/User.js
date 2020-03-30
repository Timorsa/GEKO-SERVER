const { Schema, model } = require('mongoose');

const schema = {
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  fullName: {
    type: String,
    require: true
  },
  admin: {
    type: Boolean,
    default: false
  },
  cart: {
    type: Schema.Types.ObjectId,
    ref: 'cart'
  },
  wishlist: {
    type: Schema.Types.ObjectId,
    ref: 'wishlist'
  }
};

const user_schema = new Schema(schema, { collection: 'user' });
const User = model('user', user_schema);

module.exports = User;
