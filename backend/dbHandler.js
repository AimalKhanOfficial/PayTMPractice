const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING);

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = new mongoose.model("Users", userSchema);

const signUp = async ({ email, password, firstName, lastName }) => {
  const newUser = new User({ email, password, firstName, lastName });
  await newUser.save();
  return newUser;
};

const signIn = async ({ email, password }) => {
  email = email.toString().toLowerCase();
  return User.findOne({ email, password });
};

module.exports = {
  signUp,
  signIn,
};
