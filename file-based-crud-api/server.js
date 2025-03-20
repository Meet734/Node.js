const http = require('http');
const uuid = require('uuid');
const EventEmitter = require('events');
const fs = require('fs');

const PORT = 3000;

let eventEmitter = new EventEmitter();
eventEmitter.on('itemCreated', function() {
    console.log("Event: New Item added successfully...");
}).on('itemUpdated', function() {
    console.log("Event: Item updated successfully...");
}).on('itemDeleted', function() {
    console.log("Event: Item deleted successfully...");
}).on('error', function() {
    console.log("Event: Some error occurred...");
});

//Validating Input Item
function validateItem(oInputItem, stat){
    // console.log("Name: ",/^[a-zA-Z0-9]+/.test(oInputItem.sName))
    if(stat === 'exist'){
        if(Object.hasOwn(oInputItem, "sName") || Object.hasOwn(oInputItem, "nQuantity") || Object.hasOwn(oInputItem, "nPrice")){
            if(Object.hasOwn(oInputItem, "sName") && /^[a-zA-Z0-9]+/.test(oInputItem.sName)){
                console.log(/^\d+/.test(oInputItem.sName));
                if(!(/^\d+/.test(oInputItem.sName))){
                    return false;
                };
            }
            if(Object.hasOwn(oInputItem,"nQuantity")){
                oInputItem.nQuantity = parseInt(oInputItem.nQuantity);
                console.log("Test: ",oInputItem.nQuantity < 0);
                if(oInputItem.nQuantity < 0){
                    return false;
                }
            }
            if(Object.hasOwn(oInputItem,"nPrice")){
                oInputItem.nPrice = parseInt(oInputItem.nPrice);
            }
            return true;
        }
        return false;
    }
    if(/^[a-zA-Z0-9]+/.test(oInputItem.sName) && /^\d+/.test(oInputItem.nQuantity) && /^\d+/.test(oInputItem.nPrice)){
        if(/^\d+/.test(oInputItem.sName)){
            return false;
        }
        oInputItem.nQuantity = parseInt(oInputItem.nQuantity);
        oInputItem.nPrice = parseInt(oInputItem.nPrice);
        return true;
    }
    return false;
}

class Item {
    //Name, Quantity, Price, status, createdAt Date, updateAt Date.
    #aStatus = ['Sold Out', 'Available'];
    constructor(sName, nQuantity, nPrice){
        this.iId = uuid.v1();
        this.sName = sName;
        this.nQuantity = nQuantity;
        this.sStatus = this.#aStatus[!nQuantity?0:1];
        this.nPrice = nPrice;
        this.dCreatedAt = new Date();
        this.dUpdatedAt = new Date();
        this.isDeleted = false;
    }
}

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);

    if(req.method === 'GET' && (req.url === '/api/data' || req.url === '/api/data/')){
        try{
            let sData = fs.readFileSync('data.json');
            let aItemData = JSON.parse(sData);
            //checking the data is not deleted
            aItemData = aItemData.filter((item) => {
                return (!item.isDeleted);
            });

            if(!aItemData.length){
                res.writeHead(200, {"content-type": "application/json"});
                res.write("No data available");
                res.end();
                return;
            }
            //filtered only available data
            res.writeHead(200, {"content-type": "application/json"});
            res.write(JSON.stringify(aItemData));
            res.end();
        }
        catch(error){
            console.log("Error in reading data: ", error.message);
            res.writeHead(500, {"content-type": "application/json"});
            res.write("Error in reading data: "+error.message);
            res.end();
        }
    }
    else if(req.method === 'GET' && (req.url).startsWith('/api/data')){
        let iId = (req.url).split('/').pop();
        // console.log("Validate id: ", uuid.validate(iId));
        // console.log("version of id: ", uuid.version(iId));
        if(!(uuid.validate(iId))){
            res.writeHead(400, {"content-type": "application/json"});
            res.write('Invalid itemId');
            res.end();
            return;
        }

        try{
            let data = fs.readFileSync('data.json');
            data = JSON.parse(data);
            
            //checking the data with particular id is present and is not deleted
            data = data.filter((item) => {
                return (item.iId === iId && !item.isDeleted);
            });
    
            // console.log(data.length);
            //if data is not available to show
            if(!data.length){
                console.log("No data found with this id");
                res.writeHead(404, {"content-type": "application/json"});
                res.write("No Item found with this ID");
                res.end();
                return;
            }
    
            //if the data is available to show
            res.writeHead(200, {"content-type": "application/json"});
            res.write(JSON.stringify(data[0]));
            res.end();
        }
        catch(error){
            console.log("Error in reading data: ", error.message);
            res.writeHead(500, {"content-type": "application/json"});
            res.write("Error: "+error.message);
            res.end();
        }

    }
    else if(req.method === 'POST' && req.url === '/api/data'){
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
                eventEmitter.emit('itemCreated');

                res.writeHead(201, {"content-type": "application/json"});
                res.write("Data added successfully");
                // console.log(aItemData);
                res.end();
            }
            catch(error){
                // console.log("Error in writing data: ", error.message);
                eventEmitter.emit('error');

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
    else if(req.method === 'PUT' && (req.url).startsWith("/api/data/")){
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
    else if(req.method === 'DELETE' && (req.url).startsWith("/api/data/")){
        //get the item id from the request url
        let iId = (req.url).split('/').pop();
        // console.log(iId);

        try{
            let aItemData = JSON.parse(fs.readFileSync('data.json'));
            let bAlreadyDeleted = true;
            aItemData = aItemData.filter((item) => {
                if(item.iId === iId && !item.isDeleted){
                    item.isDeleted = true;
                    bAlreadyDeleted = false;
                }
                return true;
            });

            if(bAlreadyDeleted){
                res.writeHead(400, {"content-type": "application/josn"});
                res.write("Data not found with this id...");
                res.end();
                return;
            }
            //writing back the updated data
            fs.writeFileSync('data.json', JSON.stringify(aItemData));

            //event call
            eventEmitter.emit('itemDeleted');

            console.log("Data deleted successfully...");
            res.writeHead(200, {"content-type": "application/json"});
            res.write("Data deleted successfully...");
            res.end();
        }
        catch(error){
            // console.log("Error: ", error.message);
            eventEmitter.emit('error');

            res.writeHead(404, {"content-type": "application/json"});
            res.write("Error: "+error.message);
            res.end();
        }
    }
    else if(req.method === 'GET' && (req.url).startsWith('/public/')){
        let sFileName = req.url.split('/').pop();
        console.log(sFileName);
        if(!sFileName){
            eventEmitter.emit('error');
            res.writeHead(400, {"content-type": "application/json"});
            res.write("Invalid FileName");
            res.end();
            return;
        }

        try{
            let sFileData = fs.readFileSync("./public/"+sFileName);
            // console.log(sFileData);
            res.statusCode = 200;
            res.write(sFileData);
            res.end();
        }
        catch(error){
            eventEmitter.emit('error');
            // console.log(error.message);
            res.writeHead(404, {"content-type": "application/json"});
            res.write("File not found or Error in file reading");
            res.end();
        }
    }
    else{
        //in case if no route match
        res.writeHead(404, {"content-type": "application/json"});
        res.write("Invalid path");
        res.end();
    }
});

server.listen(PORT, function (){
    console.log(`Server is listening on port ${PORT}...`);
})

// console.log(new Item('Apple', 100, 199));
// console.log(http.STATUS_CODES);