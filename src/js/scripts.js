// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const firstName = await input("What is your first name?: ");
  const lastName = await input("What is your last name?: ");
  let fullName = `${firstName} ${lastName}`; // firstName + " " + lastName;
  fullName = fullName.replaceAll("o", "a");
  output(fullName);

  const largeNumber = await input("Please enter a larger number than 10: ");
  const smallNumber = await input("Please enter a smaller number than 10: ");
  output(`The remainder of ${largeNumber} / ${smallNumber} is ${largeNumber % smallNumber}.`);
}
