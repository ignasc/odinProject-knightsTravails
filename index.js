import chessBoard from "./classChessBoard.js"
import knightPiece from "./classKnight.js";
import knightMoves from "./knightMoves.js";

console.log("script executed")

const board = new chessBoard(8);
const knight = new knightPiece([2, 4]);

console.log(board.getBoard());
console.log(knight.getCurrentPos());
console.log(knight.getLegalMoves(8));

const startPosition = [3,3]; //0,0 to 7,7 for 6 moves
const endPosition = [4,3];
console.log(`-------KNIGHT MOVES-----\nStarting Position ${startPosition}\nFinish position ${endPosition}`)
console.log(knightMoves(startPosition, endPosition));
