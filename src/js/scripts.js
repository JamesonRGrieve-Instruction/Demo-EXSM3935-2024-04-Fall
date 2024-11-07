// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  output("Welcome\n1. Hello\n2. Goodbye");
  const number = await input("Enter a choice: ");
  if (number === "1" || number === "one") {
    output("Hello");
    // output("Done");
  } else if (number === "2" || number === "two") {
    output("Goodbye");
    // output("Done");
  } else {
    output("Invalid choice");
    // output("Done");
  }
  output("Done");


  switch (number) {
    case "one":
    case "1":
      output("Hello");
      break;
    case "two":
    case "2":
      output("Goodbye");
      break;
    default:
      output("Invalid choice");
      break;
  }

}
