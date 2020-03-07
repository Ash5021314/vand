const express = require("express");
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const path = require("path");
const { UNAUTHIORIZED } = require("../utils/response_constants");
const { v4 } = require("uuid");
const multer = require("multer");

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

let imageUploader = async (req, res, next) => {
  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, path.join(__dirname, "/../public", "/images/doors/"));
    },
    filename: function(req, file, cb) {
      cb(null, "IMAGE-" + v4().replace(/-/g, "") + ".jpg");
    }
  });
  multer({
    storage: storage,
    limits: { fileSize: 1000000 }
  }).any();
  // next();
};
module.exports = {
  validator,
  imageUploader
};
