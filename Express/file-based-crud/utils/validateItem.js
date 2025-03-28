const uuid = require('uuid');
const {getItemData} = require('./getItemData');

function validateId(iId){
    return (uuid.validate(iId) && uuid.version(iId) === 4);
}

function validateItem(oItem){
    if(!(Object.hasOwn(oItem, 'sName') && Object.hasOwn(oItem, 'nQuantity') && Object.hasOwn(oItem, 'nPrice'))){
        return false;
    }

    let sItemName = oItem.sName;
    let nItemQty = oItem.nQuantity;
    let nPrice = oItem.nPrice;

    return (nameValidator(sItemName) && quantityValidator(+nItemQty) && priceValidator(+nPrice));
}

function nameValidator(sName) {
    return (/^[a-zA-Z]+[0-9]*/.test(sName));
}

function quantityValidator(nQuantity) {
    
    return (/^[0-9]+/.test(nQuantity));
}

function priceValidator(nPrice) {
    return (/^[0-9]+/.test(nPrice));
}

function uniqueName(sName, iId = null){
    let aItems = getItemData();

    for(let idx=0;idx<aItems.length;idx++){
        console.log(aItems[idx].iId, iId);
        if(aItems[idx].iId === iId){
            continue;
        }
        if(aItems[idx].sName === sName){
            return false;
        }
    }
    return true;
}

module.exports = {
    validateId,
    validateItem,
    nameValidator,
    quantityValidator,
    priceValidator,
    uniqueName
}