const getEquivalentNeighbors = function(id){
        let equivalentNeighbors = new Map();

        let neighbors = this.getNeighbors(id);

        neighbors.forEach(n =>{
            if (this.getValueOfId(id) === this.getValueOfId(n)) {
                equivalentNeighbors.set(n, this.getValueOfId(n))
            }
        })

        return equivalentNeighbors
    }

export default getEquivalentNeighbors