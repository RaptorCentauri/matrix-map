const dropDown = function(){
    let rowSize = Math.sqrt(this.size);
    this.southEdge.forEach(e =>{
        let dropMap = new Map();

        do {
        dropMap.set(e, this.getValueOfId(e))
        e = e-rowSize;
        } while (e-rowSize > -(rowSize));

        let setOfNulls = new Set();

        for (const [key, value] of dropMap) {
            if(this.getValueOfId(key) === null){
                setOfNulls.add(key)
            }
        }

        if(setOfNulls.size > 0){
            let setOfValid = new Set();

            for (const [key, value] of dropMap) {
                if(this.getValueOfId(key) != null){
                    setOfValid.add(key)
                }
            }

            let rMap = dropMap;

            

            let valds = setOfValid.values();

            for (const [key, value] of dropMap) {
                let y = valds.next().value
                
                dropMap.set(key, rMap.get(y))
                
                if(y != undefined){
                    dropMap.set(key, rMap.get(y))
                }
                else{
                    dropMap.set(key, null)
                }
            }

            for (const [key, value] of dropMap) {
                this.map.set(key, value)
            }
        }
    })
}


export default dropDown