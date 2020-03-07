const express = require("express");
const router = express.Router();
const { doors } = require("../providers");
const { SERVER_ERROR } = require("../utils/response_constants");
const { validator, imageUploader } = require("./middleware");
const multer = require("multer");
const path = require("path");
const { v4 } = require("uuid");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, "/../public", "/images/doors/"));
  },
  filename: function(req, file, cb) {
    cb(null, "IMAGE-" + v4().replace(/-/g, "") + ".jpg");
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }
}).single("img");

let domain = process.env.DOMAIN || "http://localhost:4000";
router.get("/", validator, async (req, res) => {
  try {
    const doc = await doors.get();
    return res.status(doc.statusCode).send(doc);
  } catch (e) {
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR);
  }
});

router.post("/", upload, async (req, res) => {
  try {
    req.body.hero_image = `${domain}/images/doors/${req.file.filename}`;
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

module.exports = router;
