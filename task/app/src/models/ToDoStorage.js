/** @format */

"use strict";

const db = require("../config/mysql");

// class ToDoStorage {
//     static lists = {
//         todo: ["할일1", "할일2"],
//     };
// }

class ToDoStorage {
    // static read(todo) {
    //     db.query("select * from lists", (err, data) => {});
    // }

    static async addList(content) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO lists(todo) VALUES(?);";
            db.query(query, [content], (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }

    static async deleteList(content) {
        return new Promise((resolve, reject) => {
            const query = "DELETE FROM lists WHERE todo = ?;";
            db.query(query, [content], (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }

    static async editList(edit, add) {
        return new Promise((resolve, reject) => {
            const query = "UPDATE lists SET todo = ? WHERE todo = ?;";
            db.query(query, [edit, add], (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }
}

module.exports = ToDoStorage;
