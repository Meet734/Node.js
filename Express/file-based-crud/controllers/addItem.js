const fs = require('fs');
const {Item} = require('../models/item');
const {validateItem, uniqueName} = require('../utils/validateItem');
const {getItemData} = require('../utils/getItemData');
const {addItemData} = require('../utils/addItemData');
const AppError = require('../utils/appError');
const mailNewItem = require('../utils/mailNewItem');

exports.addItem = function(req, res){
    let oNewItem = req.body;
    console.log(oNewItem);
    if(!validateItem(oNewItem)){
        //Item is not valid
        console.log("Invalid Item...");
        console.log(AppError);
        throw new AppError(400, 'fail', 'Invalid Item...');
    }
    let oItem = new Item(oNewItem.sName, +oNewItem.nQuantity, +oNewItem.nPrice);
    
    if(!uniqueName(oItem.sName)){
        //Item with this name already exist...
        throw new AppError(400, 'fail', 'Item with this name already exist...');
    }

    let aItems = getItemData();
    
    aItems.push(oItem);

    addItemData(JSON.stringify(aItems));
    mailNewItem(oItem);

    res.json({"Message": "New item added successfully...", oNewItem});
}