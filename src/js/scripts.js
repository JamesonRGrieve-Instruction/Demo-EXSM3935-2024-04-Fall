// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.

  let myBoolean = false; // Boolean types are true or false (1/0 yes/no on/off).
  let myNumber = 3.16; // Number types are decimal numbers (or integers).
  let myString = "Hello, world!"; // String types are text (strings).
  
  output(myNumber);
  output("3.14");

  output(myNumber == "3.14"); // Using equivalency will upcast or downcast types to be the same prior to comparing.
  output(myNumber === "3.14"); // Using identity will automatically assume they are not the same if they are different types.

  output(`${myNumber} + 12`); // String interpolation only works with backticks.
}
