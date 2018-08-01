
const getNorthEdge = function() {
    this.northEdge = new Set();
    let edgeSize = Math.sqrt(this.size);

    for (let i = 0; i < edgeSize; i++) {
        this.northEdge.add(i+1);
    }
}


export default getNorthEdge