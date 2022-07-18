"use strict";

import { jwt } from "jsonwebtoken";

function newToken(payload) {
    jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1d" }, (err, token) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(token);
    });
}

const test = () => {
    console.log("test");
};

export default { newToken, test };
