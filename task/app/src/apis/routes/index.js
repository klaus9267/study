"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./ToDo.ctrl");

router.get("/home", ctrl.process.viewList);
router.post("/", ctrl.process.addList);
router.patch("/", ctrl.process.editList);
router.delete("/", ctrl.process.deleteList);

router.get("/", ctrl.output.home);

module.exports = router;
