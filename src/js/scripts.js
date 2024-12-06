// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  greeter(await getName(), await piggyBank());
}
async function getName() {
  const name = (await input("What is your name?: ")).trim();
  return name || "child1"; // If the left side is falsey, return the right side.
}
async function piggyBank() {
  try {
    const balance = (await input("Enter a list of comma-separated deposits: ")).trim();
    let total = 0;
    for (const deposit of balance.split(",")) {
      total += Number(deposit);
    }
    return total;
  } catch (error) {
    output("Invalid input, assuming no deposits.");
    return 0;
  }
}
function greeter(name, amount) {
  if (amount < 10) {
    output(`Hello ${name}! You’ve stored $${amount.toFixed(2)} so far. Better keep saving!`)
  }
  else if (amount < 100) {
    output(`Hello ${name}! You’ve stored $${amount.toFixed(2)} so far. Good job!`)
  }
  else {
    output(`Hello ${name}! You’ve stored $${amount.toFixed(2)} so far. You should really spend some of it!`)
  }
} 