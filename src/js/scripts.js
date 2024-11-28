// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const prompt = "Please enter your name, or 'Exit' to quit: ";
  let userInput;

  // Menu Do-While Loop
  do {
    output("1. While Loop\n2. Do-While Loop\n3. For Loop\n4. For-Of Loop\n5. Exit");
    userInput = (await input("Please make a selection: ")).trim();
    // While Loop
    if (userInput === "1") { 
      let name = await input(prompt); // Initialize
      while (name !== "Exit") { // Test
        output(`Hello, ${name}!`); //Process
        name = await input(prompt); // Modify
      }
    } 
    // Do-While Loop
    else if (userInput === "2") {
      let name = await input(prompt);
      do {
        output(`Hello, ${name}!`);
        name = await input(prompt);
      } while (name !== "Exit");
    } 
    // For Loop (Condensed While Loop)
    else if (userInput === "3") {
      for (let myNumber = 0 /* Initialize */; myNumber < 10 /* Test */; myNumber++ /* Modify */) {
        output(myNumber); // Process
      }

      for (let name = await input(prompt); name !== "Exit"; name = await input(prompt)) {
        output(`Hello, ${name}!`);
      }

      const myArray = [1, 3, 7, 12, 25, 42, 99];
      for (let index = 0; index < myArray.length; index++) {
        output(myArray[index]);
      }
    } 
    // For-Of Loop (Condensed For Loop)
    else if (userInput === "4") {
      const myArray = [1, 3, 7, 12, 25, 42, 99];
      for (let element of myArray) {
        output(element);
      }

      const my2DArray = [
        [1, 3, 7],
        [12, 25, 42],
        [99, 101, 250]
      ];

      for (let row of my2DArray) {
        output("-New Row-")
        for (let columnElement of row) {
          output(columnElement);
        }
      }
    }
  } while (userInput !== "5");
}

