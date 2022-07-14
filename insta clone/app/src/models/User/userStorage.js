"use strict";

const db = require("../../config/mysql");

class UserStorage {
    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const { email, nickname } = userInfo;
            const query =
                "INSERT INTO users(email,nickname,delete_date) VALUES(?,?,?);";
            db.query(query, [email, nickname, null], (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }

    static async delUser(userInfo) {
        return new Promise((resolve, reject) => {
            const { email, nickname } = userInfo;
            const query = "DELETE FROM users where no=?;";
            db.query(query, [email], (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }
}

module.exports = UserStorage;
