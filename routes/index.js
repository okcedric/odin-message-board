const { DateTime } = require("luxon");
const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Salut tout le monde !",
    user: "Sophie",
    added: new Date("2023-12-17T12:00:00").toLocaleString(
      DateTime.DATETIME_FULL
    ),
  },
  {
    text: "Quelqu'un connait un bon resto à Toulouse ?",
    user: "Maxime",
    added: new Date("2023-12-16T15:30:00").toLocaleString(
      DateTime.DATETIME_FULL
    ),
  },
  {
    text: "Vive le design minimaliste !",
    user: "Julie",
    added: new Date("2023-12-15T09:45:00").toLocaleString(
      DateTime.DATETIME_FULL
    ),
  },
  {
    text: "Elementor c'est top pour WordPress.",
    user: "Lucas",
    added: new Date("2023-12-14T20:20:00").toLocaleString(
      DateTime.DATETIME_FULL
    ),
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
  const now = new Date().toLocaleString(DateTime.DATETIME_FULL);
  const post = {
    text: req.body.text,
    user: req.body.user,
    added: now,
  };
messages.unshift(post);
  res.redirect("/");
});
module.exports = router;
