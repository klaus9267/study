"use strict";

const InstaStorage = require("./InstaStorage");

class ToDo {
    constructor(body) {
        this.body = body;
    }

    async viewList() {
        try {
            const data = await InstaStorage.viewList();
            if (!data.length) {
                return { success: false };
            } else {
                return { data, success: true };
            }
        } catch (err) {
            throw err;
        }
    }

    async addList() {
        const client = this.body;
        try {
            await InstaStorage.addList(client.content, client.is_check);
            if (!client) {
                return { success: false };
            } else {
                return { data, success: true };
            }
        } catch (err) {
            throw err;
        }
    }

    async deleteList() {
        const client = this.body;
        try {
            await InstaStorage.deleteList(client.deleteList);
        } catch (err) {
            throw err;
        }
    }

    async editList() {
        const client = this.body;
        try {
            const result = await InstaStorage.editList(
                client.content,
                client.isCheck,
                client.no
            );
            if (!result["affectedRows"]) {
                //
                return { success: false };
            } else {
                return { data, success: true };
            }
        } catch (err) {
            throw err;
        }
    }
}

module.exports = ToDo;
