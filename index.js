import chessBoard from "./classChessBoard.js"
import knightPiece from "./classKnight.js";
import knightMoves from "./knightMoves.js";

console.log("script executed")

const board = new chessBoard(8);
const knight = new knightPiece();

console.log(board.getBoard());
console.log(knight.getCurrentPos());
console.log(knightMoves([0, 1], [5, 6]));