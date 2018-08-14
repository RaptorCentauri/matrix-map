const getNorthWestNeighbor = function(id){
    let northWestNeighbor = null;

    let north = this.getNorthNeighbor(id);
    let west = this.getWestNeighbor(north);
    northWestNeighbor= west;
    
    return northWestNeighbor;
}
export default getNorthWestNeighbor