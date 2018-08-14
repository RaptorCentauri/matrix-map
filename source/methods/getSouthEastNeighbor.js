const getSouthEastNeighbor = function(id){
    let southEastNeighbor = null;

    let south = this.getSouthNeighbor(id);
    let east = this.getEastNeighbor(south);
    nortEastNeighbor= east;
    
    return southEastNeighbor;
}
export default getSouthEastNeighbor