"use strict";

const db = require("../../../config/mysql");

class ProfileStorage {
    static async selectProfile() {
        try {
            const query = "SELECT * FROM users;",
                [rows] = await db.query(query);
            if (rows) {
                return rows;
            } else {
                return err;
            }
        } catch (err) {
            throw err;
        }
    }
}

module.exports = ProfileStorage;
