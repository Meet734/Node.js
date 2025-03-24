const uuid = require('uuid');

class Item {
    //Name, Quantity, Price, status, createdAt Date, updateAt Date.
    #aStatus = ['Sold Out', 'Available'];
    constructor(sName, nQuantity, nPrice){
        this.iId = uuid.v1();
        this.sName = sName;
        this.nQuantity = nQuantity;
        this.sStatus = this.#aStatus[!nQuantity?0:1];
        this.nPrice = nPrice;
        this.dCreatedAt = new Date();
        this.dUpdatedAt = new Date();
        this.isDeleted = false;
    }
}

module.exports = {Item};