"use strict";

const express = require("express");
const router = express.Router();

const userCtrl = require("./user.Ctrl");

router.post("/", userCtrl.process.register);
router.delete("/:userNo", userCtrl.process.delUser);
router.patch("/profile/:userNo", userCtrl.process.updateUser);

module.exports = router;
