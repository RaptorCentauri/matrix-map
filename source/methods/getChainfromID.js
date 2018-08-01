const getChainfromID = function(id){
    let toBeDestroyed = new Set();

    let alreadyChecked = new Set()

    let playChain = (pos) => {
        let targetID = pos;

        let loopSet = new Set()

        alreadyChecked.add(targetID)

        toBeDestroyed.add(targetID);

        let targetNeighbors = this.getEquivalentNeighbors(targetID)

        for (const [key, value] of targetNeighbors) {
            if(targetNeighbors.get(key) === this.map.get(targetID)){
                loopSet.add(key)
            }
        }

        loopSet.forEach((item)=>{
            if(!alreadyChecked.has(item)){
                playChain(item)
            }
        })
        }

    playChain(id);

    // console.log('TBD', toBeDestroyed.size);
    

    return toBeDestroyed;

}

export default getChainfromID