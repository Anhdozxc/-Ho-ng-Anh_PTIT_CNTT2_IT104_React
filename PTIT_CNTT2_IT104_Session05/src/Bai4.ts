class Vehicle_bai4 {
  public name: string;
  protected year: number;
  private company: string;
  readonly id: number;

  constructor(id: number, name: string, year: number, company: string) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.company = company;
  }
  // hiển thị
  public displayInfo(): void {
    console.log("ID:", this.id);
    console.log("Tên xe:", this.name);
    console.log("Năm sản xuất:", this.year);
    console.log("Hãng xe:", this.company);
  }
}
const vehicle_bai4 = new Vehicle_bai4(1, "SH 300i", 2025, "Honda");
vehicle_bai4.displayInfo();
console.log("Name bên ngoài class:", vehicle_bai4.name);
