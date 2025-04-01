const {Item} = require('../models/item');
const {validateItem, uniqueName} = require('../utils/validateItem');
const {getItemData} = require('../utils/getItemData');
const {addItemData} = require('../utils/addItemData');
const AppError = require('../utils/appError');
const mailNewItem = require('../utils/mailNewItem');
const responseHandler = require('../helper/responseHandler');
const {status} = require('http-status');

exports.addItem = function(req, res){
    const oNewItem = req.body;
    // console.log(oNewItem);

    if(!validateItem(oNewItem)){
        //Item is not valid
        console.log("Invalid Item...");
        console.log(AppError);
        throw new AppError(status.BAD_REQUEST, 'Invalid Item...');
    }
    const oItem = new Item(oNewItem.sName, +oNewItem.nQuantity, +oNewItem.nPrice);
    
    if(!uniqueName(oItem.sName)){
        //Item with this name already exist...
        throw new AppError(status.BAD_REQUEST, 'Item with this name already exist...');
    }

    const aItems = getItemData();
    
    aItems.push(oItem);

    addItemData(JSON.stringify(aItems));
    mailNewItem(oItem);

    responseHandler(res, status.CREATED, "New item added successfully...", oItem);
}