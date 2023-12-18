const { DateTime } = require("luxon");
const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Public Messages", messages });
});
router.get("/new", function (req, res, next) {
  res.render("new", { title: "Add a public message" });
});
router.post("/new", function (req, res, next) {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  const post = {
    text: req.body.text,
    user: req.body.user,
    added: DateTime.now().toLocaleString(DateTime.DATETIME_FULL),
  };
messages.push(post);
  res.redirect("/");
});
module.exports = router;
