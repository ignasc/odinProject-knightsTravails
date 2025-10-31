import chessBoard from "./classChessBoard.js"
import knightPiece from "./classKnight.js";
import knightMoves from "./knightMoves.js";

console.log("script executed")

const board = new chessBoard(8);
const knight = new knightPiece([1, 3]);

console.log(board.getBoard());
console.log(knight.getCurrentPos());
console.log(knight.getLegalMoves(8));
