"use strict";

const db = require("../config/mysql");

class ToDoStorage {
    static async viewList() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM lists;";
            db.query(query, (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }

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

    static async editList(edit, before) {
        return new Promise((resolve, reject) => {
            const query = "UPDATE lists SET todo = ? WHERE todo = ?;";
            db.query(query, [edit, before], (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }
}

module.exports = ToDoStorage;
