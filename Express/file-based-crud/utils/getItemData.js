const fs = require('fs');
const AppError = require('./appError');

exports.getItemData = function() {
    try{
        console.log("Reading file...");
        let sItems = fs.readFileSync('data.json');
        let aItems = JSON.parse(sItems);
        return aItems;
    }
    catch(error){
        throw new AppError(500, 'fail', 'Internal Server Error...');
    }
}