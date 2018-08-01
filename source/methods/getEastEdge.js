const getEastEdge = function() {
    let rowSize = Math.sqrt(this.size)

    this.eastEdge = new Set();

    for (let i = 0; i < this.size; i++) {
        let k = i+1
        if(k%rowSize===0){
            this.eastEdge.add(k);
        }
    }
}

export default getEastEdge