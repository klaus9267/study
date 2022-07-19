"use strict";

const db = require("../../../config/mysql");
let dataaa;

class ProfileStorage {
    static async selectProfile() {
        try {
            const query = "SELECT * FROM users;",
                [rows] = await db.query(query);
            return rows;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = ProfileStorage;
