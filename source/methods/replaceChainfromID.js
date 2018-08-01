const replaceChainfromID = function(id, val, noCall){

    let chain = this.getChainfromID(id)
    chain.forEach(c => {
        this.setValueOfid(c, val, noCall)
    })

}

export default replaceChainfromID