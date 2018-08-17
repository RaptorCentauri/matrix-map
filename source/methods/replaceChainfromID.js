const replaceChainFromID = function(id, val, noCall){

    let chain = this.getChainFromID(id)
    chain.forEach(c => {
        this.setValueOfID(c, val, noCall)
    })

}

export default replaceChainFromID