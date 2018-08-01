const getAsItterator = function() {
    // console.log('GAI', this.map.keys());
   let itterator = Array.from(this.map.keys())
    // let itterator = this.map.keys()
    this.keysAsArray = itterator;
    return itterator
}

export default getAsItterator