// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const number = await input("Enter a number: ");
  if (number > 9) {
    output("Number is at least two digits");
    if (number > 99) {
      output("Number is at least three digits");
    }
  } else {
    output("Number is less than two digits");
  }
}
