import knightPiece from "./classKnight.js";

const visitedPositions = [];
const boardSize = 8;

function arePositionsSame(pos1, pos2){
    return (
        pos1[0] === pos2[0] && pos1[1] === pos2[1]
    );
};

function removeVisitedPositions(arrayOfPositions){
    let filteredPositions = arrayOfPositions.filter((position)=>{
        for (let i = 0; i < visitedPositions.length; i++) {
            const visited = visitedPositions[i];
            if(visited[0] === position[0] && visited[1] === position[1]){
                return false;
            }
        };
        return true;
    });
    return filteredPositions;
};

function hasPositionBeenVisited(position, visitedPosArray){
    for (let i = 0; i < visitedPosArray.length; i++) {
        const element = visitedPosArray[i];
        if(arePositionsSame(element, position)){return true;}
    }
    return false;
};

function knightMoves(startPos, endPos){

    if(arePositionsSame(startPos, endPos)){
        console.log("Reached position.");
        return 0;
    };

    const chessPiece = new knightPiece(startPos);
    const positionQueue = [];

    let totalMoves = 1;

    visitedPositions.push(startPos);

    let allPossibleMoves = removeVisitedPositions(chessPiece.getLegalMoves(boardSize));

    positionQueue.push(allPossibleMoves);

    while(positionQueue.length != 0){
        const currentLevelPositions = positionQueue.shift();
        const nextLevelPositions = [];

        console.log(`Current level positions to check:`)
        console.log(currentLevelPositions)

        while(currentLevelPositions.length != 0){
            const nextPosition = currentLevelPositions.shift();

            if(arePositionsSame(nextPosition, endPos)){
                console.log(`Targeted position reached.`);
                return totalMoves++;
            };

            chessPiece.setNewPosition(nextPosition);
            console.log(`Move to position ${nextPosition}`)

            const allLegalMoves = chessPiece.getLegalMoves(boardSize);
            nextLevelPositions.push(...allLegalMoves);

        };

        positionQueue.push(nextLevelPositions);
        totalMoves++;

    };

    return totalMoves;
};

export default knightMoves;