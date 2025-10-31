class knightPiece{
    constructor(currentPosition = [0,0]){
        this.currentPosition = currentPosition;
    }

    getCurrentPos(){
        return this.currentPosition;
    }
}

export default knightPiece;