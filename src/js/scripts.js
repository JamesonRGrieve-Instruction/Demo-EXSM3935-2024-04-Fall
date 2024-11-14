// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.

  try {
    const userAge = (await input("What is your age?: ")).trim();
    if (userAge.length === 0) {
      throw new Error("You did not enter an age.");
    } 
    else if (isNaN(Number(userAge))) {
      throw new Error("You did not enter a number.");
    }  
    else if (userAge < 18) {
      throw new Error("You are not old enough to vote.");
    } 
    else {
      output("You are old enough to vote.");
    }
  }
  catch (error) {
    output(error);
  }
  output("Program complete.")
  
}
