"use strict";

const UserStorage = require("./userStorage");

class User {
    constructor(req) {
        this.params = req.params;
        this.body = req.body;
    }

    async register() {
        const client = this.body;

        try {
            const isUser = await UserStorage.getUserbyEmail(client.email);

            if (isUser) {
                return { msg: ` ${client.nickname}의 로그인` };
            }

            const data = await UserStorage.save(client);

            if (!data) {
                return { success: false, msg: "정보가 잘못됬습니다" };
            } else {
                return { data, msg: `${client.nickname}의 회원가입`, success: true };
            }
        } catch (err) {
            throw err;
        }
    }

    async delUser() {
        const params = this.params,
            client = this.body;

        try {
            const data = await UserStorage.delUser(params.userNo);

            if (!data) {
                return { success: false, msg: "유저 정보가 없습니다" };
            } else {
                return { data, success: true, msg: `회원탈퇴 성공` };
            }
        } catch (err) {
            throw err;
        }
    }

    async updateUser() {
        const client = this.body,
            params = this.params;

        try {
            const data = await UserStorage.updateUser(client, params);

            if (!data) {
                return { success: false, msg: "정보가 잘못됬습니다" };
            } else {
                return { data, success: true, msg: `${client.nickname}의 정보수정 성공` };
            }
        } catch (err) {
            throw err;
        }
    }
}

module.exports = User;
