const setValueOfid = function(id, val, noCall){
    try {
        if(id > this.map.size) throw new RangeError(`You passed an ID (${id}) larger than the Matrix size (${this.map.size})!`);
        if(id <= 0) throw new RangeError(`ID must be greater than zero!`);
        if(noCall && (noCall != 'noCall')) throw new Error (`If you want to pass in a function without calling it, set the noCall parameter to 'noCall'`)


        if (typeof(val) != 'function') {
            this.map.set(id, val)
        }

        if (typeof(val) === 'function') {
            if (noCall) {
                this.map.set(id, val)
            }
            else{
                this.map.set(id, val())
            }
        }

    } catch (e) {
        console.error(e)
    }

}

export default setValueOfid