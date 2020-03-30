const { Schema, model } = require('mongoose');

const schema = {
  name: {
    type: String,
    require: true
  },
  categories: [
    {
      type: String,
      require: true
    }
  ]
};

const product_schema = new Schema(schema, { collection: 'department' });
const Department = model('department', product_schema);

module.exports = Department;
