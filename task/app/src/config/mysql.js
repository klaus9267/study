/** @format */

"use strict";

const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host: "todo-list.c6vfsxsgiw3h.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "doctor978!",
    database: "todo-list",
});

db.connect();

module.exports = db;
