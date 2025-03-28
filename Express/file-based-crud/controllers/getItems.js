const AppError = require('../utils/appError');
const {getItemData} = require('../utils/getItemData');

exports.getItems = function(req, res){
    console.log("Getting all items");

    let aItems = getItemData();
    // console.log(aItems);
    aItems = aItems.filter((oItem) => {
        return (!oItem.isDeleted);
    })
    res.json(aItems);
}