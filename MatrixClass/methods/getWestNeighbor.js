const getWestNeighbor = function(id){
    let westNeighbor = null;

    if(!this.westEdge.has(id)){
        westNeighbor = id-1;
    }
    return westNeighbor;
}

export default getWestNeighbor