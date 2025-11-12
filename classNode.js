const allLegalMoveDirs = [
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
];

// helper function that returns an array of all possible neighbour nodes, given it's current position and board size
function getNeighbourNodes(currentPosition, boardSize){
    let allLegalNeighbours;
    let allNeighbours;

    allNeighbours = allLegalMoveDirs.map((position)=>{
        return [
            position[0] + currentPosition[0],
            position[1] + currentPosition[1],
        ];
    });

    allLegalNeighbours = allNeighbours.filter((position)=>{
        return (position[0] < boardSize && position[1] < boardSize && position[0] >= 0 && position[1] >= 0)
    });

    return allLegalNeighbours;
};

class node{
    constructor(currentPosition = [0,0], boardSize = 8){
        this.currentPosition = currentPosition;
        this.data = {
            "position": currentPosition,
            "neighbours": getNeighbourNodes(currentPosition, boardSize),
            "distance": Infinity,
        };
    }

    getPosition(){
        return this.data["position"];
    }

    getNeighbours(){
        return this.data["neighbours"];
    }

    getDistance(){
        return this.data["distance"];
    }

    setNeighbours(arrayOfNeighbours){
        this.data["neighbours"] = arrayOfNeighbours;
    }

    setDistance(distance){
        this.data["distance"] = distance;
    }
}

export default node;
