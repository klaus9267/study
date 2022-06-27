/** @format */

"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./ToDo.ctrl");

router.get("/", ctrl.output.home);
router.post("/", ctrl.process.add);

module.exports = router;
