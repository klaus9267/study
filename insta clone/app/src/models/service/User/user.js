"use strict";

const UserStorage = require("./userStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async load() {
        try {
            const data = await UserStorage.load();
            if (!data.length) {
                return { success: false };
            } else {
                // console.log(data);
                return { data, success: true };
            }
        } catch (err) {
            throw err;
        }
        1;
    }

    async register() {
        const client = this.body;
        try {
            const data = await UserStorage.save(client);
            if (!data.length) {
                return { success: false };
            } else {
                return { data, success: true };
            }
        } catch (err) {
            throw err;
        }
        1;
    }

    async delUser() {
        const client = this.body;
        try {
            const data = await UserStorage.delUser(client);
            if (!data.length) {
                return { success: false };
            } else {
                return { data, success: true };
            }
        } catch (err) {
            throw err;
        }
    }
}

module.exports = User;
