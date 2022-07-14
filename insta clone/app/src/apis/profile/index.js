"use strict";

const express = require("express");
const router = express.Router();

const profileCtirl = require("./profile.Ctrl");

router.get("/", profileCtirl.output.home);
// router.get("/", profileCtirl.output.login);

router.post("/", profileCtirl.process.readProfile);
// router.patch("/", profileCtirl.process.updateProfile);

module.exports = router;
