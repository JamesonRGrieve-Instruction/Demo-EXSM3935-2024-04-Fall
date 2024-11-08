// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  output(`${await input("What is your first name?: ")} ${await input("What is your last name?: ")}`.replaceAll("o", "a"));
  
  output(`The remainder is ${await input("Please enter a larger number than 10: ") % await input("Please enter a smaller number than 10: ")}.`);
}
