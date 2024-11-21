// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const myArray = [1, 2, 3];
  myArray.push(4);
  myArray.unshift(0);
  output(`My Array: ${myArray}`);

  output(`Length of Array: ${myArray.length}`);

  output(`First Element: ${myArray[0]}`);
  output(`Last Element: ${myArray[myArray.length - 1]}`);
  myArray.shift();
  output(`Last Element (Static): ${myArray[4]}`);

  output(`My Array Before Splice: ${myArray}`);
  output(`Index of 2: ${myArray.indexOf(2)}`);
  myArray.splice(myArray.indexOf(2), 1);
  output(`My Array After Splice: ${myArray}`);

}
