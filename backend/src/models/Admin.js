const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  tokens: [
    {
      token: { type: String, default: null },
      expiredAt: Number
    }
  ]
});

adminSchema.pre("save", function(next) {
  let salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
  next();
});

const Admin = mongoose.model("Admin", adminSchema, "Admins");

module.exports = Admin;
