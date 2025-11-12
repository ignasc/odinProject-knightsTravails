import knightPiece from "./classKnight.js";
import knightMoves from "./knightMoves.js";

const knight = new knightPiece([2, 4]);

// console.log(knight.getCurrentPos());
// console.log(knight.getLegalMoves(8));

const startPosition = [0,0]; //0,0 to 7,7 for 6 moves
const endPosition = [7,7];
console.log(`-------KNIGHT MOVES-----\nStarting position: ${startPosition}\nFinish position: ${endPosition}\n`)
console.log(knightMoves(startPosition, endPosition));
