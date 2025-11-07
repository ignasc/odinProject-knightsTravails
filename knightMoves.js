import knightPiece from "./classKnight.js";

const visitedPositions = [];
const boardSize = 8;

// Function to check if two positions are matching.
function arePositionsSame(pos1, pos2){
    return (
        pos1[0] === pos2[0] && pos1[1] === pos2[1]
    );
};

// Function to filter out positions that have been visited already.
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

// Function that checks if given position is in the given array of positions
function hasPositionBeenVisited(position, visitedPosArray){
    for (let i = 0; i < visitedPosArray.length; i++) {
        const element = visitedPosArray[i];
        if(arePositionsSame(element, position)){return true;}
    }
    return false;
};

// Function that returns the shortest path from starting to end positions and number of moves.
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

        // check all positions at current level if they match endPos. If not, generate next level positions.
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