const {validateId} = require('../utils/validateItem');
const {getItemData} = require('../utils/getItemData');
const {addItemData} = require('../utils/addItemData');
const AppError = require('../utils/appError');
const responseHandler = require('../helper/responseHandler');
const {status} = require('http-status');

exports.deleteItem = function(req, res){
    const {iId} = req.params.id;
    if(!validateId(iId)){
        //invalid id handler
        throw new AppError(status.BAD_REQUEST ,'Invalid item Id...');
    }

    const aItems = getItemData();

    const idx = aItems.findIndex((oItem) => {
        return (!oItem.isDeleted && oItem.iId === iId);
    })
    
    if(idx === -1){
        //Item not found with this id
        responseHandler(res, status.NOT_FOUND, 'Item with this id not found');
    }

    addItemData(JSON.stringify(aItems));
    responseHandler(res, status.ACCEPTED, 'Item deleted successfully', oItem);
}