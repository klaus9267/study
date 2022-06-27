/** @format */

"use strict";

const output = {
    home: (req, res) => {
        res.render("index");
    },
};

const process = {
    add: (req, res) => {
        // console.log(req);
        console.log(req.body);
    },
};

module.exports = {
    output,
    process,
};
