/** @format */

"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./ToDo.ctrl");

router.get("/", ctrl.home);

module.exports = router;
