// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  let myFirstNumber = 42;
  let mySecondNumber = myFirstNumber;

  output(`My First Number: ${myFirstNumber}`);
  output(`My Second Number: ${mySecondNumber}`);

  myFirstNumber = myFirstNumber + 10;

  output(`My First Number After Addition: ${myFirstNumber}`);
  output(`My Second Number After Addition: ${mySecondNumber}`);


  const myFirstArray = [1, 2, 3];
  const mySecondArray = myFirstArray;

  output(`My First Array: ${myFirstArray}`);
  output(`My Second Array: ${mySecondArray}`);

  myFirstArray.push(4);

  output(`My First Array After Push: ${myFirstArray}`);
  output(`My Second Array After Push: ${mySecondArray}`);

}
