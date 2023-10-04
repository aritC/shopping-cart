const mongoose = require("mongoose");
const schemaObj = mongoose.Schema;

const ProductSchema = new schemaObj({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  desc: String,
  rating: Number,
  category: String,
  image: String,
});

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;
