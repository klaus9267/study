/** @format */

"use strict";

const ToDoStorage = require("./ToDoStorage");

class ToDo {
    constructor(body) {
        this.body = body;
    }

    async addList() {
        const client = this.body;
        await ToDoStorage.addList(client.addList);
    }
    async deleteList() {
        const client = this.body;
        await ToDoStorage.deleteList(client.deleteList);
    }
    async editList() {
        const client = this.body;
        await ToDoStorage.editList(client.editList, client.addList);
    }
}

module.exports = ToDo;
