const  displayPretty = function(){
    let arr = Array.from(this.map.values())

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === null) arr[i] = '*'

        arr[i] = arr[i].toString()
    }


    let show = arr.convertToSquareBoard();   
    show.forEach(row =>{
        console.log(row);
    })
}

export default displayPretty