let phoneBooks = [];
// thêm liên hệ
const addContact = (name, phone, email) => {
  const contact = {
    name,
    phone,
    email,
  };
  phoneBooks.push(contact);
};
// hiển thị danh bạ
const displayContact = () => {
  console.log("Danh bạ điện thoại:");
  phoneBooks.forEach((contact, index) => {
    console.log(
      `${index + 1}. Tên: ${contact.name}, SĐT: ${contact.phone}, Email: ${
        contact.email
      }`
    );
  });
};
addContact("Nguyễn Đăng Dương", "0901234567", "Duong@gmail.com");
addContact("Đỗ Hoàng Anh", "0987654321", "anh@gmail.com");

displayContact();
