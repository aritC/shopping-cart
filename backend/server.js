const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connectDB = require("./config/db.config");
connectDB();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = 5000;

// Products
const productRoutes = require("./routes/productRoutes");
app.use("/api/product", productRoutes);

// User
const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);

// Cart
const cartRoutes = require("./routes/cartRoutes");
app.use("/api/cart", cartRoutes);

app.get("/*", (req, res) => {
  return res.status(404).json({ message: "Wrong API Endpoint!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
