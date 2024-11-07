// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const number = await input("Enter a number: ");
  output("Number entered: " + number, "debug");
  output(`number > 9 && number < 100: ${number > 9 && number < 100}`, "debug");
  if (number > 9 && number < 100) {
    output("Number is two digits");
  } else {
    if (number > 99) {
      output("Number is three or more digits");
    }
    else
    {
      output("Number is one digits");
    }
  }

  // These two are exactly the same. Due to a syntactic quirk, you can omit the code block if
  // you have only one statement in an if/else block, allowing you to chain "if" and "else".
  if (number > 9 && number < 100) {
    output("Number is two digits");
  } 
  else if (number > 99) {
    output("Number is three or more digits");
  }
  else {
    output("Number is one digits");
  }
  
}
