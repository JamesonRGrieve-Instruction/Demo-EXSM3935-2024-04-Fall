// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  let userInput;
  const highScores = {};
  do {
    output("a. Play Game\nb. High Scores\nc. Exit")
    userInput = (await input("Please enter your choice: ")).trim().toLowerCase();
    if (["a", "b", "c"].includes(userInput)) {
      if (userInput === "a") {
        const target = Math.ceil(Math.random() * 100);
        let guess;
        let attempts = 0;
        do {
          guess = Number((await input("Please enter a number between 1 and 100: ")).trim());
          attempts++;
          if (guess < target) {
            output("Too low. Try again.");
          }
          else if (guess > target) {
            output("Too high. Try again.");
          }
        } while (guess !== target);
        output(`You got it in ${attempts} attempts!`);
        let name;
        do {
          name = (await input("Please enter your name: ")).trim();
          if (!name) {
            output("Please enter a name.");
          }
        } while (!name);
        highScores[name] = attempts;
      }
      else if (userInput === "b") {
        output("High Scores:");
        for (const name in highScores) {
          output(`${name}: ${highScores[name]}`);
        }
      }
    }
    else {
      output("Invalid choice. Please try again.")
    }
  } while (userInput !== "c")
}
