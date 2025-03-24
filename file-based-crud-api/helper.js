const uuid = require('uuid');
const EventEmitter = require('events');

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
//Validating Input Item
function validateItem(oInputItem, stat){
    // console.log("Name: ",/^[a-zA-Z0-9]+/.test(oInputItem.sName))
    if(stat === 'exist'){
        if(Object.hasOwn(oInputItem, "sName") || Object.hasOwn(oInputItem, "nQuantity") || Object.hasOwn(oInputItem, "nPrice")){
            if(Object.hasOwn(oInputItem, "sName") && /^[a-zA-Z0-9]+/.test(oInputItem.sName)){
                console.log(/^\d+/.test(oInputItem.sName));
                if(!(/^\d+/.test(oInputItem.sName))){
                    return false;
                };
            }
            if(Object.hasOwn(oInputItem,"nQuantity")){
                oInputItem.nQuantity = parseInt(oInputItem.nQuantity);
                console.log("Test: ",oInputItem.nQuantity < 0);
                if(oInputItem.nQuantity < 0){
                    return false;
                }
            }
            if(Object.hasOwn(oInputItem,"nPrice")){
                oInputItem.nPrice = parseInt(oInputItem.nPrice);
            }
            return true;
        }
        return false;
    }
    if(/^[a-zA-Z0-9]+/.test(oInputItem.sName) && /^\d+/.test(oInputItem.nQuantity) && /^\d+/.test(oInputItem.nPrice)){
        if(/^\d+/.test(oInputItem.sName)){
            return false;
        }
        oInputItem.nQuantity = parseInt(oInputItem.nQuantity);
        oInputItem.nPrice = parseInt(oInputItem.nPrice);
        return true;
    }
    return false;
}

let eventEmitter = new EventEmitter();
eventEmitter.on('itemCreated', function() {
    console.log("Event: New Item added successfully...");
}).on('itemUpdated', function() {
    console.log("Event: Item updated successfully...");
}).on('itemDeleted', function() {
    console.log("Event: Item deleted successfully...");
}).on('error', function() {
    console.log("Event: Some error occurred...");
});

module.exports = {Item, validateItem, eventEmitter};