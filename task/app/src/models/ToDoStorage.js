/** @format */

"use strict";

const db = require("../config/mysql");

// class ToDoStorage {
//     static lists = {
//         todo: ["할일1", "할일2"],
//     };
// }

class ToDoStorage {
    static read(todo) {
        db.query("select * from lists", (err, data) => {
            return data;
        });
    }
}

module.exports = ToDoStorage;
