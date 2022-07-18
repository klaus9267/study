"use strict";

const ProfileStorage = require("./profileStorage");

class Profile {
    constructor(body) {
        this.body = body;
    }

    async getProfile() {
        try {
            const data = await ProfileStorage.selectProfile();
            if (!data.length) {
                return { success: false };
            } else {
                return { data, success: true };
            }
        } catch (err) {
            throw err;
        }
        1;
    }
}

module.exports = Profile;
