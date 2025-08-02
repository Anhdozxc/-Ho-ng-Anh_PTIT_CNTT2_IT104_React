function createUser(name, age = 19, role = "user") {
  const user = {
    name,
    age,
    role,
  };
  console.log(user);
  return user;
}
createUser("Dev");
createUser("Nguyen Van A", 20, "Admin");
