import * as jwt from "/models/service/Auth/auth.js";
jwt.test();

window.Kakao.init("31924ecdb512289d55332392301c48b0");

let userInfo,
    redirectUrl = "http://localhost:8080/redirect?email=";

const kakaoLogin = () => {
    window.Kakao.Auth.login({
        scope: "profile_nickname, account_email, gender",
        success: function (authObj) {
            window.Kakao.API.request({
                url: "/v2/user/me",
                success: res => {
                    const kakao_account = res.kakao_account.email;
                    const kakao_profile = res.kakao_account.profile.nickname;
                    const kakao_gender = res.kakao_account.gender;

                    // console.log(res.kakao_account);

                    userInfo = {
                        kakao_account,
                        kakao_profile,
                    };
                    register(userInfo);
                    // location.href = redirectUrl;
                },
            });
        },
    });
};

const load = async () => {
    await fetch("/moae/main", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(),
    })
        .then(response => response.json())
        .then(json => json.data)
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
            }
        });
};
load();

const register = userInfo => {
    const req = {
        email: userInfo.kakao_account,
        nickname: userInfo.kakao_profile,
    };
    fetch("/moae/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
};
// DB에 추가

const login = userInfo => {
    const req = {
        email: userInfo.kakao_account,
        nickname: userInfo.kakao_profile,
    };
    fetch("/moae/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
};

const deleteUser = () => {
    const req = {
        email: userInfo.kakao_account,
    };
    fetch("/moae/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
};
