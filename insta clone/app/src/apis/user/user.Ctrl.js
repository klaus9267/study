"use strict";

const User = require("../../models/service/User/user"),
    logger = require("../../config/logger"),
    { response } = require("express");

const process = {
    register: async (req, res) => {
        try {
            const user = new User(req),
                response = await user.register(),
                url = {
                    method: "Post",
                    path: "/moae/user",
                    status: !response.success ? 404 : 200,
                };

            log(response, url, "register");
            return res.status(url.status).json(response);
        } catch (err) {
            throw err;
        }
    },

    delUser: async (req, res) => {
        try {
            const user = new User(req),
                response = await user.delUser(),
                url = {
                    method: "Delete",
                    path: "/moae/user",
                    status: !response.success ? 404 : 200,
                };

            log(response, url, "delete");
            return res.status(url.status).json(response);
        } catch (err) {
            throw err;
        }
    },

    updateUser: async (req, res) => {
        try {
            const user = new User(req),
                response = await user.test_updateUser(),
                url = {
                    method: "Patch",
                    path: "/moae/user/profile/:userNo",
                    status: !response.success ? 404 : 200,
                };

            log(response, url, "update");
            return res.status(url.status).json(response);
        } catch (err) {
            throw err;
        }
    },
};

module.exports = { process };

const log = (response, url, method) => {
    if (!response) {
        logger.error(
            `${url.method} / ${method} / ${url.status}  Response: ${response.err}`
        );
    } else {
        logger.info(
            `${url.method} / ${method} / ${url.status}  Response: ${
                response.msg || response.success
            }`
        );
    }
};
