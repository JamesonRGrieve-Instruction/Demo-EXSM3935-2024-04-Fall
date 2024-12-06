// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // While Loop Counts to 10.
  let counter = 1;
  while (counter <= 10) {
    output(counter);
    counter = counter + 1;
  }


  // Recursion Counts to 10
  count(1, 10);
}


function count(from, to) {
  if (from <= to) {
    output(from);
    count(from + 1, to);
  }
}
/*
// Call count(1, 10) - from=1, to=10
// from is less than or equal to to (1 <= 10)
// output(1)
  // count(2, 10) - from=2, to=10
  // from is less than or equal to to (2 <= 10)
  // output(2)
    // count(3, 10) - from=3, to=10
    // from is less than or equal to to (3 <= 10)
    // output(3)
      // count(4, 10) - from=4, to=10
      // from is less than or equal to to (4 <= 10)
      // output(4)
        // count(5, 10) - from=5, to=10 
        // from is less than or equal to to (5 <= 10)
        // output(5)
        //...
          // count(10, 10) - from=10, to=10
          // from is less than or equal to to (10 <= 10)
          // output(10)
            // count(11, 10) - from=11, to=10
            // from is no longer less than or equal to to (11 > 10)
            // return
          // return
        // return
      // return
    // return
  // return
// return
*/