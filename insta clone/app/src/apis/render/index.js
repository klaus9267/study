"user strict";

const express = require("express");
const router = express.Router();

const renderCtirl = require("./render.Ctrl");

router.get("/", renderCtirl.output.home);
router.get("/redirect", renderCtirl.output.redirect);

module.exports = router;
