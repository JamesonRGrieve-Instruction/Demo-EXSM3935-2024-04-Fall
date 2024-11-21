// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const myDictionary = {
    "a": "Hello", 
    "b": "alpha", 
    "c": "Bravo"
  };

  output(myDictionary["a"]);

  myDictionary["a"] = await input("Please enter a new value: "); // Overwrite a key (works with arrays too).
  output(myDictionary["a"]);
  output(myDictionary); // Gives [object Object] which is entirely useless to everyone.
  output(JSON.stringify(myDictionary)); // Converts the dictionary to JavaScript Object Notation.

  const username = "d";
  output(Boolean(myDictionary[username]));

}
