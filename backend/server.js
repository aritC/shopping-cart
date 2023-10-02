const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = 5000;
const ProductModel = require("./models/Product");

// Get a product by ID
app.get("/api/product/:id", async (req, res) => {
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

// Get all products
app.get("/api/products", async (req, res) => {
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

// Add product to db
app.post("/api/product", (req, res) => {
  let { name, price, desc, rating, cateogry } = req.body;

  let errors = [];
  if (name === undefined || name === "")
    errors.push("Name Is a required field and cannot be Empty.");

  if (price === undefined || price === "")
    errors.push("Price Is a required field and cannot be Empty.");

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

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
