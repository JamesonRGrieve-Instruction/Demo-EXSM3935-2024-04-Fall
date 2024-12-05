// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.

  const yearOfBirth = await input('What year were you born?: ');
  const age = calculateAgeFromBirthYear /* Function name */(yearOfBirth /* Argument */); // Calling (or invoking) a function
  output(`You are ${age} years old.`);

}

function exampleFunction(/* inputs */) { // Inputs are also optional in the event they aren't necessary for function, but not having them is very rare, as it will make the function behave identically every time.


  return /* output */ // Output / return is optional - if you don't need anything out (and sent back to where called), omit it.
}

function calculateAgeFromBirthYear(birthYear /* Parameter */) {
  return 2024 - birthYear /* Return value */;
}

