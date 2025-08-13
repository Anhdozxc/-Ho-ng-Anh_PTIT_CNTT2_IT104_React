class Account6 {
  public id: string;
  public userName: string;
  private password: string;
  public isLogin: boolean;
  public role: string;

  constructor(id: string, userName: string, password: string, role: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.role = role;
    this.isLogin = false;
  }

  public login(): void {
    console.log("Login method in Account");
  }

  public logout(): void {
    if (this.isLogin) {
      console.log("Đăng xuất thành công");
      this.isLogin = false;
    }
  }
}

class userAcc6 extends Account6 {
  public status: string; // active hoặc banned

  constructor(
    id: string,
    userName: string,
    password: string,
    role: string,
    status: string
  ) {
    super(id, userName, password, role);
    this.status = status;
  }

  public login(): void {
    if (this.status === "active") {
      this.isLogin = true;
      console.log("Đăng nhập thành công");
    } else if (this.status === "banned") {
      console.log("Tài khoản đã bị khóa");
    }
  }
}
class adminAcc6 extends Account6 {
  public banUser(user: userAcc6): void {
    user.status = "banned";
    console.log(`Người dùng ${user.userName} đã bị cấm`);
  }
}

const user10 = new userAcc6("001", "anhbear", "123456", "user", "active");
const admin1 = new adminAcc6("A01", "admin", "adminpass", "admin");

user10.login();
admin1.banUser(user10);
user10.login();
