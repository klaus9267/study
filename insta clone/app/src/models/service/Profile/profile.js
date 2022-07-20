"use strict";

const ProfileStorage = require("./profileStorage");

class Profile {
    constructor(req) {
        this.params = req.params;
    }

    async getProfile() {
        const client = this.params;
        try {
            const data = await ProfileStorage.selectProfile(client.userNo);

            if (!data) {
                return { success: false, msg: "프로필 정보가 없습니다" };
            } else {
                return {
                    data: data,
                    success: true,
                    msg: "프로필 로드 성공",
                };
                // data는 postman 확인용 추후 삭제
            }
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Profile;
