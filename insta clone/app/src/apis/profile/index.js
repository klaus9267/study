"use strict";

const express = require("express");
const router = express.Router();

const profileCtirl = require("./profile.Ctrl");

router.get("/", profileCtirl.process.readProfile);

module.exports = router;
