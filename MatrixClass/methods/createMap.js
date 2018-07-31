const createMap = function(){
    this.map = new Map();
    for (let i = 0; i < this.size; i++) {
        this.map.set(i+1, null)
    }
}

export default createMap