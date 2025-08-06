let firstName: string = "john";
let lastName: string = "doe";
//viết hoa chữ cái đầu
function vietHoaChuDau(word: string): string {
  if (word.length === 0) return "";
  return word[0].toUpperCase() + word.slice(1);
}

firstName = vietHoaChuDau(firstName);
lastName = vietHoaChuDau(lastName);

let fullName: string = firstName + " " + lastName;
console.log("Full name:", fullName);
