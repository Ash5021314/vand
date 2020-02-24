const express = require("express");
const router = express.Router();
const { admin } = require("../providers");
const { SERVER_ERROR } = require("../utils/response_constants");

router.post("/login", async (req, res) => {
  try {
    let doc = await admin.login(req.body);
    return res.status(doc.statusCode).send(doc);
  } catch (e) {
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR);
  }
});

module.exports = router;
