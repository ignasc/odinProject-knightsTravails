class knightPiece{
    constructor(currentPosition = [0,0]){
        this.currentPosition = currentPosition;
        this.allLegalMoveDirs = [
            [-1, 2],
            [1, 2],
            [2, 1],
            [2, -1],
            [1, -2],
            [-1, -2],
            [-2, -1],
            [-2, 1],
        ];
    }

    getCurrentPos(){
        return this.currentPosition;
    }

    // function that returns an array of all possible moves, given it's current position and board size
    getLegalMoves(boardSize){
        let allLegalMoves;
        let allMoves;

        allMoves = this.allLegalMoveDirs.map((position)=>{
            return [
                position[0] + this.currentPosition[0],
                position[1] + this.currentPosition[1],
            ];
        });

        allLegalMoves = allMoves.filter((position)=>{
            return (position[0] < boardSize && position[1] < boardSize && position[0] >= 0 && position[1] >= 0)
        });

        return allLegalMoves;
    }
}

export default knightPiece;