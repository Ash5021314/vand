const express = require("express");
const router = express.Router();
const { doors } = require("../providers");
const { SERVER_ERROR } = require("../utils/response_constants");
const auth_mid = require("./middleware");
const multer = require("multer");
const path = require("path");
const uuid = require("uuid/v4");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, "/../public", "/images/"));
  },
  filename: function(req, file, cb) {
    cb(null, "IMAGE-" + uuid().replace(/-/g, "") + ".jpg");
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }
}).single("img");

router.get("/", auth_mid, async (req, res) => {
  try {
    const doc = await doors.get();
    return res.status(doc.statusCode).send(doc);
  } catch (e) {
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR);
  }
});

router.post("/", async (req, res) => {
  try {
    const doc = await doors.create(req.body);
    return res.status(doc.statusCode).send(doc);
  } catch (e) {
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const doc = await doors.updateDoc(req.params.id, req.body);
    return res.status(doc.statusCode).send(doc);
  } catch (e) {
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const doc = await doors.delete(req.params.id);
    return res.status(doc.statusCode).send(doc);
  } catch (e) {
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR);
  }
});

router.post("/upload_single", upload, async (req, res) => {
  console.log("route");
  res.status(200).json({ success: true, msg: " Image Uploaded!" });
});

module.exports = router;
