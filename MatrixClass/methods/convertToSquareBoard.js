const convertToSquareBoard = Object.defineProperty(Array.prototype, 'convertToSquareBoard', {
    value() {
        try {
            let size= this.length
            if(Math.sqrt(size) % 1 != 0){
                throw new Error(`convertToSquareBoard only works on arrays with a perfect square size! SIZE=${size}`)
            }
            else{
                let width = Math.sqrt(size);

            let newMatrix = this.reduce((rows, key, index) => (index % width == 0 ? rows.push([key]) 
              : rows[rows.length-1].push(key)) && rows, []);
    

              return newMatrix;
            }
        
 
            
        } catch (e) {
            console.error(e)
        }


         
    }
});



export default convertToSquareBoard