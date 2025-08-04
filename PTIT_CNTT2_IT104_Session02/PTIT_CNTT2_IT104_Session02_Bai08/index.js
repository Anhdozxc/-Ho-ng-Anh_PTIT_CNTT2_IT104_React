const displayUserInfo = (user) => {
  // gán unknown cho các thuộc tính không có trong user
  const {
    name = "unknown",
    age = "unknown",
    // gán object rỗng để tránh lỗi
    location: { city = "unknown", country = "unknown" } = {},
    job: { title = "unknown", company = "unknown" } = {},
    contact: { email = "unknown", phone = "unknown" } = {},
  } = user;
  // Sử dụng dấu `` để định dạng chuỗi
  const output = `${name} is ${age} years old, lives in ${city}, ${country}, works as ${title} at ${company}, and can be contacted via ${email} or ${phone}.`;
  console.log(output);

  return output;
};
displayUserInfo({
  name: "Anna",
  age: 30,
  location: { city: "Da Nang", country: "Vietnam" },
});

displayUserInfo({
  name: "John",
  age: 25,
  location: { city: "Hanoi", country: "Vietnam" },
  contact: { email: "john@example.com", phone: "0123456789" },
  job: { title: "Developer", company: "Tech Corp" },
});
