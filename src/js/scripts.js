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

  output("--- Arithmetic Operators ---");
  output(`${myNumber} + 12 = ${myNumber + 12}`);
  output(`${myNumber} - 12 = ${myNumber - 12}`);
  output(`${myNumber} * 12 = ${myNumber * 12}`);
  output(`${myNumber} / 12 = ${myNumber / 12}`);
  output(`12 % ${myNumber.toFixed(0)} = ${12 % myNumber.toFixed(0)}`);

  /*
  1/3 + 2/3 = 3/3 = 1
  0.3333... + 0.6666... = 0.9999... = 1
  */

  output(`0.1 + 0.2 = ${(0.1 + 0.2).toFixed(6)}`);
  // Floating point rounding errors occur when adding some numbers using floating point arithmetic (the common number type in JavaScript).
  // Keep this in mind when dealing with large or precise numbers such as financials or astrophysics.
}
