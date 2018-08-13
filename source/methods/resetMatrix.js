const resetMatrix = function(){
    for (let i = 1; i < this.size; i++){
        this.setValueOfid(i, null)
    }
}

export default resetMatrix