const express = require("express");
const router = express.Router();

router.route("/").all((req, res) => {
  return res.send("Books router works.");
});

module.exports = { router };
