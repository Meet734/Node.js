const fs = require('fs');
const {validateItem, eventEmitter, generateResponse} = require('../../helper');
const {Item} = require("../../models/item");

function addItem(req, res){
    if(!req || !res){
        return;
    }
    if(req.method === 'POST' && req.url === '/api/data'){
        // console.log("here in the code");
        let sInputData = "";
        req.on('data', (data) => {
            //taking request body in chunks
            sInputData += data;
        }).on('end', () => {
            //reading request body complete and show success message
            console.log("Input data read complete");
            
            try{
                let oInputItem = JSON.parse(sInputData);
                // console.log("true: ", Object.hasOwn(oInputItem, "sName") && Object.hasOwn(oInputItem, "nQuantity") && Object.hasOwn(oInputItem, "nPrice"));
                // console.log(validateItem(oInputItem, 'new'));
                console.log("New data");
                //validate the user input is in proper manner and valid
                if(!(Object.hasOwn(oInputItem, "sName") && Object.hasOwn(oInputItem, "nQuantity") && Object.hasOwn(oInputItem, "nPrice") && validateItem(oInputItem, 'new'))){
                    //error because of invalid request data
                    throw new Error("Invalid input data...");
                }

                //simply read the data as array and just push the new data, writeback the data
                let aItemData = JSON.parse(fs.readFileSync('data.json'));
                aItemData.push(new Item(oInputItem.sName, oInputItem.nQuantity, oInputItem.nPrice));

                fs.writeFileSync('data.json', JSON.stringify(aItemData));

                //event call
                eventEmitter.emit('itemCreated');
                generateResponse(res, 201, "application/json", `Data added successfully\nData: ${JSON.stringify(oInputItem)}`);
                return;
            }
            catch(error){
                // console.log("Error in writing data: ", error.message);
                eventEmitter.emit('error');
                generateResponse(res, 500, "application/json", `Error found: ${error.message}`);
            }
        }).on('error', (error) => {
            generateResponse(res, 404, "application/json", `Error found: ${error.message}`);
        });
    }
}

module.exports = addItem;