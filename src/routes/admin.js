const express = require("express");
const router = express.Router();
const { admin } = require("../providers");
const { SERVER_ERROR } = require("../utils/response_constants");

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    let doc = await admin.login(req.body);
    return res.status(doc.statusCode).send(doc);
  } catch (e) {
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR);
  }
});

router.post("/reg", async (req, res) => {
  try {
    let doc = await admin.reg(req.body);
    return res.status(201).send({ success: true, doc });
  } catch (e) {
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR);
  }
});

router.get("/jwt_check", async (req, res) => {
  try {
    let token = req.headers["authorization"];
    let response = await admin.checkJwt(token);
    return res.status(response.statusCode).send(response);
  } catch (e) {
    return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR);
  }
});

module.exports = router;
