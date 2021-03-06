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
            const query = "SELECT * FROM users WHERE email=?;",
                data = await db.query(query, [email]);

            return data[0][0];
        } catch (err) {
            throw err;
        }
    }

    static async delUser(no) {
        try {
            const query = "DELETE FROM users WHERE no=?;",
                delUser = await db.query(query, [no]);

            return delUser[0].affectedRows;
        } catch (err) {
            throw err;
        }
    }

    static async readData(no) {
        try {
            const query = "SELECT * FROM users WHERE no=?;",
                data = await db.query(query, [no]);

            return data[0][0];
        } catch (err) {
            throw err;
        }
    }

    static async test_updateUser(queryKeys, values) {
        try {
            const query = `UPDATE users SET ${queryKeys} WHERE users.no = ?;`;
            const data = await db.query(query, values);

            return data[0].affectedRows;
        } catch (err) {
            throw err;
        }
    }

    static async ori_updateUser(userData, userNo) {
        try {
            const query = `UPDATE users SET nickname=?, name=?, website=?,
                description=?, email=?, phone=?, gender=?, profile_image=?
                WHERE users.no = ?;`;

            const data = await db.query(query, [
                userData.nickname,
                userData.name,
                userData.website,
                userData.description,
                userData.email,
                userData.phone,
                userData.gender,
                userData.profile_image,
                userNo,
            ]);

            return data[0].affectedRows;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = UserStorage;
