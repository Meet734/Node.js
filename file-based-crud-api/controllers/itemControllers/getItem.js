const fs = require('fs');
const http = require('http');
const {generateResponse} = require('../../helper');

function getItem(req, res){
    if(!req || !res){
        return;
    }
    // console.log("Inside the getItem controller...");
    if(req.method === 'GET' && (req.url === '/api/data' || req.url === '/api/data/')){
        try{
            let sData = fs.readFileSync('data.json');
            let aItemData = JSON.parse(sData);

            //checking the data is not deleted
            aItemData = aItemData.filter((item) => {
                return (!item.isDeleted);
            });
    
            if(!aItemData.length){
                generateResponse(res, 200, "application/json", "No data available...");
                return;
            }
            //filtered only available data
            generateResponse(res, 200, "application/json", JSON.stringify(aItemData));
        }
        catch(error){
            generateResponse(res, 500, "application/json", "Error in reading data: "+error.message);
            return;
        }
    }
    else{
        generateResponse(res, 404, "application/json", "Invalid path...");
        return;
    }
}

module.exports = getItem;