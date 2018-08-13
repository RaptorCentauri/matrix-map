const resetMatrix = function(){
    for (let i = 1; i < this.map.size; i++){
        this.setValueOfid(i, null)
    }
}

export default resetMatrix