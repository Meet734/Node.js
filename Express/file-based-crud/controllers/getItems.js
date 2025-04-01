const AppError = require('../utils/appError');
const {getItemData} = require('../utils/getItemData');
const responseHandler = require('../helper/responseHandler');
const {status} = require('http-status');

exports.getItems = function(req, res){
    console.log("Getting all items");

    //Read all the items data
    const aAllItems = getItemData();

    //Filter only avilable data
    const idx = aItems.findIndex((oItem) => {
        return (!oItem.isDeleted && oItem.iId == iId);
    });

    // console.log(aItems);
    if(idx === -1){
        responseHandler(res, status.OK, 'No data to show');
    }
    
    responseHandler(res, status.OK, 'Items fetch successfully', aItems);
}
