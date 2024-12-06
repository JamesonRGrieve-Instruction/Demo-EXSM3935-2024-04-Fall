// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  let userInput;
  do {
    output("a. Play Game\nb. High Scores\nc. Exit")
    userInput = (await input("Please enter your choice: ")).trim().toLowerCase();
    if (["a", "b", "c"].includes(userInput)) {
      if (userInput === "a") {
        output("Play Game")
      }
      else if (userInput === "b") {
        output("High Scores")
      }
    }
    else {
      output("Invalid choice. Please try again.")
    }
  } while (userInput !== "c")
}
