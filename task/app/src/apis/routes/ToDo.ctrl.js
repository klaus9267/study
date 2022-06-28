/** @format */

"use strict";

const output = {
    add: (req, res) => {
        res.render("index");
    },
};

const process = {
    add: async (req, res) => {
        const add = new lists(req.body);
    },
};

module.exports = {
    output,
    process,
};
