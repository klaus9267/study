/** @format */

"use strict";

const ToDoStorage = require("../../models/ToDoStorage");
const ToDo = require("../../models/ToDo");

const output = {
    home: (req, res) => {
        res.render("index");
    },
};

const process = {
    addList: async (req, res) => {
        const todo = new ToDo(req.body);
        const response = todo.addList();
        return res.json(response);
    },
    deleteList: async (req, res) => {
        const todo = new ToDo(req.body);
        const response = todo.deleteList();
        return res.json(response);
    },
    editList: async (req, res) => {
        const todo = new ToDo(req.body);
        const response = todo.editList();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
