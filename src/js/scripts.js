// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const yearOfBirth = await input('What year were you born?: ');
  const monthOfBirth = await input('What month were you born (number)?: ');
  const dayOfBirth = await input('What day were you born?: ');
  const age = calculateAgeFromBirthYear(yearOfBirth, monthOfBirth, dayOfBirth); // Calling (or invoking) a function
  output(`You are ${age} years old.`);
}

function calculateAgeFromBirthYear(birthYear, birthMonth, birthDay) {
  if (birthYear.toString().trim() === "" || birthMonth.toString().trim() === "" || birthDay.toString().trim() === "") {
    throw new Error('You must provide a birth year, month, and day.');
  }
  return ((new Date()) - new Date(birthYear, birthMonth, birthDay)) / 1000 / 60 / 60 / 24 / 365.25;
}



function exampleFunction(/* inputs */) { // Inputs are also optional in the event they aren't necessary for function, but not having them is very rare, as it will make the function behave identically every time.


  return /* output */ // Output / return is optional - if you don't need anything out (and sent back to where called), omit it.
}
