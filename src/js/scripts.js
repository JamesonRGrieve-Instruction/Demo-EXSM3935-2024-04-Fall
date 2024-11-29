// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const inventory = [
    [1234, "Apple", 0.75],
    [1235, "Orange", 0.99]
  ];
  const receipt = [];
  let total = 0;
  let chosenItem = "";
  do {
    for (let item of inventory) {
      output(`#${item[0]} - ${item[1]} - $${item[2]}`);
    }
    chosenItem = (await input("What would you like to buy? (enter item code): ")).trim().toUpperCase();

    if (chosenItem !== "END") {
      let found = false;
      for (let item of inventory) {
        if (item[0] === Number(chosenItem)) {
          receipt.push(item[1]);
          total += item[2];
          found = true;
        }
      }
      if (!found) {
        output("Item not found. Please try again.");
      }
    }
  } while (chosenItem !== "END");

  output(`Receipt: ${receipt.join(", ")}`);
  output(`Total: $${total.toFixed(2)}`);
}

