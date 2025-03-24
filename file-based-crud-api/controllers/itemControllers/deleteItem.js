const {validateItem, eventEmitter, generateResponse} = require('../../helper');
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
                generateResponse(res, 400, "application/json", "Data not found with this Id...");
                return;
            }
            //writing back the updated data
            fs.writeFileSync('data.json', JSON.stringify(aItemData));

            //event call
            eventEmitter.emit('itemDeleted');
            generateResponse(res, 200, "application/json", "Data deleted successfully...");
            return;
        }
        catch(error){
            // console.log("Error: ", error.message);
            eventEmitter.emit('error');
            generateResponse(res, 404, "application/json", `Error found: ${error.message}`);
        }
    }
}

module.exports = deleteItem;