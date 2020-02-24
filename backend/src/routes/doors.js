const express = require("express");
const router = express.Router();
const { doors } = require("../providers");
const { SERVER_ERROR } = require("../utils/response_constants");

router.get("/", async (req, res) => {
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

module.exports = router;
