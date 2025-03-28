const {getItemData} = require('../utils/getItemData');
const {validateId} = require('../utils/validateItem');
const AppError = require('../utils/appError');

exports.getItem = function(req, res){
    console.log("Getting item with id...");

    let iId = req.params.id;
    console.log(iId);
    if(!validateId(iId)){
        //handle invalid id...
        throw new AppError(400, 'fail', 'Invalid item Id...');
    }

    let aItems = getItemData();
    
    aItems = aItems.filter((oItem) => {
        return (!oItem.isDeleted && oItem.iId == iId);
    });
    // console.log(aItems);
    res.json(aItems);
}