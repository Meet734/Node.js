const {validateItem, eventEmitter} = require('../../helper');
const uuid = require('uuid');

function updateItem(req, res) {
    if(!res || !res){
        return;
    }
    if(req.method === 'PUT' && (req.url).startsWith("/api/data/")){
        //taking the input id from request url
        let iId = (req.url).split('/').pop();
        // console.log(iId);

        //checking the id is valid
        if(!(uuid.validate(iId))){
            res.writeHead(400, {"content-type": "application/json"});
            res.write('Invalid itemId');
            res.end();
            return;
        }


        // let data = fs.readFileSync('data.json');
        // data = JSON.parse(data);
        let sInputData = "";
        req.on('data', (data) => {
            sInputData += data;
        }).on('end', () => {
            try{
                //taking input object of item
                let oInputItem = JSON.parse(sInputData);
                // console.log("true: ", Object.hasOwn(oInputItem, "sName") || Object.hasOwn(oInputItem, "nQuantity") || Object.hasOwn(oInputItem, "nPrice"));
                // console.log(validateItem(oInputItem, 'exist'));
                if(!((Object.hasOwn(oInputItem, "sName") || Object.hasOwn(oInputItem, "nQuantity") || Object.hasOwn(oInputItem, "nPrice")) && validateItem(oInputItem, 'exist'))){
                    //if the input data is not in proper manner or invalid
                    throw new Error("Invalid input data...");
                }

                let aItemData = JSON.parse(fs.readFileSync('data.json'));
                let bUpdatedItem = false;   //taking a flag to get to know if any item updated

                aItemData.filter((item) => {
                    if(item.iId === iId && !item.isDeleted){
                        // console.log("check obj: ",item instanceof Item);
                        if(Object.hasOwn(oInputItem,"sName")){
                            item.sName = oInputItem.sName;
                        }
                        if(Object.hasOwn(oInputItem,"nQuantity")){
                            item.nQuantity = oInputItem.nQuantity;
                            if(oInputItem.nQuantity > 0){
                                item.sStatus = "Available";
                            }
                            else{
                                item.sStatus = "Sold Out";
                            }
                        }
                        if(Object.hasOwn(oInputItem,"nPrice")){
                            item.nPrice = oInputItem.nPrice;
                        }
                        item.dUpdatedAt = new Date();
                        bUpdatedItem = true;
                    }
                    return true;
                });
                if(!bUpdatedItem){
                    //if anything is not updated then item not found
                    throw new Error("Item not found");
                }

                //writing back the updated data
                fs.writeFileSync('data.json', JSON.stringify(aItemData));

                //event call
                eventEmitter.emit('itemUpdated');

                res.writeHead(202, {"content-type": "application/json"});
                res.write("Data added successfully");
                // console.log(aItemData);
                res.end();
            }
            catch(error){
                // console.log("Error in updating data: ", error.message);
                eventEmitter.emit('error');

                res.writeHead(500, {"content-type": "application/json"});
                res.write("Error found: "+error.message);
                res.end();
            }
        }).on('error', (error) => {
            // console.log("Error: ", error.message);
            res.writeHead(404, {"content-type": "application/json"});
            res.write("Error: "+error.message);
            res.end();
        })
    }
}

module.exports = updateItem;