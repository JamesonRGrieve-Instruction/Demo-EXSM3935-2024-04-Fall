// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  try {
    let totalCost = Number((await input("What is the total cost of the goods?: ")).trim());
    if (isNaN(totalCost)) {
      throw new Error("Invalid total cost.");
    }
    const payment = Number((await input("What is the payment rendered?: ")).trim());
    if (isNaN(payment)) {
      throw new Error("Invalid payment.");
    }
    const discountCode = (await input("What is the discount code (if any)?: ")).trim();
    switch (discountCode) {
      case "":
        break;
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
        throw new Error("Invalid discount code.");
    }
    output("Total cost (after discount): $" + totalCost.toFixed(2));
    if (payment < totalCost) {
      throw new Error("Insufficient payment.");
    }
    else {
      output("Change: $" + (payment - totalCost).toFixed(2));
    }
  }
  catch (error) {
    output("Error: " + error.message);
  }
}
