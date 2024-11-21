// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const myArray = ["Hello", "alpha", "Bravo"];
  myArray.push("alpha");
  const mySet = new Set(myArray);
  output(Array.from(mySet));

  mySet.add("Bravo");

  const myEmptySet = new Set();
  myEmptySet.add("alpha");
  myEmptySet.add("Bravo");
  output(Array.from(myEmptySet));

  output(mySet.has("alpha"));
  mySet.delete("alpha");
  output(mySet.has("alpha"));
}
