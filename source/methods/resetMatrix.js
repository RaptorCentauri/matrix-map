const resetMatrix = function(){
    for (let i = 0; i < this.size; i++){
        this.setValueOfid(i+1, null)
    }
}

export default resetMatrix