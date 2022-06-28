/** @format */

"use strict";

const ToDoStorage = require("../../models/ToDoStorage");
// const ToDo = require("../../models/ToDo")
const todo = new ToDo(req.body);

const output = {
    add: (req, res) => {
        res.render("index");
    },
};

const process = {
    add: async (req, res) => {
        const todo = new ToDo(req.body);
    },
};

module.exports = {
    output,
    process,
};
