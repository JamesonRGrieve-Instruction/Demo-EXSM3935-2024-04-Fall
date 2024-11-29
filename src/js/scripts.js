// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.

  let menuChoice;
  do 
  {
    output("1. String Checker\n2. Integer Checker\n3. Year Checker\n4. Date Checker\n5. Exit");
    menuChoice = (await input("Enter your choice: ")).trim();
    if (menuChoice === "1") {
      output("String Checker");
    } else if (menuChoice === "2") {
      output("Integer Checker");
    } else if (menuChoice === "3") {
      output("Year Checker");
    } else if (menuChoice === "4") {
      output("Date Checker");
    }
  } while (menuChoice !== "5");
}
