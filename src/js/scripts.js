// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const myArray = [1, 2, 3];

  output(`My Array: ${myArray}`);

  myArray.push(4);

  output(`My Array After Push: ${myArray}`);

  output(`Pop: ${myArray.pop()}`);

  output(`My Array After Pop: ${myArray}`);

  output(`Pop: ${myArray.pop()}`);

  output(`My Array After Pop: ${myArray}`);

  output(`Pop: ${myArray.pop()}`);

  output(`My Array After Pop: ${myArray}`);

  myArray.unshift(0);

  output(`My Array After Unshift: ${myArray}`);

  output(`Shift: ${myArray.shift()}`);

  output(`My Array After Shift: ${myArray}`);

  output(`Shift: ${myArray.shift()}`);

  output(`My Array After Shift: ${myArray}`);
}
