const destroyChainFromID = function(id){
    let chain = this.getChainFromID(id);

    if (chain.size > 1) {
        chain.forEach(c => {
            this.deleteValueOfID(c)
        })
    }
}

export default destroyChainFromID