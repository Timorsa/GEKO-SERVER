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

const wishlist_schema = new Schema(schema, { collection: 'wishlist' });
const WishList = model('wishlist', wishlist_schema);

module.exports = WishList;
