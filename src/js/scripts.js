// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const users = {
    admin: "adminpwd",
    user: "userpwd1"
  }
  output("a. Register\nb. Login\nc. Quit");
  let choice = (await input("Enter your choice: ")).trim().toLowerCase();
  if (choice === "a") {
    try {
      const username = (await input("Enter your username: ")).trim();
      if (!username) { //username.trim.length === 0
        throw new Error("Username cannot be empty.");
      }
      else if (users[username]) {
        throw new Error("Invalid username, user already exists.");
      }
      else {
        const password = (await input("Enter your password: ")).trim();
        if (!password) {
          throw new Error("Password cannot be empty.");
        }
        else if (password.length < 8) {
          throw new Error("Password must be at least 8 characters long.");
        }
        else {
          users[username] = password;
          output("Registration successful.");
        }
      }
    }
    catch (error) {
      output(error.message);
    }
  }
  else if (choice === "b") {
    try {
      const username = (await input("Enter your username: ")).trim();
      if (!username) { //username.trim.length === 0
        throw new Error("Username cannot be empty.");
      }
      else if (!users[username]) {
        throw new Error("Invalid username, user does not exist.");
      }
      else {
        const password = (await input("Enter your password: ")).trim();
        if (!password) {
          throw new Error("Password cannot be empty.");
        }
        else if (password.length < 8) {
          throw new Error("Password must be at least 8 characters long.");
        }
        else if (users[username] !== password) {
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
  else if (choice === "c") {
    output("Goodbye.");
  }
  else {
    output("Invalid choice.");
  }


}
