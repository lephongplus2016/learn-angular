var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/signin", function (req, res, next) {
  res.status(200).send(req.body);
});

module.exports = router;
