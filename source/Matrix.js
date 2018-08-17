import * as index from './methods/index'

class Matrix {
    constructor(size){
        this.size = size;
        this.createMap();
        this.getAllEdges();
        this.getAsItterator()
    }

    setValueOfID = index.setValueOfID
    getValueOfID = index.getValueOfID
    fillEmptyValues = index.fillEmptyValues
    deleteValueOfID = index.deleteValueOfID
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
    destroyChainFromID = index.destroyChainFromID;
    getChainFromID = index.getChainFromID;
    replaceChainFromID = index.replaceChainFromID;
    display = index.display;
    displayPretty = index.displayPretty
    dropDown = index.dropDown
    createMap = index.createMap
    convertToSquareBoard = index.convertToSquareBoard
    getAsItterator = index.getAsItterator
    hasEquivalentNeighbors = index.hasEquivalentNeighbors
    resetMatrix = index.resetMatrix
    getNorthEastNeighbor = index.getNorthEastNeighbor
    getNorthWestNeighbor = index.getNorthWestNeighbor
    getSouthWestNeighbor = index.getSouthWestNeighbor
    getSouthEastNeighbor = index.getSouthEastNeighbor
}

export default Matrix