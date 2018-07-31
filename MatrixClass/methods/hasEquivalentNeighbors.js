const hasEquivalentNeighbors = function(i){
    let hasEquivalentNeighbors = true;

    if (this.getEquivalentNeighbors(i).size === 0) {
        hasEquivalentNeighbors = false
    }

    return hasEquivalentNeighbors
}

export default hasEquivalentNeighbors