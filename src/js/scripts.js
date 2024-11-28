// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const gameBoard =  [
    ["", "", ""], // 0,0 0,1 0,2
    ["", "", ""], // 1,0 1,1 1,2
    ["", "", ""], // 2,0 2,1 2,2
  ]
  const lines = [
    "0,0|0,1|0,2", "1,0|1,1|1,2", "2,0|2,1|2,2",  // horizontal
    "0,0|1,0|2,0", "0,1|1,1|2,1", "0,2|1,2|2,2",  // vertical
    "0,0|1,1|2,2", "0,2|1,1|2,0"                   // diagonal
  ];

  const singleArrayGameBoard = [
    "", "", "",  // 0, 1, 2
    "", "", "",  // 3, 4, 5
    "", "", ""   // 6, 7, 8
  ]
  const singleArrayLines = [
    "012", "345", "678",  // horizontal
    "036", "147", "258",  // vertical
    "048", "246"           // diagonal
  ]


} 
