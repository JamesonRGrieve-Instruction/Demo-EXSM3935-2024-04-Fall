// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const myArray = ["Hello", "alpha", "Bravo"];

  const copyOfMyArray = [...myArray];

  output(copyOfMyArray);
  myArray.push(4);
  output(copyOfMyArray);

  const combinedArray = myArray.concat(copyOfMyArray);
  output(combinedArray);

  combinedArray.sort();
  output(combinedArray);
}
