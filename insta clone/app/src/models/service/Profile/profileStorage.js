"use strict";

const db = require("../../../config/mysql");
let dataaa;

class ProfileStorage {
    static async selectProfile(no) {
        try {
            const query =
                    "SELECT nickname, profile_image FROM users WHERE no=?;",
                [rows] = await db.query(query, [no]);

            return rows[0];
        } catch (err) {
            throw err;
        }
    }
}

module.exports = ProfileStorage;
