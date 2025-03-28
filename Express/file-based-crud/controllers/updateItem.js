const {validateId, nameValidator, quantityValidator, priceValidator, uniqueName, validateItem} = require('../utils/validateItem');
const {getItemData} = require('../utils/getItemData');
const {addItemData} = require('../utils/addItemData');
const AppError = require('../utils/appError');

exports.updateItem = function(req, res){
    let iId = req.params.id;
    let oUpdateItem = req.body;

    console.log({iId});
    console.log(req.body);
    if(!validateId(iId)){
        //handle this invalid id...
        throw new AppError(400, 'fail', 'Invalid item Id...');
    }
    if(!validateItem(oUpdateItem)){
        throw new AppError(400, 'fail', 'Invalid item...');
    }
    
        let aItems = getItemData();
        let itemUpdated = false;
        let oItem;

        for(let idx=0;idx<aItems.length;idx++){
            if(aItems[idx].isDeleted || aItems[idx].iId !== iId){
                continue;
            }
            
            if(Object.hasOwn(oUpdateItem, 'sName') && nameValidator(oUpdateItem.sName)){
                if(!uniqueName(oUpdateItem.sName, iId)){
                    throw new AppError(400, 'fail', 'Item with this name already exist...');
                }
                aItems[idx].sName = oUpdateItem.sName;
            }
            
            if(Object.hasOwn(oUpdateItem, 'nQuantity') && quantityValidator(+oUpdateItem.nQuantity)){
                aItems[idx].nQuantity = +oUpdateItem.nQuantity;
                let aStatus = ['Available', 'Sold Out'];
                aItems[idx].sStatus = aStatus[aItems[idx].nQuantity?0:1];
            }
            if(Object.hasOwn(oUpdateItem, 'nPrice') && priceValidator(+oUpdateItem.nPrice)){
                aItems[idx].nPrice = +oUpdateItem.nPrice;
            }
        
            aItems[idx].dUpdatedAt = new Date();
            addItemData(JSON.stringify(aItems));
            
            itemUpdated = true;
            oItem = aItems[idx];
            break;
        }
        res.json({"Message": "Item updated successfully...", oItem});

    if(!itemUpdated){
        //item not found with this id...
        throw new AppError(400, 'fail', 'Item not found with this id...');
    }
}