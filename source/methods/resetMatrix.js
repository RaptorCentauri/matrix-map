const resetMatrix = function(){
    for (const [key] in this.map) {
        this.map.set(key, null)
    }
}

export default resetMatrix