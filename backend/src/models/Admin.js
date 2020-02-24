const mongoose = require("mongoose");

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
      expiredAt: Date
    }
  ]
});

const Admin = mongoose.model("Admin", adminSchema, "Admins");

module.exports = Admin;
