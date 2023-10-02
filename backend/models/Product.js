const mongoose = require("mongoose");
const schemaObj = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1:27017/Product");

const ProductSchema = new schemaObj({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  desc: String,
  rating: Number,
  category: String,
});

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;
