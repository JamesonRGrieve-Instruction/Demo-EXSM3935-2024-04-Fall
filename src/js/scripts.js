// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  try {
    const username = (await input("Enter your username: ")).trim();
    if (!username) { //username.trim.length === 0
      throw new Error("Username cannot be empty.");
    }
    else if (username !== "admin") {
      throw new Error("Invalid username, user does not exist.");
    }
    else
    {
      const password = (await input("Enter your password: ")).trim();
      if (!password) {
        throw new Error("Password cannot be empty.");
      }
      else if (password.length < 8) {
        throw new Error("Password must be at least 8 characters long.");
      }
      else if (password !== "adminpwd") {
        throw new Error("Invalid password.");
      }
      else {
        output("Login successful.");
      }
    }
  }
  catch (error) {
    output(error.message);
  }

}
