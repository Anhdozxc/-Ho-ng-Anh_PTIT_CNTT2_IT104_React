// thông tin cá nhân
interface Person_bai5 {
  name: string;
  age: number;
}
// Định nghĩa cho nhân viên
interface Employee_bai5 {
  employeeId: string;
  department: string;
}
// theo đề
type StaffMember_bai5 = Person_bai5 & Employee_bai5;
//in ra thông tin chi tiết của nhân viên
function printStaffInfo_bai5(staff: StaffMember_bai5): void {
  console.log(
    `Nhân viên: ${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`
  );
}
const staff1_bai5: StaffMember_bai5 = {
  name: "Nguyễn Văn A",
  age: 28,
  employeeId: "EMP001",
  department: "Kế toán",
};
printStaffInfo_bai5(staff1_bai5);
