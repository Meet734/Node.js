const {validateId, nameValidator, quantityValidator, priceValidator, uniqueName, validateItem} = require('../utils/validateItem');
const {getItemData} = require('../utils/getItemData');
const {addItemData} = require('../utils/addItemData');
const AppError = require('../utils/appError');
const responseHandler = require('../helper/responseHandler');
const {status} = require('http-status');


exports.updateItem = function(req, res){
    const {iId} = req.params.iId;
    const oUpdateItem = req.body;
    
    if(!validateId(iId)){
        // aedasdfa
        //handle this invalid id...
        throw new AppError(status.BAD_REQUEST, 'Invalid item Id...');
    }
    if(!validateItem(oUpdateItem)){
        throw new AppError(status.BAD_REQUEST, 'Invalid item data...');
    }
    
    const aItems = getItemData();
    // let oItem;
    // let itemUpdated = false;

    const idx = aItems.findIndex((oItem) => {
        return (!oItem.isDeleted && oItem.iId === oUpdateItem.iId);
    });

    if(idx === -1){
        responseHandler(res, status.ACCEPTED, 'Item with this ID not found');
    }


    if(Object.hasOwn(oUpdateItem, 'sName') && nameValidator(oUpdateItem.sName)){
        if(!uniqueName(oUpdateItem.sName, iId)){
            throw new AppError(status.BAD_REQUEST, 'Item with this name already exist...');
        }
        aItems[idx].sName = oUpdateItem.sName;
    }
    else if(Object.hasOwn(oUpdateItem, 'sName')){
        throw new AppError(status.NOT_ACCEPTABLE, 'Item name is invalid...');
    }

    if(Object.hasOwn(oUpdateItem, 'nQuantity') && quantityValidator(+oUpdateItem.nQuantity)){
        aItems[idx].nQuantity = +oUpdateItem.nQuantity;
        let aStatus = ['Available', 'Sold Out'];
        aItems[idx].sStatus = aStatus[aItems[idx].nQuantity?0:1];
    }
    else if(Object.hasOwn(oUpdateItem, 'nQuantity')){
        throw new AppError(status.NOT_ACCEPTABLE, 'Item quantity is invalid...');
    }

    if(Object.hasOwn(oUpdateItem, 'nPrice') && priceValidator(+oUpdateItem.nPrice)){
        aItems[idx].nPrice = +oUpdateItem.nPrice;
    }
    else if(Object.hasOwn(oUpdateItem, 'nPrice')){
        throw new AppError(406, 'Item price is invalid...');
    }

    aItems[idx].dUpdatedAt = new Date();
    addItemData(JSON.stringify(aItems));

    const oItem = aItems[idx];
    responseHandler(res, status.ACCEPTED, 'Item updated successfully', oItem);
}