// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  let totalCost = (await input("What is the total cost of the goods?: ")).trim();
  const payment = (await input("What is the payment rendered?: ")).trim();
  const discountCode = (await input("What is the discount code (if any)?: ")).trim();
  switch (discountCode) {
    case "1":
      totalCost = totalCost * 0.9;
      break;
    case "2":
      totalCost = totalCost * 0.85;
      break;
    case "3":
      totalCost = totalCost * 0.75;
      break;
    case "4":
      totalCost = totalCost * 0.65;
      break;
    case "5":
      totalCost = totalCost * 0.6;
      break;
    default:
      output("Invalid discount code, defaulting to no discount.");
  }
  output("Total cost (after discount): $" + totalCost.toFixed(2));
  if (payment < totalCost) {
    output("Insufficient payment, remaining balance: $" + (totalCost - payment).toFixed(2));
  }
  else {
    output("Change: $" + (payment - totalCost).toFixed(2));
  }
}
