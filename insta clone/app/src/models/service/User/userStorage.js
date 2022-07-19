"use strict";

const ProfileStorage = require("../Profile/profileStorage"),
    db = require("../../../config/mysql");

class UserStorage {
    static async save(userInfo) {
        try {
            const { email, nickname } = userInfo,
                insertQuery = `INSERT INTO users(email,nickname,delete_date)
                     VALUES(?,?,?);`;
            return await db.query(insertQuery, [email, nickname, null]);
        } catch (err) {
            throw err;
        }
    }

    static async getUserbyEmail(email) {
        try {
            const query = "SELECT * FROM users WHERE email=?;";
            const data = await db.query(query, [email]);
            return data[0];
        } catch (err) {
            throw err;
        }
    }

    static async delUser(no) {
        try {
            const query = "DELETE FROM users WHERE no=?;",
                delUser = await db.query(query, [no]);

            if (delUser[0].affectedRows) {
                return { msg: "delete success" };
            } else {
                return err;
            }
        } catch (err) {
            throw err;
        }
    }

    static async updateUser(userdata) {
        try {
            console.log(userdata);
            // const { email, nickname } = userInfo,
            // (query = "DELETE FROM users WHERE no=?;"),
            //     (delUser = await db.query(query, [no]));

            // if (delUser[0].affectedRows) {
            //     return { msg: "delete success" };
            // } else {
            //     return err;
            // }
        } catch (err) {
            throw err;
        }
    }
}

module.exports = UserStorage;
