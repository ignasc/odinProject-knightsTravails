class chessBoard{
    constructor(boardSize){
        this.board = this.createBoard(boardSize);
    }

    createBoard(boardSize){
        const newBoard = [];

        for (let indexHor = 0; indexHor < boardSize; indexHor++) {
            const row = [];

            for (let indexVert = 0; indexVert < boardSize; indexVert++) {
                row.push(indexHor.toString() + indexVert.toString());
            }
            
            newBoard.push(row);
        }
        return newBoard;
    }

    getBoard(){
        return this.board;
    }

};

export default chessBoard;