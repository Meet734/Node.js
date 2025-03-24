const {validateItem, eventEmitter} = require('../../helper');
const fs = require('fs');

function deleteItem(req, res) {
    if(!req || !res){
        return;
    }
    if(req.method === 'DELETE' && (req.url).startsWith("/api/data/")){
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
}

module.exports = deleteItem;