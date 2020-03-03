const express = require("express");
const router = express.Router();

const domain = process.env.DOMAIN || "http://localhost:4000";

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
    res.status(500).json({ success: true, msg: "Cannot get data!" });
  }
});

module.exports = router;
