// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const myArray = [1, 2, 3];

  const copyOfMyArray = [...myArray];

  output(copyOfMyArray);
  myArray.push(4);
  output(copyOfMyArray);
}
