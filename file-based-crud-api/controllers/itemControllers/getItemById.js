const fs = require('fs');
const uuid = require('uuid');
const {generateResponse} = require("../../helper");

function getItemById(req, res) {
    if(!req || !res){
        return;
    }
    if(req.method === 'GET' && (req.url).startsWith('/api/data')){
        let iId = (req.url).split('/').pop();
        if(!(uuid.validate(iId))){
            generateResponse(res, 400, "application/json", "Invalid itemId...");
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
                generateResponse(res, 404, "application/json", "No item found with this Id...");
                return;
            }
    
            //if the data is available to show
            generateResponse(res, 200, "application/json", JSON.stringify(data[0]));
            return;
        }
        catch(error){
            generateResponse(res, 500, "application/json", `Error found: ${error.message}`);
        }
    }
}

module.exports = getItemById;