import node from "./classNode.js";

// Function to check if two positions are matching.
function arePositionsSame(pos1, pos2){
    return (
        pos1[0] === pos2[0] && pos1[1] === pos2[1]
    );
};

// Function to filter out positions that have been visited already.
function removeVisitedPositions(arrayOfPositionsToVisit, alreadyVisitedNodeArray){
    let filteredPositions = arrayOfPositionsToVisit.filter((position)=>{
        for (let i = 0; i < alreadyVisitedNodeArray.length; i++) {
            const visited = alreadyVisitedNodeArray[i].getPosition();
            if(visited[0] === position[0] && visited[1] === position[1]){
                return false;
            }
        };
        return true;
    });
    return filteredPositions;
};

// Function that returns the shortest path from starting to end positions and number of moves.
function knightMoves(startPos, endPos){

    let shortestPathFound = false;

    if(arePositionsSame(startPos, endPos)){
        console.log("Reached position.");
        return 0;
    };

    const visitedPositions = [];

    const startingPosition = new node(startPos);
    startingPosition.setDistance(0);

    const positionQueue = [startingPosition];
    visitedPositions.push(startingPosition)

    // Traverse through all positions on chess board
    while(positionQueue.length != 0){
        const currentPosition = positionQueue.shift();

        const allVisitablePositions = removeVisitedPositions(currentPosition.getNeighbours(), visitedPositions);

        // loop through all visitable positions
        while(allVisitablePositions.length != 0){
            const currentVisitablePosition = allVisitablePositions.shift();

            const positionNode = new node(currentVisitablePosition);

            //calculate current position distance from startPos
            positionNode.setDistance(currentPosition.getDistance()+1)

            positionQueue.push(positionNode);
            visitedPositions.push(positionNode);
        };
    };

    // Find end position element within visitedPositions array
    const endPosition = visitedPositions.find((element)=>{
        return arePositionsSame(element.getPosition(),endPos);
    });
    const shortestRoute = [endPosition];

    // Set array of backtrack nodes and add initial available backtrack nodes from end position node.
    let backTrackNodes = visitedPositions.filter((visitedPosition)=>{
        const neighbourNodes = endPosition.getNeighbours();
        for(let i = 0; i < neighbourNodes.length; i++){
            const neighbourNode = neighbourNodes[i];
            if(arePositionsSame(visitedPosition.getPosition(), neighbourNode)){return true}
        };
        return false;
    });

    // Find the backtrack node that has the shortest distance value in the current list.
    let shortestNode = null;
    while(backTrackNodes.length != 0 && !shortestPathFound){
        shortestNode = backTrackNodes.pop();

        for(let i = 0; i < backTrackNodes.length; i++){
            const backTrackNode = backTrackNodes[i];

            if(arePositionsSame(backTrackNode.getPosition(), startPos)){
                shortestPathFound = true;
            }

            if(shortestNode.getDistance() > backTrackNode.getDistance()){
                shortestNode = backTrackNode;
            }
        };

        // Clear the list of current backtrack nodes.
        backTrackNodes.length = 0;

        // Generate a new list of backtrack nodes from latest node with shortest path.
        backTrackNodes = visitedPositions.filter((visitedPosition)=>{
            const neighbourNodes = shortestNode.getNeighbours();
            for(let i = 0; i < neighbourNodes.length; i++){
                const neighbourNode = neighbourNodes[i];
                if(arePositionsSame(visitedPosition.getPosition(), neighbourNode)){return true}
            };
            return false;
        });

        shortestRoute.push(shortestNode);
    };

    // Return final result message
    let mainMessage = `Total moves needed: ${shortestRoute.length - 1}. Shortest path: \n`;
    for(let i = shortestRoute.length - 1; i >= 0; i--){
        mainMessage += `[${shortestRoute[i].getPosition()}]\n`
    };
    return mainMessage;
};

export default knightMoves;
