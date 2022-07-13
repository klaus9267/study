"use strict";

const express = require("express"),
    dotenv = require("dotenv");
// 환경변수 관리 라이브러리

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API 경로 설정
const profile = require("./src/apis/profile");
// user = require("./src/apis/post");

//라우팅
// const home = require("./src/apis/profile");

// API 연결
// app.use("/moae/main", home);
app.use("/moae/main", profile);
// app.use("/moae/user/profile/:userNo", user);

module.exports = app;
