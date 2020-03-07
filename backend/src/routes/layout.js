const express = require("express");
const router = express.Router();
const { layout } = require("../providers");
const { SERVER_ERROR } = require("../utils/response_constants");
const multer = require("multer");
const path = require("path");
const { v4 } = require("uuid");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "/../public", "/images/layout/"));
  },
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + v4().replace(/-/g, "") + ".jpg");
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }
}).single("img");

let domain = process.env.DOMAIN || "http://localhost:4000";

router.get("/homepage", async (req, res) => {
  try {
    let data = {
      slider: [
        `${domain}/images/slideImages/images.jpg`,
        `${domain}/images/slideImages/blue_house.jpg`,
        `${domain}/images/slideImages/door-image.jpg`
      ],
      about_image: `${domain}/images/about/about.jpg`
    };
    res.status(200).json(data);
  } catch (e) {
    res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR);
  }
});

router.post("/about_img", upload, async (req, res) => {
  try {
    req.body.about_img = `${domain}/images/layout/${req.file.filename}`;
    const doc = await layout.updateAboutImg(req.body.about_img);
    return res.status(doc.statusCode).send(doc);
  } catch (e) {
    console.log(e);
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR);
  }
});

module.exports = router;
