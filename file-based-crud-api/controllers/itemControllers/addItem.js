const fs = require('fs');
const {Item, validateItem} = require('../../helper');

function addItem(req, res){
    if(!req || !res){
        return;
    }
    if(req.method === 'POST' && req.url === '/api/data'){
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
                // eventEmitter.emit('itemCreated');

                res.writeHead(201, {"content-type": "application/json"});
                res.write("Data added successfully");
                // console.log(aItemData);
                res.end();
            }
            catch(error){
                // console.log("Error in writing data: ", error.message);
                // eventEmitter.emit('error');

                res.writeHead(500, {"content-type": "application/json"});
                res.write("Error found: "+error.message);
                res.end();
            }
        }).on('error', (error) => {
            //error case
            // console.log("There is some error: ", error.message);
            res.writeHead(404, {"content-type": "application/json"});
            res.write("Error in reading request body...");
            res.end();
        });
    }
}

module.exports = addItem;