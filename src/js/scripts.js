// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // Use parentheses to make sure the input is resolved before trying to modify it.
  const name = (await input("Please enter your name: ")).trim();
  const age = (await input("Please enter your age: ")).trim();
  const clowns = (await input("Do you like clowns? (yes/no): ")).toLowerCase().trim();

  output(`Hello ${name}! I see you are ${age} years old and on the question of clowns, you answered ${clowns}.`);
}
