class Vehicle {
  name: string;
  year: number;
  company: string;

  constructor(name: string, year: number, company: string) {
    this.name = name;
    this.year = year;
    this.company = company;
  }

  displayInfo(): void {
    console.log(`Tên: ${this.name}`);
    console.log(`Năm sản xuất: ${this.year}`);
    console.log(`Hãng: ${this.company}`);
  }
}
// 2 đối tượng Vehicle khác nhau
const vehicle1 = new Vehicle("SH", 2025, "Honda");
const vehicle2 = new Vehicle("VF7", 2023, "Vinfast");
vehicle1.displayInfo();
vehicle2.displayInfo();
