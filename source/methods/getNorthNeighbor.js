const getNorthNeighbor = function(id){
    let northNeighbor = null;

    if(!this.northEdge.has(id)){
        let edgeSize = Math.sqrt(this.size);
        northNeighbor = id-edgeSize;
    }
    return northNeighbor;
}
export default getNorthNeighbor