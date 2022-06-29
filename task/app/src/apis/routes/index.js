/** @format */

"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./ToDo.ctrl");

router.get("/", ctrl.output.home);
router.post("/", ctrl.process.addList);
router.post("/", ctrl.process.editList);
router.post("/", ctrl.process.deleteList);

module.exports = router;
