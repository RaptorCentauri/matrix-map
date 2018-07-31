const display = function (){
    let arr = Array.from(this.map.values())
    let show = arr.convertToSquareBoard();   
    show.forEach(row =>{
        console.log(row);
    })
}

export default display