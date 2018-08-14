const getSouthWestNeighbor = function(id){
    let southWestNeighbor = null;

    let south = this.getSouthNeighbor(id);
    let west = this.getWestNeighbor(south);
    southWestNeighbor= west;
    
    return southWestNeighbor;
}
export default getSouthWestNeighbor