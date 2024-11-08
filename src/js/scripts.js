// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const username = (await input("Enter your username: ")).trim();
  if (!username) { //username.trim.length === 0
    output("Username cannot be empty.");
  }
  else if (username !== "admin") {
    output("Invalid username, user does not exist.");
  }
  else
  {
    const password = (await input("Enter your password: ")).trim();
    if (!password) {
      output("Password cannot be empty.");
    }
    else if (password.length < 8) {
      output("Password must be at least 8 characters long.");
    }
    else if (password !== "adminpwd") {
      output("Invalid password.");
    }
    else {
      output("Login successful.");
    }
  }
}
