import * as index from './methods/index'

class Matrix {
    constructor(size){
        this.size = size;
        this.createMap();
        this.getAllEdges();
        this.getAsItterator()
    }

    setValueOfid = index.setValueOfid
    getValueOfId = index.getValueOfId
    fillEmptyValues = index.fillEmptyValues
    deleteValueOfId = index.deleteValueOfId
    getNorthEdge = index.getNorthEdge
    getEastEdge = index.getEastEdge
    getSouthEdge = index.getSouthEdge
    getWestEdge = index.getWestEdge
    getAllEdges = index.getAllEdges
    getNorthNeighbor = index.getNorthNeighbor;
    getSouthNeighbor = index.getSouthNeighbor;
    getEastNeighbor = index.getEastNeighbor;
    getWestNeighbor = index.getWestNeighbor;
    getNeighbors = index.getNeighbors;
    getEquivalentNeighbors = index.getEquivalentNeighbors;
    destroyChainfromID = index.destroyChainfromID;
    getChainfromID = index.getChainfromID;
    replaceChainfromID = index.replaceChainfromID;
    display = index.display;
    displayPretty = index.displayPretty
    dropDown = index.dropDown
    createMap = index.createMap
    convertToSquareBoard = index.convertToSquareBoard
    getAsItterator = index.getAsItterator
    hasEquivalentNeighbors = index.hasEquivalentNeighbors
}

export default Matrix