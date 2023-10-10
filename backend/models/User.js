const mongoose = require("mongoose");
const schemaObj = mongoose.Schema;

const UserSchema = new schemaObj({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
