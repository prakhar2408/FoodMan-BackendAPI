const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  contact: {
    type: String,
    required: true,
  },
  address: {
    aptName: {
      type: String,

    },
    locality: {
      type: String,

    },
    street: {
      type: String,

    },
    zipCode: {
      type: Number,

    },
  },
  Cart: {
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Dish",
      },
    ],
    totalQuantity: {
      type: String,
    },
    totalAmount: {
      type: String,

    },
  },

});

module.exports = mongoose.model("Customer", customerSchema);
