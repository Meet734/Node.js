const fs = require('fs');
const AppError = require('./appError');

exports.addItemData = function(sItems){
    try{
        console.log("writing data");
        fs.writeFileSync('data.json', sItems);
        console.log("Items are added to the data.json...");
    }
    catch(error){
        throw new AppError(500, 'fail', 'Internal Server Error...');
    }
}