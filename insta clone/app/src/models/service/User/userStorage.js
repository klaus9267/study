"use strict";

const db = require("../../../config/mysql");

class UserStorage {
    static async save(userInfo) {
        try {
            const { email, nickname } = userInfo,
                query = "INSERT INTO users(email,nickname,delete_date) VALUES(?,?,?);",
                save = await db.query(query, [email, nickname, null]);
            if (save) {
                return save;
            } else {
                return err;
            }
        } catch (err) {
            throw err;
        }
    }

    static async delUser(userInfo) {
        console.log("del");
        try {
            const { email } = userInfo,
                query = "DELETE FROM users WHERE email=?;",
                delUser = await db.query(query, [email]);
            console.log(delUser);
        } catch (err) {
            throw err;
        }
    }
}

module.exports = UserStorage;
