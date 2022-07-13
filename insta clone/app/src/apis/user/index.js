"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./ToDo.ctrl");

router.get("/home", ctrl.process.viewList);

router.get("/", ctrl.output.home);

module.exports = router;
