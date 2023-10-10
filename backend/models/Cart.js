const mongoose = require("mongoose");
const schemaObj = mongoose.Schema;

const CartSchema = new schemaObj({
  userId: { type: String, required: true },
  cartItems: Object,
});

const CartModel = mongoose.model("cart", CartSchema);

module.exports = CartModel;
