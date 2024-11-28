// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const prompt = "Please enter your name, or 'Exit' to quit: ";
  let userInput;
  do {
    output("1. While Loop\n2. Do-While Loop\n3. For Loop\n4. For-Of Loop\n5. Exit");
    userInput = (await input("Please make a selection: ")).trim();
    if (userInput === "1") {
      let name = await input(prompt);
      while (name !== "Exit") {
        output(`Hello, ${name}!`);
        name = await input(prompt);
      }
    } else if (userInput === "2") {
      let name = await input(prompt);
      do {
        output(`Hello, ${name}!`);
        name = await input(prompt);
      } while (name !== "Exit");
    } else if (userInput === "3") {
     
    } else if (userInput === "4") {

    }
  } while (userInput !== "5");


}
