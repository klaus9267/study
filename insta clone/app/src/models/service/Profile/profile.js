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
                return { success: false, msg: "프로필 정보가 없습니다" };
            } else {
                return { data: data, success: true, msg: "프로일 로드 성공" };
            }
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Profile;
