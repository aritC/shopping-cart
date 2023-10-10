const express = require("express");
const productRoutes = express.Router();

const ProductModel = require("../models/Product");

// Get all products
productRoutes.get("/products", async (req, res) => {
  try {
    const products = await ProductModel.find();

    if (!products || products.length === 0) {
      return res.status(404).json({ message: "Products not found" });
    }

    return res
      .status(200)
      .json({ message: "Success", totalCount: products.length, products });
  } catch (err) {
    console.error("Database Error: ", err);
    return res.status(500).json({ message: "Server Error" });
  }
});

// Get a product by ID
productRoutes.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Success", product });
  } catch (err) {
    console.error("Database Error: ", err);
    return res.status(500).json({ message: "Server Error" });
  }
});

// Add product to db
productRoutes.post("/", (req, res) => {
  let { name, price, desc, rating, cateogry, image } = req.body;

  let errors = [];
  if (name === undefined || name === "")
    errors.push("Name is a required field and cannot be Empty.");

  if (price === undefined || price === "")
    errors.push("Price is a required field and cannot be Empty.");

  if (image === undefined || image === "")
    errors.push("Image is a required field and cannot be Empty.");

  if (errors.length !== 0)
    return res.status(400).send({ message: "failed", errors });

  let newProduct = new ProductModel({ name, price, desc, rating, cateogry });
  newProduct
    .save()
    .then((product) => {
      return res.status(200).send({ message: "success", product });
    })
    .catch((err) => {
      console.error("Save Error: ", err, newProduct);
      return res.status(500).send({ message: "Server Error" });
    });
});

// Add products in a batch
productRoutes.post("/batch", async (req, res) => {
  const productsToInsert = req.body.products;
  if (!Array.isArray(productsToInsert) || productsToInsert.length === 0) {
    return res.status(400).json({ message: "Invalid or empty batch data" });
  }

  try {
    const insertionPromises = productsToInsert.map(async (productData) => {
      const newProduct = new ProductModel(productData);
      return newProduct.save();
    });

    const insertedProducts = await Promise.allSettled(insertionPromises);

    return res
      .status(200)
      .json({ message: "Batch insert successful", insertedProducts });
  } catch (err) {
    console.error("Batch Insert Error: ", err);
    return res.status(500).json({ message: "Server Error" });
  }
});

module.exports = productRoutes;
