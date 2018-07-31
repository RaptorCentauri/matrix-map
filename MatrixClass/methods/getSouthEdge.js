const getSouthEdge = function(){
    let rowSize = Math.sqrt(this.size)

    this.southEdge = new Set();

    for (let i = 0; i < this.size; i++) {
        let k = i+1; 
        if(this.size-k<rowSize){
            this.southEdge.add(k);
        }
    }
}

export default getSouthEdge