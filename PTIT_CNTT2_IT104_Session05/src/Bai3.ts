class Employee_bai3 {
  public name: string;
  protected company: string;
  private phone: string;
  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }
  printInfo(): void {
    console.log(`Tên: ${this.name}`);
    console.log(`Công ty: ${this.company}`);
    console.log(`SĐT: ${this.phone}`);
  }
}
const emp_bai3 = new Employee_bai3("Đỗ Hoàng Anh", "NVIDIA", "0366687388");
emp_bai3.printInfo();
