const getWestEdge = function(){
    let rowSize = Math.sqrt(this.size)
    this.westEdge = new Set();
    for (let i = 0; i < this.size; i++) {
        let k = i+1; 
        if(k%rowSize===1){
            this.westEdge.add(k);
        }
    }
}

export default getWestEdge;