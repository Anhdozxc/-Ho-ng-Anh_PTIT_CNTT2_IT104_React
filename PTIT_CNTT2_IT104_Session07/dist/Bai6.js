"use strict";
class Account6 {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.isLogin = false;
    }
    login() {
        console.log("Login method in Account");
    }
    logout() {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
    }
}
class userAcc6 extends Account6 {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        }
        else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        }
    }
}
class adminAcc6 extends Account6 {
    banUser(user) {
        user.status = "banned";
        console.log(`Người dùng ${user.userName} đã bị cấm`);
    }
}
const user10 = new userAcc6("001", "anhbear", "123456", "user", "active");
const admin1 = new adminAcc6("A01", "admin", "adminpass", "admin");
user10.login();
admin1.banUser(user10);
user10.login();
