"use strict";
//in ra thông tin chi tiết của nhân viên
function printStaffInfo_bai5(staff) {
    console.log(`Nhân viên: ${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
}
const staff1_bai5 = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán",
};
printStaffInfo_bai5(staff1_bai5);
