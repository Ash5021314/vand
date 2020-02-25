const express = require("express");
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const { UNAUTHIORIZED } = require("../utils/response_constants");

let validator = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    let tokenIsExist = await Admin.find({
      login: "gago",
      tokens: { $elemMatch: { token } }
    });
    if (tokenIsExist && tokenIsExist.length > 0) {
      jwt.verify(token, process.env.JWT_SECRET);
      next();
    } else {
      return res.status(UNAUTHIORIZED.statusCode).send(UNAUTHIORIZED);
    }
  } catch (e) {
    return res.status(UNAUTHIORIZED.statusCode).send(UNAUTHIORIZED);
  }
};
module.exports = validator;
