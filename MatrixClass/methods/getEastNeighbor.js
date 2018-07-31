const getEastNeighbor = function(id){
    let eastNeighbor = null;

    if(!this.eastEdge.has(id)){
        eastNeighbor = id+1;
    }
    return eastNeighbor;
}

export default getEastNeighbor