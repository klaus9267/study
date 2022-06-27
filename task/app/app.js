/** @format */

"use strict";
//모듈
const express = require("express");
const app = express();

const home = require("./src/apis");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home);

module.exports = app;
