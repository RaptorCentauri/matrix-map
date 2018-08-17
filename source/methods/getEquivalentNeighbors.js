const getEquivalentNeighbors = function(id){
        let equivalentNeighbors = new Map();

        let neighbors = this.getNeighbors(id);

        neighbors.forEach(n =>{
            if (this.getValueOfID(id) === this.getValueOfID(n)) {
                equivalentNeighbors.set(n, this.getValueOfID(n))
            }
        })

        return equivalentNeighbors
    }

export default getEquivalentNeighbors