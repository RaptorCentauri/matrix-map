const getSouthNeighbor = function(id){
    let southNeighbor = null;

    if(!this.southEdge.has(id)){
        let edgeSize = Math.sqrt(this.size);
        southNeighbor = id+edgeSize;
    }
    return southNeighbor;
}

export default getSouthNeighbor