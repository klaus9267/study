"use strict";

const Profile = require("../../models/service/Profile/profile");
const logger = require("../../config/logger");
const { response } = require("express");

const process = {
    readProfile: async (req, res) => {
        try {
            const profile = new Profile(req);
            const response = await profile.getProfile();
            const url = {
                method: "GET",
                path: "/moae/main",
                status: response.success ? 200 : 404,
            };

            log(response, url, "load");
            return res.status(response.success ? 200 : 404).json(response);
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
            `${url.method} / ${method} / ${url.status}  Response: ${response.msg || ""} `
        );
    }
};
