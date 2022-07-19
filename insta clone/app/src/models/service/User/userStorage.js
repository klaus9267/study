"use strict";

const ProfileStorage = require("../Profile/profileStorage"),
    db = require("../../../config/mysql");

class UserStorage {
    static async save(userInfo) {
        try {
            const { email, nickname } = userInfo,
                insertQuery = `INSERT INTO users(email,nickname,delete_date)
                     VALUES(?,?,?);`;

            for (const i in userList) {
                const dbEmail = userList[i].email;
                if (dbEmail === email) {
                    return;
                }
                return await db.query(insertQuery, [email, nickname, null]);
            }
        } catch (err) {
            throw err;
        }
    }

    static async getUserbyEmail(email) {
        const query = "SELECT * FROM users WHERE email=?;";
        return await db.query(query, [email]);
    }

    static async delUser(no) {
        try {
            const query = "DELETE FROM users WHERE no=?;",
                delUser = await db.query(query, [no]);
            console.log(delUser);
            if (delUser[0].affectedRows) {
                return { msg: "delete success" };
            } else {
                return err;
            }
        } catch (err) {
            throw err;
        }
    }
}

module.exports = UserStorage;
