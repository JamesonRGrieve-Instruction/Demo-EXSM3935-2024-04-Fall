// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const gameBoard = [
    " ", " ", " ",  // 0, 1, 2
    " ", " ", " ",  // 3, 4, 5
    " ", " ", " "   // 6, 7, 8
  ];
  const lines = [
    "012", "345", "678",  // horizontal
    "036", "147", "258",  // vertical
    "048", "246"           // diagonal
  ];
  let currentTurn = "X";



  let winner = null;
  do {
    let outputString = "";
    for (let i = 0; i < gameBoard.length; i++) {
      outputString += gameBoard[i];
      outputString += (i+1) % 3 === 0 ? "\n" : " | "
    }
    output(outputString);

    output("1 | 2 | 3\n4 | 5 | 6\n7 | 8 | 9");
    output("Turn: " + currentTurn);
    const targetSpace = Number(await input("Select a space: "));
    gameBoard[targetSpace - 1] = currentTurn;

    for (let line of lines) {
      if (gameBoard[line[0]] === gameBoard[line[1]] && gameBoard[line[1]] === gameBoard[line[2]] && gameBoard[line[0]] !== " ") {
        winner = gameBoard[line[0]];
      }
    }

    currentTurn = currentTurn === "X" ? "O" : "X";
  } while (!winner);

  let outputString = "";
    for (let i = 0; i < gameBoard.length; i++) {
      outputString += gameBoard[i];
      outputString += (i+1) % 3 === 0 ? "\n" : " | "
    }
    output(outputString);
  output("Game Over! Winner: " + winner);

} 
