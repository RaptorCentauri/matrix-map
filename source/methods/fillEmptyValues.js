const fillEmptyValues = function(val, noCall){
    try {
        if(noCall && (noCall != 'noCall')) throw new Error (`If you want to pass in a function without calling it, set the noCall parameter to 'noCall'`)

        if (typeof(val) != 'function') {
            for (const [key, value] of this.map) {
                if (this.map.get(key) === null) {
                    this.map.set(key, val)
                }
            }
        }

        if (typeof(val) === 'function') {
            for (const [key, value] of this.map) {
                if(noCall){
                    if (this.map.get(key) === null) {
                        this.map.set(key, val)
                    }
                }
                else{
                    if (this.map.get(key) === null) {
                        this.map.set(key, val())
                    }
                }
            }
        }
    } catch (e) {
        console.error(e)
    }
}



export default fillEmptyValues