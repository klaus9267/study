"use strict";

const UserStorage = require("./userStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async register() {
        const client = this.body;
        try {
            const isUser = await UserStorage.getUserbyEmail(client.email);
            if (isUser) {
                return { msg: "The E-Mail already exists" };
            }

            const data = await UserStorage.save(client);
            if (!data) {
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
            const data = await UserStorage.delUser(client.no);
            if (!data.length) {
                return { success: false };
            } else {
                return { data, success: true };
            }
        } catch (err) {
            throw err;
        }
    }

    async updateUser() {
        const client = this.body;
        try {
            const data = await UserStorage.updateUser(client);
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
