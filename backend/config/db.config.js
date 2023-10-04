const mongoose = require("mongoose");

const connectDB = () => {
  const url = "mongodb://127.0.0.1:27017/ShoppingCartApp";

  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected at: ${url}`);
  });

  dbConnection.on("error", (err) => {
    console.error(`DB Connection error: ${err}`);
  });
  return;
};

module.exports = connectDB;
