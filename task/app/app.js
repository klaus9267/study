/** @format */

"use strict";
//모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//라우팅
const home = require("./src/apis");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/views`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", home);

module.exports = app;
