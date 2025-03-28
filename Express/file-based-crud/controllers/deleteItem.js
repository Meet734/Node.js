const {validateId} = require('../utils/validateItem');
const {getItemData} = require('../utils/getItemData');
const {addItemData} = require('../utils/addItemData');
const AppError = require('../utils/appError');

exports.deleteItem = function(req, res){
    let iId = req.params.id;
    if(!validateId(iId)){
        //invalid id handler
        throw new AppError(400, 'fail', 'Invalid item Id...');
    }

    let aItems = getItemData();

    let oItem = aItems.find((oItem) => {
        return (oItem.iId === iId);
    });
    
    if(oItem.isDeleted){
        //Item not found with this id
        throw new AppError(400, 'fail', 'Item not found with this id...');
    }

    oItem.isDeleted = true;
    addItemData(JSON.stringify(aItems));
    res.json({"Message": "Item deleted successfully...", oItem});
}