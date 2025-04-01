const {getItemData} = require('../utils/getItemData');
const {validateId} = require('../utils/validateItem');
const AppError = require('../utils/appError');
const responseHandler = require('../helper/responseHandler');
const {status} = require('http-status');

exports.getItem = function(req, res){
    console.log("Getting item with id...");

    let iId = req.params.id;
    console.log(iId);
    if(!validateId(iId)){
        //handle invalid id...
        throw new AppError(status.BAD_REQUEST, 'Item id is not valid...');
    }

    const aItems = getItemData();
    
    const idx = aItems.findIndex((oItem) => {
        return (!oItem.isDeleted && oItem.iId == iId);
    });

    // console.log(aItems);
    if(idx === -1){
        responseHandler(res, status.OK, 'Item not found with this ID');
    }
    res.json(aItems);
    responseHandler(res, status.OK, 'Items fetch successfully', aItems);
}