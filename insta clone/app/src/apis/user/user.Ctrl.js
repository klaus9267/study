"use strict";

const ToDoStorage = require("../../models/ToDoStorage");
const ToDo = require("../../models/ToDo");
const logger = require("../../config/logger");
const { response } = require("express");

const output = {
    home: (req, res) => {
        logger.info(`GET / 200 "홈 화면"`);
        res.render("index");
    },
};

const process = {
    Read: async (req, res) => {
        try {
            const insta = new ToDo();
            const response = await insta.Read();
            const url = {
                method: "GET",
                path: "/home",
                status: !response.success ? 404 : 200,
            };

            log(response, url);
            return res.status(url.status).json(response);
        } catch (err) {
            throw err;
        }
    },

    post: async (req, res) => {
        const insta = new ToDo(req.body);
        const response = insta.post();
        const url = {
            method: "POST",
            path: "/",
            status: response.err ? 400 : 201,
        };
        log(response, url);
        return res.status(url.status).json(response);
    },

    delete: async (req, res) => {
        const insta = new ToDo(req.body);
        const response = insta.delete();

        const url = {
            method: "DELETE",
            path: "/",
            status: response.err ? 404 : 200,
        };

        log(response, url);
        return res.status(url.status).json(response);
    },

    update: async (req, res) => {
        const insta = new ToDo(req.body);
        const response = insta.update();

        const url = {
            method: "PATCH",
            path: "/",
            status: response.err ? 400 : 200,
        };

        log(response, url);
        return res.status(url.status).json(response);
    },
};

module.exports = {
    output,
    process,
};

const log = (response, url) => {
    if (response.err) {
        logger.error(
            `${url.method} / ${url.status}  Response: ${response.err}`
        );
    } else {
        logger.info(
            `${url.method} / ${url.status}  Response: ${response.msg || ""}`
        );
    }
};
