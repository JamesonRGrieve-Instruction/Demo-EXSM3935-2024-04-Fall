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
      let valid = true;
      // This is a *more* maintainable but *less* efficient solution. 
      // This is because we check every letter, even after we encounter a number, which is redundant.
      // To improve this efficiency-wise, we could use a while/for loop instead of a for-of loop, and add a "&& valid" to the condition.
      for (letter of await input("Enter a string: ")) {
        if (!isNaN(letter)) {
          valid = false;
        }
      }
      output(valid ? "Valid string." : "Invalid string!");
    } else if (menuChoice === "2") {
      let valid = true;
      for (letter of await input("Enter an integer: ")) {
        if (isNaN(letter)) {
          valid = false;
        }
      }
      output(valid ? "Valid integer." : "Invalid integer!");
    } else if (menuChoice === "3") {
      const year = await input("Enter a year: ");
      if (isNaN(year) || year < 1900 || year > (new Date()).getFullYear()) {
        output("Invalid year!");
      }
      else {
        output("Valid year.");
      }
    } else if (menuChoice === "4") {
      output("Date Checker");
    }
  } while (menuChoice !== "5");
}
