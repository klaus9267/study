"user strict";

const logger = require("../../config/logger");

const output = {
    home: (req, res) => {
        logger.info(`GET / 200 "홈 화면"`);
        res.render("index");
    },

    redirect: (req, res) => {
        logger.info(`GET / 200 "redirect 화면"`);
        res.render("redirect");
    },
};

module.exports = { output };
