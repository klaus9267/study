/** @format */

"use strict";

const db = require("../config/mysql");

class lists {
    static todo(todo) {
        db.query("select * from lists", (err, data) => {
            console.log(data);
        });
    }
}

module.exports = db;
