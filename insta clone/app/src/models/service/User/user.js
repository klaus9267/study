"use strict";

const { JsonWebTokenError } = require("jsonwebtoken");
const { cli } = require("winston/lib/winston/config");
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
                return { msg: `이미 가입된 E-Mamil입니다` };
            }

            const data = await UserStorage.save(client);

            if (!data) {
                return { success: false, msg: "정보가 잘못됬습니다" };
            } else {
                return { success: true, msg: `${client.nickname}의 회원가입` };
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
                return { success: true, msg: `회원탈퇴 성공` };
            }
        } catch (err) {
            throw err;
        }
    }

    async test_updateUser() {
        // 값이 수정되지 않았을 때의 예외처리
        const client = this.body, // 수정된 데이터
            params = this.params; // 유저 번호
        try {
            const profile = await UserStorage.readData(params.userNo);

            for (const el in profile) {
                client[el] === profile[el] ? delete client[el] : "";
            }

            if (!Object.keys(client).length)
                return { success: false, msg: "수정된 정보가 없습니다" };

            const values = [...Object.values(client), Number(params.userNo)],
                queryKeys = Object.keys(client).reduce((acc, cur, idx, arr) => {
                    return idx === arr.length - 1 ? acc + cur + "=?" : acc + cur + "=?,";
                }, "");

            const data = await UserStorage.test_updateUser(queryKeys, values);

            if (!data) {
                return { success: false, msg: "정보가 잘못됬습니다" };
            } else {
                return {
                    success: true,
                    msg: `${client.nickname}의 정보수정 성공`,
                };
            }
        } catch (err) {
            throw err;
        }
    }

    async updateUser() {
        const client = this.body,
            params = this.params;

        try {
            const data = await UserStorage.ori_updateUser(client, params.userNo);

            if (!data) {
                return { success: false, msg: "정보가 잘못됬습니다" };
            } else {
                return {
                    success: true,
                    msg: `${client.nickname}의 정보수정 성공`,
                };
            }
        } catch (err) {
            throw err;
        }
    }
}

module.exports = User;
