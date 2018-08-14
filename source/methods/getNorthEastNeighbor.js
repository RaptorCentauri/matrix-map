const getNorthEastNeighbor = function(id){
    let northEastNeighbor = null;

    let north = this.getNorthNeighbor(id);
    let east = this.getWestNeighbor(north);
    northEastNeighbor= west;
    
    return northEastNeighbor;
}
export default getNorthEastNeighbor