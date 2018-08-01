const getNeighbors = function(id) {
    let neighbors = new Set()
    neighbors.add(this.getNorthNeighbor(id))
    neighbors.add(this.getSouthNeighbor(id))
    neighbors.add(this.getEastNeighbor(id))
    neighbors.add(this.getWestNeighbor(id))

    return neighbors
}

export default getNeighbors